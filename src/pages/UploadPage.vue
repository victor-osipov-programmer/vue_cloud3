<template>
    <div class="upload-page ">
        <AppPanel>
            <template #actions>
                <AppButton @click="$router.back()">Назад</AppButton>
            </template>
        </AppPanel>

        <div class="page-center">

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

        </div>
    </div>
</template>

<script setup>
import { query } from '@/api/query';
import AppButton from '@/components/AppButton.vue';
import AppPanel from '@/components/AppPanel.vue';
import { ref } from 'vue';

const files = ref([])

function upload(event) {
    files.value = Array.from(event.target.files)

    const data = new FormData()
    files.value.forEach(file => data.append('files[]', file))

    query('/files', {method: 'POST', body: data})
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })
}
</script>

<style scoped>
.upload-page {
    display: flex;
}
.upload-files {
    width: 400px;
    background-color: var(--color-bg-primary);
    border-radius: 5px;
    position: relative;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    color: var(--color-bg-secondary);
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
    color: var(--color-bg-secondary);
}
</style>