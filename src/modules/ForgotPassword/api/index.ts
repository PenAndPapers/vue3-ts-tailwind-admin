import type { LoginForm } from '@/modules/Login/models'

export const login = async (payload: LoginForm) => {
  if (payload) {
    const response = await new Promise((resolve) => resolve(true))
    return response
  }

  throw new Error('Payload is missing')
}
