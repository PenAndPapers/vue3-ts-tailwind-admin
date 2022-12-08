<template>
  <div class="text-center">
    <h4 class="text-center mb-4">
      An error occured while processing your request
    </h4>
    <el-button type="primary" @click="handleShowRegisterForm">
      <el-icon><Back /></el-icon> Back
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useRegisterStore } from '@/modules/Register/store'

const registerStore = useRegisterStore()

const handleShowRegisterForm = () => {
  registerStore.setIsRegistered(null)
}
</script>

<style scoped></style>
