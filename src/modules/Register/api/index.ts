import request from '@/utils/request'
import type { RegisterForm, RegisterResponse } from '@/modules/Register/models'

export const register = (data: RegisterForm): Promise<RegisterResponse> =>
  request({
    method: 'POST',
    url: '/register',
    data,
  })
