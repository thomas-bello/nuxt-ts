import { Plugin } from '@nuxt/types'

const init: Plugin = async ({ store, app }) => {
  if (process.server) {
    await store.dispatch('fetchSysI18n')
  }
  // Spa Fallback
  if (process.client && !store.state.sysI18n[app.i18n.locale]) {
    await store.dispatch('fetchSysI18n')
  }
  // Hot reload on development
  // if (process.client && process.dev) {
  //   window.onNuxtReady(() => {
  //     window.$nuxt.$on('content:update', () => store.dispatch('fetchSysI18n'))
  //   })
  // }
}

export default init
