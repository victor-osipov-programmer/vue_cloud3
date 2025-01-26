<template>
    <div class="app-panel">
        <router-link class="link" :to="{name: 'upload'}">Загрузка файлов</router-link>
    </div>
</template>

<script setup>


</script>

<style scoped>
.app-panel {
    height: 100dvh;
    background-color: aliceblue;
    min-width: 200px;
    padding: 0.5rem;
}
</style>