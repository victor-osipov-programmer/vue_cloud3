<template>
    <div class="app-files">
        <AppFile v-for="file in files" :file="file"></AppFile>
    </div>
</template>

<script setup>
import { files } from '@/stores/file';
import AppFile from './AppFile.vue';
</script>

<style scoped>
.app-files {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 0.5rem;
}
</style>