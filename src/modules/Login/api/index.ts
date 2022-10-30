import request from '@/utils/request'
import type { LoginForm, LoginResponse } from '../models'

export const login = (data: LoginForm): Promise<LoginResponse> =>
  request({
    method: 'POST',
    url: '/login',
    data,
  })
