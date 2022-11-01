<template>
  <header>
    <nav>
      <span
        v-for="(route, index) in routes"
        :key="index"
        :class="index < routes.length - 1 ? 'mr-4' : ''"
      >
        <router-link :to="route" v-if="!route.meta.hideInNav">
          {{ route.name }}
        </router-link>
      </span>
      <span class="ml-4" @click="handleLogout" v-if="isAuthenticated">
        <a>Log out</a>
      </span>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useBaseStore } from '@/base/store'

const baseStore = useBaseStore()
const isAuthenticated = computed(() => baseStore._isAuthenticated)

const router = useRouter()
const routes = ref()

const handleLogout = async () => {
  await baseStore.setIsAuthenticated(false)
  await baseStore.setToken(null)
  await router.replace({ path: '/' })
  window.sessionStorage.clear()
}

watch(
  router.currentRoute,
  () => {
    routes.value = router
      .getRoutes()
      .map((item) => {
        return !item.meta.hideInNav ? item : null
      })
      .filter(Boolean)
  },
  { deep: true, immediate: true }
)
</script>

<style scoped lang="scss"></style>
