<template>
    <div class="app-files">
        <div v-if="files.length === 0" class="shared-page__empty-text">
            Пусто
        </div>
        <AppFile v-for="file in files" :file="file">
            <template #actions>
                <div class="form app-files__form">
                    <AppButton @click="deleteFile(file)">Удалить</AppButton>
                    <AppButton @click="$router.push({name: 'edit', query: {file_id: file.file_id, file_name: file.name}})">Редактировать</AppButton>
                    <AppButton>Права</AppButton>
                    <AppButton @click="downloadFile(file)">Скачать</AppButton>
                </div>
            </template>
        </AppFile>
    </div>
</template>

<script setup>
import { getFiles } from '@/stores/file';
import AppFile from './AppFile.vue';
import AppButton from './AppButton.vue';
import { query } from '@/api/query';
import { downloadBlob } from '@/utils';


defineProps(['files'])

function downloadFile(file) {
    query('/files/' + file.file_id)
    .then(response => response.blob())
    .then(blob => {
        downloadBlob(blob, file.name)
    })
}

function deleteFile(file) {
    query('/files/' + file.file_id, { method: 'DELETE' })
    .then(response => {
        if (response.ok) {
            getFiles()
        }
    })
}
</script>

<style scoped>
.app-files {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 1rem;
    align-content: start;
    gap: 1rem;
}
.app-files__form {
    gap: 0.5rem;
    margin-top: 1rem;
}
.shared-page__empty-text {
    color: var(--color-secondary);
}
</style>