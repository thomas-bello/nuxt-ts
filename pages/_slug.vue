<template>
  <nuxt-content v-if="doc.fullscreen" :document="doc" />
  <div v-else class="flex flex-wrap-reverse">
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4"
      :class="{ '': doc.toc && doc.toc.length }"
    >
      <article class="lg:px-8">
        <nuxt-content :document="doc" />
      </article>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'

export default {
  name: 'PageSlug',
  middleware({ params, redirect }) {
    if (params.slug === 'index') {
      redirect('/')
    }
  },
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'

    let doc
    try {
      doc = await $content(slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    return {
      doc,
    }
  },
  mounted() {
    const blocks = document.getElementsByClassName('nuxt-content-highlight')

    for (const block of blocks) {
      const pre = block.getElementsByTagName('pre')[0]
      const button = document.createElement('button')
      button.className = 'copy'
      button.textContent = 'Copy'

      pre.appendChild(button)
    }

    const copyCode = new Clipboard('.copy', {
      target(trigger) {
        return trigger.previousElementSibling
      },
    })

    copyCode.on('success', function (event) {
      event.clearSelection()
      event.trigger.textContent = 'Copied!'
      window.setTimeout(function () {
        event.trigger.textContent = 'Copy'
      }, 2000)
    })
  },
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.doc.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.doc.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.doc.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.doc.description,
        },
      ],
    }
  },
}
</script>
