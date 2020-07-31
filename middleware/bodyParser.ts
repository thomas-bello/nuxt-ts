import { ServerMiddleware } from '@nuxt/types'
import * as bodyParser from 'body-parser'

const bodyParserMiddleware: ServerMiddleware = bodyParser.json()

export default bodyParserMiddleware
