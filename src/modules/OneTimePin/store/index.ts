import { defineStore } from 'pinia'
import router from '@/base/router'
import { useBaseStore } from '@/base/store'
import type {
  OneTimePinForm,
  OneTimePinResponse,
} from '@/modules/OneTimePin/models'
interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
}

export const useOneTimePinStore = defineStore({
  id: 'OneTimePinStore',
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
    async verifyOtp(payload: OneTimePinForm) {
      /**
       * FYI
       * OTP must be validated in backend
       * for the sake of example we hard code application token
       * but in real scenario access and refresh token
       * must be returned by an api
       */
      const otp = window.btoa(payload.otp)
      const str = Math.random().toString(30).slice(2, 36)
      const accessToken = window.btoa(str + otp)
      const refreshToken = window.btoa(otp + str)

      this.isProcessing = true
      const response: OneTimePinResponse = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            accessToken,
            refreshToken,
          })
        }, 1500)
      )
      this.isProcessing = false

      if (response.accessToken && response.refreshToken) {
        const baseStore = useBaseStore()
        await baseStore.setToken(response)
        await baseStore.setIsAuthenticated(true)

        router.push({ path: '/' })
      }
    },
  },
})
