import vuetifyOptions from './plugins/vuetify.options'
import i18n from './i18n'

const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Accounts - Community Tools',
    title: 'Community Tools Accounts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'material-design-icons-iconfont/dist/material-design-icons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/components'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    ...vuetifyOptions,
    treeShake: false,
    customVariables: ['~/assets/variables.scss']
  },

  // i18n settings
  i18n,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      // To avoid vue and vuetify being loaded twice, just alias them ;)
      config.resolve.alias.vue$ = path.resolve('./node_modules/vue/dist/vue.runtime.esm.js')
      config.resolve.alias['^vuetify'] = path.resolve(__dirname, 'node_modules/vuetify')
    }
  }
}
