import { defineStore } from 'pinia'
import { register } from '@/modules/Register/api'
import type { RegisterForm } from '@/modules/Register/models'
interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
  isRegistered: boolean | null
}

export const useRegisterStore = defineStore({
  id: 'RegisterStore',
  state: (): StoreInterface => ({
    isFetching: false,
    isProcessing: false,
    isRegistered: null,
  }),
  getters: {
    _isFetching: (state) => state.isFetching,
    _isProcessing: (state) => state.isProcessing,
    _isRegistered: (state) => state.isRegistered,
  },
  actions: {
    setIsFetching(payload: boolean) {
      this.isFetching = payload
    },
    setIsProcessing(payload: boolean) {
      this.isProcessing = payload
    },
    setIsRegistered(payload: boolean | null) {
      this.isRegistered = payload
    },
    async register(payload: RegisterForm) {
      this.isProcessing = true
      const response = await register(payload)
      this.isProcessing = false

      this.setIsRegistered(response ? true : false)
    },
  },
})
