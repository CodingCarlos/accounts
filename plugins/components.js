import Vue from 'vue'
import components from '../../components'

import '../../components/dist/ctlib.css'

export default ({ app }, inject) => {
  Vue.use(components, {
    vuetify: app.vuetify
  })
}
