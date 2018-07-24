import Vue from 'vue'
import Vuex from 'vuex'
import HTTP from './service'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user:{},
      repos:{},
      users:{},
      repo:{},
      selectedSearchType:'users',
      searchType: {
          repositories:'Repositories',
          users:'Users',
          commits:'Commits'
      },
      searchQuery:'users',
      isLoading:false,
      isError:false,

  },
  mutations: {
      setUser(state, user) {
          state.user = user
      },
      setUsers(state, users) {
          state.users = users;
      },
      setSearchQuery(state, searchQuery) {
          state.searchQuery = searchQuery;
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
      setIsError(state, error) {
          state.isError = error;
      },
      setSelectedSearchType(state, selectedSearchType) {
          state.selectedSearchType = selectedSearchType
      },
  },
  actions: {
      fetchUsers({commit,dispatch},query){
          commit('setLoading',true);
          return HTTP.get('search/users',{
              params:{
                  q:query
              }
          }).then((res)=>{
              commit('setUsers', res.data.items);
              commit('setLoading',false);
              dispatch('searchError')
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
    fetchRepos({commit,dispatch},query){
        commit('setLoading',true);
        return HTTP.get('search/repositories',{
            params:{
                q:query
            }
        }).then((res)=>{
            commit('setRepos', res.data.items);
            dispatch('searchError')
        })
    },
      fetchUserRepos({commit,dispatch},query) {
          HTTP.get(`users/${query}/repos`)
              .then((res) => {
                  commit('setRepos', res.data);
                  dispatch('fetchUser', query);
              })
      },
      changeSearchType({commit},searchType){
          commit('setSelectedSearchType',searchType)
      },
      changeSearchQuery({commit},searchQuery){
          commit('setSearchQuery',searchQuery)
      },
      searchError({dispatch,commit}){
          if(this.state.selectedSearchType === 'repositories' ){
              commit('setIsError',(!this.state.repos.length > 0));
          }
          else if(this.state.selectedSearchType === 'users'){
              commit('setIsError',(!this.state.users.length > 0));
          }

      },



  }
})
