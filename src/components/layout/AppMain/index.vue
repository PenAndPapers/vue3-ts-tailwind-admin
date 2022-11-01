<template>
  <main class="w-full">
    <AppHeader />
    <component class="block p-4" :is="'content'">
      <router-view />
    </component>
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader/index.vue'
</script>

<style scoped lang="scss"></style>
