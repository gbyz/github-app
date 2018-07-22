import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Repositories from './views/Repositories'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/user/:username/repos',
          name: 'user-repos',
          component: Repositories
      },

    
  ],
  mode: 'history'
})
