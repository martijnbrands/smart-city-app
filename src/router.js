import Vue from 'vue'
import Router from 'vue-router'
import VueInstagram from 'vue-instagram'
import Projects from './views/Projects.vue'
import Social from './views/Social.vue'

Vue.use(Router);
Vue.use(VueInstagram);


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
      path: '/social',
      name: 'Social',
      component: Social
    }

  ]
})
