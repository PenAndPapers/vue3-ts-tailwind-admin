import { defineStore } from 'pinia'
import router from '@/base/router'
import { login } from '../api'
import type { LoginForm } from '../models'
import { setSession } from '@/utils/session'
import { isEmail } from '@/utils/validator'
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
    validateForm(payload: LoginForm) {
      const error = {} as LoginForm
      if (!payload.email) error.email = 'Email is required'
      if (payload.email && !isEmail(payload.email))
        error.email = 'Email is not valid'
      if (!payload.password) error.password = 'Password is required'

      if (Object.keys(error).length) return error

      this.login(payload)
    },
    async login(payload: LoginForm) {
      this.isProcessing = true
      const response = await login(payload)
      this.isProcessing = false

      if (response.token) {
        await setSession('_TOKEN_', response.token)
        router.replace({ name: 'Home' })
      }
    },
  },
})
