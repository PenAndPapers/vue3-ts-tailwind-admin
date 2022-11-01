import request from '@/utils/request'
import type { LoginForm, LoginResponse } from '@/modules/Login/models'

export const login = (data: LoginForm): Promise<LoginResponse> =>
  request({
    method: 'POST',
    url: '/login',
    data,
  })
