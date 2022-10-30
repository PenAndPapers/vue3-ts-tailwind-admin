<template>
  <div
    class="login-page"
    data-testid="login-page"
    data-role="test"
    data-required="true"
    data-x-code="123"
  >
    <h2 class="text-sky-800">Login Page</h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useLoginStore } from '@/modules/Login/store'

const loginStore = useLoginStore()

onMounted(() => {
  loginStore.validateForm({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  })
})
</script>

<style scoped lang="scss"></style>
