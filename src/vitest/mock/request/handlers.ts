import { rest } from 'msw'
import 'whatwg-fetch'
import { loginSuccessResponse, loginErrorResponse } from '../response/login'
import {
  registerSuccessResponse,
  registerErrorResponse,
} from '../response/register'
import {
  usersSuccessResponse,
  usersNoDataSuccessResponse,
} from '../response/users'
import { endPoints } from '../api/endPoints'

export const handlers = [
  rest.post(endPoints.login, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(loginSuccessResponse))
  ),
  rest.post(endPoints.login, (req, res, ctx) =>
    res(ctx.status(400), ctx.json(loginErrorResponse))
  ),
  rest.post(endPoints.register, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(registerSuccessResponse))
  ),
  rest.post(endPoints.register, (req, res, ctx) =>
    res(ctx.status(400), ctx.json(registerErrorResponse))
  ),
  rest.get(endPoints.users, (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    const response =
      page === '1' ? usersSuccessResponse : usersNoDataSuccessResponse
    return res(ctx.status(200), ctx.json({ ...response }))
  }),
]
