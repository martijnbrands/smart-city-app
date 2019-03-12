import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    blueLight: '#9285E5',
    blueMiddark: '#6D5ADD',
    blueDark: '#4831D4',
    orangeLight: '#F3C281',
    oragne: '#EFAC53',
    orangeDark: '#EA9524',
    greyLight: '#E6E6E6',
    greyMedium: '#B3B3B3',
    greyDark: '#808080',
    black: '#1A1A1A',
    white: '#FFFFFF'

  }
})
