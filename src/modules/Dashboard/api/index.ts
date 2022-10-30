import request from '@/utils/request'

export const login = () =>
  request({
    method: 'POST',
    url: '/login',
  })
