<template>
    <div class="rights-page page">
        <AppPanel></AppPanel>

        <div>
            

            <div class="rights-page__users">
                <div class="rights-page__header">
                    <form @submit.prevent="addRights" class="rights-page__form">
                        <AppInput required type="email" placeholder="Email" v-model="email"></AppInput>
                        <AppButton>Добавить</AppButton>
                    </form>
                </div>
                
                <AppUser v-if="file" v-for="user in file.accesses" :user>
                    <template #actions>
                        <AppButton @click="deleteRights(user)" class="app-button__delete">Удалить</AppButton>
                    </template>
                </AppUser>
            </div>
        </div>
    </div>
</template>

<script setup>
import { query } from '@/api/query';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import AppPanel from '@/components/AppPanel.vue';
import AppUser from '@/components/AppUser.vue';
import { files, getFiles } from '@/stores/file';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const email = ref('')

const file = computed(() => {
    return files.value.find(file => file.file_id == route.query.file_id)
})

function addRights() {
    query('/files/' + route.query.file_id + '/accesses', {method: 'POST', body: {
        'email': email.value
    }})
    .then(response => {
        if (response.ok) {
            getFiles()
        }
    })
}

function deleteRights(user) {
    query('/files/' + route.query.file_id + '/accesses', {method: 'DELETE', body: {
        'email': user.email
    }})
    .then(response => {
        if (response.ok) {
            getFiles()
        }
    })
}

getFiles()
</script>

<style scoped>
.app-button__delete {
    margin-top: 1rem;
}
.rights-page__users {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 1rem;
    gap: 1rem;
}
.rights-page__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.app-input {
    width: 300px;
}
.rights-page__form {
    align-self: end;
}
.rights-page__header {
    display: grid;
    grid-column: 1/-1;
    grid-template-columns: subgrid;
    margin-bottom: 1rem;
}
</style>