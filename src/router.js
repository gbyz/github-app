import Vue from 'vue'
import Router from 'vue-router'
import SearchView from './views/SearchView'
import Repositories from './views/Repositories'

Vue.use(Router);

export default new Router({
  routes: [

      {
          path: '/users/:username/repos',
          name: 'user-repos',
          component: Repositories
      },
      {
          path: '*',
          name: 'home',
          component: SearchView
      },
  ],
  mode: 'history'
})
