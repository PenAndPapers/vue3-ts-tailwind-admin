import type { AxiosInstance, AxiosResponse } from 'axios'

export const setToken = (request: AxiosInstance, response: AxiosResponse) => {
  request.defaults.headers.common = {
    'X-Token': response.data.token,
  }

  return request
}
