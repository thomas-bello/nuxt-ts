export default function ({ store }) {
  // Only in development
  if (process.dev) {
    window.onNuxtReady(($nuxt) => {
      $nuxt.$on('content:update', ({ event, path }) => {
        // Refresh the store categories
        console.info('content:update onNuxtReady', event, path)
        store.dispatch('fetchCategories')
      })
    })
  }
}
