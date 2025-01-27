<template>
    <button class="app-button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
.app-button {
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    background-color: var(--color-bg-secondary);
    color: white;
}
</style>