<template>
  <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleTabClick">
    <el-tab-pane label="Profile" name="profile">
      <AccountProfile class="max-w-screen-md" />
    </el-tab-pane>
    <el-tab-pane label="Billing and plan" name="billing"
      >Billing and plan</el-tab-pane
    >
    <el-tab-pane label="Security" name="security">
      <AccountSecurity class="max-w-screen-md" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import AccountProfile from '../AccountTabContent/AccountProfile.vue'
import AccountSecurity from '../AccountTabContent/AccountSecurity.vue'

const activeTab = ref('profile')

const handleTabClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style scoped></style>
