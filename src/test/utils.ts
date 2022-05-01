import { rest } from 'msw'
import { setupServer } from 'msw/node'

const restFailedHandlers = [
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    (req, res, ctx) => {
      return res(ctx.status(500))
    }
  ),
  rest.get(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear',
    (req, res, ctx) => {
      return res(ctx.status(500))
    }
  ),
]

export const server = setupServer(...restFailedHandlers)

export const startFailedMockServer = () => {
  server.listen({ onUnhandledRequest: 'error' })
}

export const stopFailedMockServer = () => {
  server.close()
  server.resetHandlers()
}
