<template>
  <component
    class="text-center flex justify-end"
    :class="classes"
    :is="'static-layout'"
  >
    <el-aside
      width="540px"
      class="min-h-screen flex items-center px-10 border-l border-l-gray-200"
    >
      <div class="w-full">
        <h1>Logo</h1>
        <router-view />
      </div>
    </el-aside>
    <!-- <AppMain /> -->
  </component>
</template>

<script setup lang="ts">
defineProps<{
  classes: string
}>()
</script>
