<template>
    <div class="files-page">
        <AppPanel></AppPanel>
        <AppFiles :files="files"></AppFiles>
    </div>
</template>

<script setup>
import AppFiles from '@/components/AppFiles.vue';
import AppPanel from '@/components/AppPanel.vue';
import { files, getFiles } from '@/stores/file';

getFiles()
</script>

<style scoped>
.files-page {
    display: flex;
}
</style>