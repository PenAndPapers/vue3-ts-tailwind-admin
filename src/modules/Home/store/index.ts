import { BaseQueryModel } from '@/base-models'
import { defineStore } from 'pinia'
import { getUsers } from '../api'

interface StoreInterface {
  isFetching: boolean
  isProcessing: boolean
}

export const useHomeStore = defineStore({
  id: 'HomeStore',
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
    async getUsers(payload: BaseQueryModel) {
      this.isFetching = true
      const response = await getUsers(payload)
      this.isFetching = false

      console.log('useHomeStore -> getUsers', response)
    },
  },
})
