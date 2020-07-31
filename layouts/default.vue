<template>
  <div>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheFooter,
  },
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto']
        : []
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    // console.log('head i18nSeo', i18nSeo)
    return {
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100',
        ],
      },
      ...i18nSeo,
    }
  },
}
</script>
