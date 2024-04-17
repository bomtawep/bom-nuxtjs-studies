// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    devtools: { enabled: false }
  },
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api'
    }
  },
  // Pass vite options
  // vite: {
  //   vue: {
  //     customElement: true
  //   },
  //   vueJsx: {
  //     mergeProps: true
  //   }
  // },
  // Pass webpack options
  // webpack: {
  //   loaders: {
  //     vue: {
  //       hotReload: true,
  //     }
  //   }
  // },
  // Enable experimental features
  // vue: {
  //   propsDestructure: true
  // }
})
