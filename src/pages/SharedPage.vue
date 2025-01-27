<template>
    <div class="shared-page">
        <AppPanel>
            <template #actions>
                <AppButton @click="$router.back()">Назад</AppButton>
            </template>
        </AppPanel>


        <AppFiles :files="shared_files"></AppFiles>
    </div>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue';
import AppFiles from '@/components/AppFiles.vue';
import AppPanel from '@/components/AppPanel.vue';
import { getSharedFiles, shared_files } from '../stores/file';

getSharedFiles()
</script>

<style scoped>
.shared-page {
    display: flex;
}
</style>