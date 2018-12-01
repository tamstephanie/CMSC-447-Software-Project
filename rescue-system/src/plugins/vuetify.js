import Vue from 'vue'
import Vuetify, { colors } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.red.darken4,
    secondary: colors.cyan.lighten1
  }
})