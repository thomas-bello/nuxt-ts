import { ServerMiddleware } from '@nuxt/types'
import mockData from '../mock'

const apiMockMiddleware: ServerMiddleware = function (req, res, next) {
  // Use req, res, next
  // console.log('res', res)
  console.log('mockData', mockData)

  const { url } = req
  console.log('apiMockMiddleware url', url)
  const [baseUrl = ''] = url?.split('?') || []

  console.log('apiMockMiddleware baseUrl', baseUrl)
  let data
  if (baseUrl) {
    data = mockData[baseUrl]
  }
  next()
  console.log(url, 'data', data)
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

export default apiMockMiddleware
