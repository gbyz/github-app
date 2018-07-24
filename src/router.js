import Vue from 'vue'
import Router from 'vue-router'
import SearchView from './views/SearchView'
import Home from './views/Home'
import Repositories from './views/Repositories'
import User from './views/User'

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
          component: User
      },
   {
     path: '/repositories',
     name: 'repositories',
     component: Repositories
   }

    
  ],
  mode: 'history'
})
