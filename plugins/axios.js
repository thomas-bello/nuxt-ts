// export default function ({ $axios, redirect }) {
export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.baseURL = process.env.baseUrl
    console.log('Making request to ' + config.url)
  })

  // 返回回调
  $axios.onResponse((res) => {
    console.log(`response to ${res.status} ${res.config.url}`)
    // console.log('response to ', res)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      // TODO
      // redirect('/400')
      console.error('error.response', error.response)
    }

    console.error('error.response', error.response.status, error.response.url)
  })
}
