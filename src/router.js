import Vue from 'vue'
import Router from 'vue-router'
import Repositories from './views/Repositories'
import SearchView from './views/SearchView'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView
    },
      {
          path: '/user/:username/repos',
          name: 'user-repos',
          component: Repositories
      },

    
  ],
  mode: 'history'
})
