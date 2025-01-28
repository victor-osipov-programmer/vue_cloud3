<template>
    <div class="app-file">
        <div>
            <div class="app-file__name">{{ file.name }}</div>
            <div class="app-file__id">{{ file.file_id }}</div>
        </div>
        

        <slot name="actions">

        </slot>
    </div>
</template>

<script setup>
defineProps(['file'])
</script>

<style scoped>
.app-file {
    background-color: var(--color-primary);
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.app-file__name {
    margin-bottom: 0.2rem;
}
.app-file__id {
    color: var(--color-secondary);
}

</style>