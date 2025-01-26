<template>
    <div class="files-page">
        <AppPanel></AppPanel>
        <AppFiles></AppFiles>
    </div>
</template>

<script setup>
import AppFiles from '@/components/AppFiles.vue';
import AppPanel from '@/components/AppPanel.vue';
import { getFiles } from '@/stores/file';

getFiles()
</script>

<style scoped>
.files-page {
    display: flex;
    
}
</style>