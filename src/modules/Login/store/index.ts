import { defineStore } from 'pinia'
import router from '@/base/router'
import { login } from '../api'
import type { LoginForm } from '../models'
interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
}

export const useLoginStore = defineStore({
  id: 'LoginStore',
  state: (): StoreInterface => ({
    isFetching: false,
    isProcessing: false,
  }),
  getters: {
    _isFetching: (state) => state.isFetching,
    _isProcessing: (state) => state.isProcessing,
  },
  actions: {
    setIsFetching(payload: boolean) {
      this.isFetching = payload
    },
    setIsProcessing(payload: boolean) {
      this.isProcessing = payload
    },
    async login(payload: LoginForm) {
      this.isProcessing = true
      const response = await login(payload)
      this.isProcessing = false

      if (response.token) {
        router.replace({ name: 'OneTimePin' })
      }
    },
  },
})
