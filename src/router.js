import Vue from 'vue'
import Router from 'vue-router'
import VueInstagram from 'vue-instagram'
import Projects from './views/Projects.vue'
import SingleProject from './views/SingleProject.vue'
import Maps from './views/Maps.vue'
import Social from './views/Social.vue'

Vue.use(Router);
Vue.use(VueInstagram);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/', 
      redirect: '/projects' },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/:id',
      name: 'SingleProject',
      component: SingleProject,
      props: true
    },
    {
      path: '/social',
      name: 'Social',
      component: Social
    },
    {
      path: '/maps',
      name: 'Maps',
      component: Maps
    },

  ]
})
