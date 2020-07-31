import { Plugin } from '@nuxt/types'

const i18n: Plugin = ({ app, store }) => {
  app.i18n.onLanguageSwitched = (...a) => store.dispatch('fetchSysI18n', a)
}

export default i18n
