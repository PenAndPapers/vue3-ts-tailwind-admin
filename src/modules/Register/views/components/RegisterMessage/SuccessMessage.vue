<template>
  <div class="text-center">
    <h4 class="text-center mb-4">
      A verification link has been sent to your email
    </h4>
    <router-link :to="{ name: 'Login' }">
      <el-button type="primary" class="el-icon--left">
        <el-icon><Back /></el-icon> Go to login
      </el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
