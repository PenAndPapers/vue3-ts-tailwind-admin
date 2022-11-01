import { defineStore } from 'pinia'
import type { Token } from '@/base/models'
interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
  isAuthenticated: boolean
  token: Token | null
}

export const useBaseStore = defineStore({
  id: 'BaseStore',
  state: (): StoreInterface => ({
    isFetching: false,
    isProcessing: false,
    isAuthenticated: false,
    token: null,
  }),
  getters: {
    _isFetching: (state) => state.isFetching,
    _isProcessing: (state) => state.isProcessing,
    _isAuthenticated: (state) => state.isAuthenticated,
    _token: (state) => state.token,
  },
  actions: {
    setIsFetching(payload: boolean) {
      this.isFetching = payload
    },
    setIsProcessing(payload: boolean) {
      this.isProcessing = payload
    },
    setIsAuthenticated(payload: boolean) {
      this.isAuthenticated = payload
    },
    setToken(payload: Token | null) {
      this.token = payload
    },
  },
  persist: {
    storage: sessionStorage,
    key: '_APP_',
  },
})
