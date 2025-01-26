<template>
    <div class="login-page page-center">
        <form @submit.prevent="login" class="form-wrap">
            <div class="login-page__inputs">
                <AppInput type="email" placeholder="Email" required v-model="form.email"></AppInput>
                <AppInput type="password" placeholder="Password" required v-model="form.password"></AppInput>
            </div>

            <div class="form">
                <AppButton>Войти</AppButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import { query } from '@/api/query';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInput.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const form = ref({
    email: '',
    password: '',
})

async function login() {
    query('/authorization', {method: 'POST', body: form.value})
    .then(response => response.json())
    .then(json => {
        localStorage.setItem('token', json.token)
        router.push({name: 'files'})
    })
}
</script>

<style scoped>
.login-page__inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>