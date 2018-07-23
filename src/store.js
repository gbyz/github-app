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
      isLoading:false

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
      setLoading(state, load) {
          state.isLoading = load;
      },
  },
  actions: {
      fetchUsers({commit},query){
          commit('setLoading',true);
          return HTTP.get('search/users',{
              params:{
                  q:query
              }
          }).then((res)=>{
              commit('setUsers', res.data.items);
              // this.isLoading=false;
              commit('setLoading',false);
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
