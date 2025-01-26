<template>
    <div class="upload-page page-center">
        <div class="upload-files">
            <input class="input-file" type="file" multiple>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.upload-files {
    width: 400px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 5px;
    position: relative;
}
.input-file {
    position: absolute;
    inset: 0;
    opacity: 0;
}
</style>