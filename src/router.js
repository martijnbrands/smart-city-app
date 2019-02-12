import Vue from 'vue'
import Router from 'vue-router'
import Projects from './views/Projects.vue'
import Augmented from './views/Augmented.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/augmented',
      name: 'Augmented',
      component: Augmented
    }
  ]
})
