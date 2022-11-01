import { describe, it, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLoginStore } from './index'

describe('Login Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should submit and redirect to dashboard', async () => {
    const store = useLoginStore()
    await store.login({ email: 'test@email.com', password: 'qwerty123' })
  })
})
