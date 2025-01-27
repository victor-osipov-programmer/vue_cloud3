<template>
    <div class="app-panel">
        <div class="app-panel__content">
            <router-link class="link" :to="{name: 'files'}">Файлы</router-link>
            <router-link class="link" :to="{name: 'shared'}">Общие файлы</router-link>
            <router-link class="link" :to="{name: 'upload'}">Загрузка файлов</router-link>

            <slot name="actions">

            </slot>
        </div>
            
        
    </div>
</template>

<script setup>


</script>

<style scoped>
.app-panel {
    min-height: 100dvh;
    background-color: var(--color-primary);
    flex-shrink: 0;
}
.app-panel__content {
    padding: 1rem;
    top: 0;
    position: sticky;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.2rem;
    color: rgb(42, 41, 49);
    
}
</style>