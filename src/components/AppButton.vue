<template>
    <button class="app-button">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped>
.app-button {
    min-height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
}
</style>