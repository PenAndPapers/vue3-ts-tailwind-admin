<template>
  <div class="">
    <h2>Error page</h2>
    <pre>{{ error }}</pre>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const error = reactive({
  code: '404',
  message: 'Page not found',
})
</script>

<style scoped lang="scss"></style>
