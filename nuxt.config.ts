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
      apiBase: process.env.NEXT_PUBLIC_API_URL,
    }
  },
  modules: ['@nuxt/ui'],
  // css: ['~/assets/css/main.css'],
  // SEO and Meta
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' },       // pageTransition: flase to disable
    // pageTransition: {
    //   name: 'rotate'
    // }
    layoutTransition: { name: 'layout', mode: 'out-in' },   // layoutTransition: flase to disable
  },
  experimental: {
    viewTransition: true
  },
  // Pass vite options
  vite: {
  //   vue: {
  //     customElement: true
  //   },
  //   vueJsx: {
  //     mergeProps: true
  //   }
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "~/assets/_colors.scss" as *;'
  //       }
  //     }
  //   },
  },
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