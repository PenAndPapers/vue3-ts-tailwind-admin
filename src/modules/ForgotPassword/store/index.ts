import { defineStore } from 'pinia'

interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
}

export const useForgotPasswordStore = defineStore({
  id: 'ForgotPasswordStore',
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
  },
})
