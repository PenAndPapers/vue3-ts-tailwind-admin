import type { OneTimePinForm } from '@/modules/OneTimePin/models'

export const oneTimePin = async (payload: OneTimePinForm) => {
  if (payload) {
    const response = await new Promise((resolve) => resolve(true))
    return response
  }

  throw new Error('Payload is missing')
}
