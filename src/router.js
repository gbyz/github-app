import Vue from 'vue'
import Router from 'vue-router'
import SearchView from './views/SearchView'
import Repositories from './views/Repositories'

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
   {
     path: '/repositories',
     name: 'repositories',
     component: Repositories
   }

    
  ],
  mode: 'history'
})
