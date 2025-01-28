<template>
    <div class="edit-page page">
        <AppPanel></AppPanel>
        <div class="page-center">
            <form @submit.prevent class="edit-page__form">
                <AppInput class="edit-page__input" v-model="file_name" required placeholder="Имя файла"></AppInput>
                <AppButton @click="save">Сохранить</AppButton>
                <AppButton @click="router.push({name: 'files'})">Назад</AppButton>
            </form>
        </div>
    </div>
</template>

<script setup>
import { query } from '@/api/query';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppPanel from '@/components/AppPanel.vue';
import { getFiles } from '@/stores/file';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const file_name = ref(route.query.file_name)


function save() {
    query('/files/' + route.query.file_id, {method: 'PATCH', body: {
        name: file_name.value
    }})
    .then(response => {
        if (response.ok) {
            getFiles()
            router.back()
        }
    })
}
</script>

<style scoped>
.edit-page__form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.edit-page__input {
    width: 300px;
}
.edit-page__input {
    margin-bottom: 0.5rem;
}
</style>