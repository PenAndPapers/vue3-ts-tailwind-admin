import { useBaseStore } from '@/base/store'

export const isAuthenticated = () => {
  const baseStore = useBaseStore()

  if (baseStore._token && baseStore._isAuthenticated) return true
  else return false
}
