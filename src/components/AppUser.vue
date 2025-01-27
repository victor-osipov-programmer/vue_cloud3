<template>
    <div class="app-user">
        <div class="app-user__fullname">
            {{ user.fullname }}
        </div>
        <div class="app-user__email">
            {{ user.email }}
        </div>
        <slot name="actions">

        </slot>
    </div>
</template>

<script setup>
defineProps(['user'])
</script>

<style scoped>
.app-user {
    background-color: var(--color-primary);
    padding: 1rem;
    border-radius: 5px;
}
.app-user__fullname {
    font-size: 1.5rem;
}
</style>