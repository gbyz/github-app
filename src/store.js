import Vue from 'vue'
import Vuex from 'vuex'
import HTTP from './service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      users:{},
      user:{},
      repos:{},
      repo:{},
      searchType:[
        'Repositories',
        'Users',
        'Commits'
      ],

  },
  mutations: {
      setUser(state, user) {
          state.user = user
      },
      setUsers(state, users) {
          state.users = users;
      },
      setRepos(state, repos) {
          state.repos = repos
      },
      setRepo(state, repo) {
          state.repo = repo;
      },
  },
  actions: {
      fetchUsers({commit},query){
          return HTTP.get('search/users',{
              params:{
                  q:query
              }
          }).then((res)=>{
              commit('setUsers', res.data.items);
          })
      },
      fetchUser({commit},query){
          return HTTP.get('search/users',{
              params:{
                  q:query
              }
          }).then((res)=>{
              commit('setUser', res.data.items[0]);
          })
      },
      fetchUserRepos({commit,dispatch},query) {
          HTTP.get(`users/${query}/repos`)
              .then((res) => {
                  commit('setRepos', res.data);
                  dispatch('fetchUser', query);
              })

      },

  }
})
