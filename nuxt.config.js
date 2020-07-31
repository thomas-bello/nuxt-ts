const isDevelopment = () => process.env.NODE_ENV === 'development'

const getServerMiddleware = () => {
  return isDevelopment()
    ? [
        '~/middleware/bodyParser',
        // Will register file from project api directory to handle /api/* requires
        {
          path: '/api',
          handler: '~/middleware/mock',
        },
      ]
    : []
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: (chunk) => {
      const after = process.env.npm_package_name
      if (chunk) {
        return `${chunk} - ${after}`
      }

      return after
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/css/content.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/markdown',
    '@/plugins/init',
    '@/plugins/vue-scrollactive',
    '@/plugins/element-ui',
    '@/plugins/axios-accessor',

    '@/plugins/update.client',
    '@/plugins/menu.client',
    '@/plugins/i18n.client',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment',
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://github.com/TiagoDanin/Nuxt-SEO
    'nuxt-seo',
    // Doc: https://github.com/luciorubeens/nuxt-404
    '@luciorubeens/nuxt-404',
    // Doc: https://github.com/nuxt-community/i18n-module
    'nuxt-i18n',
  ],

  /*
   ** Modules configuration
   */
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    headers: {
      common: {
        Accept: 'application/json, text/plain, */*',
      },
    },
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},

  i18n: {
    locales: [
      {
        code: 'zh',
        iso: 'zh-CN',
        file: 'zh-CN.js',
        name: '简体中文',
      },
      {
        code: 'zh-hk',
        iso: 'zh-HK',
        file: 'zh-HK.js',
        name: '繁体中文',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      },
    ],
    defaultLocale: 'zh',
    parsePages: false,
    lazy: true,
    seo: false,
    langDir: 'i18n/',
  },

  p404: {
    names: [
      'Confused Travolta',
      'Space',
      'Mailchimp',
      'UnDraw',
      'Ghost',
      'Trash',
      'Lost Keys',
    ],
  },

  env: {
    baseUrl: process.env.BASE_URL || '/api',
    dev: isDevelopment(),
  },
  // router: {
  //   middleware: getMiddleware(),
  // },
  serverMiddleware: getServerMiddleware(),
}
