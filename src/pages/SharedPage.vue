<template>
    <div class="shared-page page">
        <AppPanel></AppPanel>


        <AppFiles :files="shared_files" type="shared_files"></AppFiles>
    </div>
</template>

<script setup>
import AppFiles from '@/components/AppFiles.vue';
import AppPanel from '@/components/AppPanel.vue';
import { getSharedFiles, shared_files } from '../stores/file';

getSharedFiles()
</script>

<style scoped>
</style>