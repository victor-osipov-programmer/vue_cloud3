<template>
    <div class="register-page page-center">
        <form @submit.prevent="register" class="form-wrap">
            <div class="form">
                <AppInput placeholder="Имя" required v-model="form.first_name"></AppInput>
                <AppInput placeholder="Фамилия" required v-model="form.last_name"></AppInput>
                <AppInput type="email" placeholder="Email" required v-model="form.email"></AppInput>
                <AppInput type="password" placeholder="Пароль" required v-model="form.password"></AppInput>
            </div>

            <div class="form">
                <AppButton>Зарегаться</AppButton>
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
    first_name: 'Vi',
    last_name: 'Os',
    email: '',
    password: '',
})

function register() {
    query('/registration', {method: 'POST', body: form.value})
    .then(response => {
        if (response.ok) {
            router.push({name: 'login'})
        }
    })
}
</script>

<style scoped>

</style>