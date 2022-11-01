<template>
  <component class="text-center flex" :class="classes" :is="'dynamic-layout'">
    <AppNavigation />
    <AppMain />
  </component>
</template>

<script setup lang="ts">
import AppNavigation from './AppNavigation/index.vue'
import AppMain from './AppMain/index.vue'
defineProps<{
  classes: string
}>()
</script>
