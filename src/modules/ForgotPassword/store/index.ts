import { defineStore } from 'pinia'
import { sendPasswordUpdateLink } from '@/modules/ForgotPassword/api'
import type { ForgotPasswordForm } from '@/modules/ForgotPassword/models'

interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
  isPasswordLinkSent: boolean
}

export const useForgotPasswordStore = defineStore({
  id: 'ForgotPasswordStore',
  state: (): StoreInterface => ({
    isFetching: false,
    isProcessing: false,
    isPasswordLinkSent: false,
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
    async sendPasswordUpdateLink(payload: ForgotPasswordForm) {
      this.isProcessing = true
      const response = await sendPasswordUpdateLink(payload)
      this.isProcessing = false

      this.isPasswordLinkSent = response ? true : false
    },
  },
})
