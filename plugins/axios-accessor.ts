import { Plugin } from '@nuxt/types'
import { AxiosError, AxiosResponse } from 'axios'

const axios: Plugin = ({ $axios, redirect }) => {
  // export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.baseURL = process.env.baseUrl
    console.log('Making request to ' + config.url)
  })

  // 返回回调
  $axios.onResponse((res) => {
    console.log(`response to ${res.status} ${res.config.url}`)
    // console.log('response to ', res)
  })

  $axios.onError((error: AxiosError) => {
    const { response = {} } = error
    const { status: code } = response as AxiosResponse
    console.error('error.response', code)
    if (`${code}` === `400`) {
      // TODO
      redirect('/400')
    }
  })
}

export default axios
