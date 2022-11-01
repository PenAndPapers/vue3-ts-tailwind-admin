<template>
  <aside
    class="min-h-screen flex items-center px-10 border-l border-l-gray-200"
  >
    <div class="w-authForm">
      <h2 class="text-blue-600">Vue Slick Admin</h2>
      <LoginForm />
    </div>
  </aside>
</template>

<script setup lang="ts">
import LoginForm from '../LoginForm/index.vue'
</script>

<style lang="scss" scoped></style>
