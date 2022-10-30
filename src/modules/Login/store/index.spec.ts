import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLoginStore } from './index'

describe('Login Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should return email is required', () => {
    const store = useLoginStore()
    const error = store.validateForm({ email: '', password: '' })

    expect(error?.email).toBe('Email is required')
  })

  it('should return password is required', () => {
    const store = useLoginStore()
    const error = store.validateForm({ email: '', password: '' })

    expect(error?.password).toBe('Password is required')
  })

  it('should return email is not valid', () => {
    const store = useLoginStore()
    const error = store.validateForm({
      email: 'test@email',
      password: '**********',
    })

    expect(error?.email).toBe('Email is not valid')
  })

  it('should submit and redirect to dashboard', async () => {
    const store = useLoginStore()
    await store.login({ email: 'test@email.com', password: 'qwerty123' })
  })
})
