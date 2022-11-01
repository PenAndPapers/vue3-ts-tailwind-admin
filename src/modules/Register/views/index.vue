<template>
  <div class="register-page">
    <RegisterForm v-if="isRegistered === null" />
    <SuccessMessage v-if="isRegistered === true" />
    <ErrorMessage v-if="isRegistered === false" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRegisterStore } from '@/modules/Register/store'
import RegisterForm from '@/modules/Register/views/components/RegisterForm/index.vue'
import SuccessMessage from '@/modules/Register/views/components/RegisterMessage/SuccessMessage.vue'
import ErrorMessage from '@/modules/Register/views/components/RegisterMessage/ErrorMessage.vue'

const registerStore = useRegisterStore()
const isRegistered = computed(() => registerStore._isRegistered)
</script>

<style scoped lang="scss"></style>
