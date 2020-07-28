<template>
  <Nuxt />
</template>

<script>
export default {
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto']
        : []
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          'antialiased text-gray-700 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100',
        ],
      },
    }
  },
}
</script>
