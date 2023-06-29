// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
      '@nuxtjs/tailwindcss'
    ],
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
   tailwindcss: {
      cssPath: '~/assets/css/tailwind.css',
      configPath: 'tailwind.config',
      exposeConfig: false,
      injectPosition: 0,
      viewer: true,
   },
})
