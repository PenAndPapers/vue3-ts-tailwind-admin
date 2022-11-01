<template>
  <component class="text-center block" :class="classes" :is="'dynamic-layout'">
    <AppNavigation />
    <AppMain />
    <AppFooter />
  </component>
</template>

<script setup lang="ts">
import AppNavigation from './AppNavigation/index.vue'
import AppMain from './AppMain/index.vue'
import AppFooter from './AppFooter/index.vue'
defineProps<{
  classes: string
}>()
</script>
