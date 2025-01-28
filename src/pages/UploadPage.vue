<template>
    <div class="upload-page page">
        <AppPanel></AppPanel>

        <div class="page-center upload-page__content">

            <div class="upload-files">
                <p class="upload-files__title">Загрузить файлы</p>
                <input ref="files_el" class="input-file" type="file" multiple @change="upload">
                <div class="upload-files__img"></div>
                <div v-if="files.length !== 0" class="upload-files__names">
                    <div v-for="file in files">
                        {{ file.name }}
                    </div>
                </div>
            </div>

            <AppButton @click="$router.push({name: 'files'})">Назад</AppButton>

            <div class="upload-page__files">
                <div class="upload-file" v-for="file in upload_files">
                    <div class="upload-file__name">
                        {{ file.name }}
                    </div>

                    <div class="upload-file__panel">
                        <div v-if="file.success" class="upload-file__status">Загружен</div>
                        <div v-else-if="!file.uploading" class="upload-file__status upload-file__status_error">Ошибка</div>
                        <div v-if="file.uploading" class="upload-file__status upload-file__status_uploading">Загрузка</div>
                        <AppButton v-if="file.success" @click="downloadFile(file)">Скачать</AppButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { query, handler } from '@/api/query';
import AppButton from '@/components/AppButton.vue';
import AppPanel from '@/components/AppPanel.vue';
import AppFile from '@/components/AppFile.vue'
import { downloadFile } from '@/stores/file.js'
import { ref } from 'vue';

const files = ref([])
const upload_files = ref([])

function upload(event) {
    files.value = Array.from(event.target.files)

    const data = new FormData()
    files.value.forEach(file => data.append('files[]', file))

    upload_files.value = files.value.map(file => ({
        name: file.name,
        success: false,
        uploading: true
    }))

    query('/files', { method: 'POST', body: data })
        .then(handler)
        .then(json => {
            upload_files.value = json ?? []
        })
        .catch(err => {
            upload_files.value = files.value.map(file => ({
                name: file.name,
                success: false,
            }))
        })
}
</script>

<style scoped>
.upload-files {
    min-width: 400px;
    background-color: var(--color-primary);
    border-radius: 5px;
    position: relative;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: var(--color-secondary);
}
.upload-files__names {
    padding: 1rem;
}
.input-file {
    position: absolute;
    z-index: 1;
    inset: 0;
    opacity: 0;
    cursor: pointer;
}

.upload-files__title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
}

.upload-files__img {
    mask-image: url('@/assets/img/upload-img.png');
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    height: 100px;
    width: 100%;
    background-color: currentColor;
    color: var(--color-secondary);
}

.upload-page__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
}

.upload-file {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-primary);
    padding: 1rem;
    border-radius: 5px;
    gap: 1rem;
}
.upload-file__panel {
    display: flex;
    gap: 0.5rem;
}
.upload-page__files {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.upload-file__status {
    background-color: rgb(116, 216, 76);
    border-radius: 5px;
    color: white;
    padding-inline: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 40px;
}
.upload-file__status_error {
    background-color: rgb(173, 72, 72);
}
.upload-file__status_uploading {
    background-color: rgb(100, 100, 100);
}
</style>