<template>
  <div class="">
    <h2 class="text-rose-800 p-2">Home page</h2>
    <el-button>I am ElButton</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useHomeStore } from '@/modules/Home/store'

const homeStore = useHomeStore()

const handleGetUsers = () => homeStore.getUsers({ page: 1 })

onMounted(() => {
  handleGetUsers()
})
</script>

<style scoped lang="scss"></style>
