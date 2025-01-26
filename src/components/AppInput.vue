<template>
    <input v-model="model" class="app-input" type="text">
</template>

<script setup>
const model = defineModel()
</script>

<style scoped>
.app-input {
    width: 200px;
    background-color: azure;
    border: none;
    border-radius: 5px 5px 0 0;
    min-height: 40px;
    border-bottom: 1px solid grey;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
}

</style>