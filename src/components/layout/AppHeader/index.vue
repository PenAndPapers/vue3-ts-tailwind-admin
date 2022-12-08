<template>
  <el-header class="px-7 py-4 border-b border-b-gray-200">
    <h2 class="text-xl">{{ routeName }}</h2>
  </el-header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const routeName = ref('')

watch(route, (newVal) => {
  routeName.value = newVal.meta.title as string
})
</script>

<style scoped></style>
