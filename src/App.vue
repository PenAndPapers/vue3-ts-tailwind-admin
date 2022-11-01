<template>
  <DynamicLayout :classes="classes" v-if="isAuthenticated" />
  <StaticLayout :classes="classes" v-else />
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useBaseStore } from '@/base/store'
import DynamicLayout from '@/components/layout/DynamicLayout.vue'
import StaticLayout from '@/components/layout/StaticLayout.vue'

const baseStore = useBaseStore()
const isAuthenticated = computed(() => baseStore._isAuthenticated)

const route = useRoute()
const classes = ref('')
watchEffect(() => {
  if (
    Object.keys(route.meta).length > 0 &&
    Object.prototype.hasOwnProperty.call(route.meta, 'class')
  ) {
    classes.value = route.meta.class as string
  }
})
</script>

<style>
@import '@/assets/style/index.scss';
@import '@/assets/style/tailwind.scss';
</style>
