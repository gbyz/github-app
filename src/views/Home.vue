<template>
  <div class="home">
      <Search v-on:SearchRequested="handleSearch"></Search>
      <UserList :users="users"/>


  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'
import UserList from '../components/UserList'
import User from '../components/User'
import HTTP from '../service'

export default { 
  name: 'home',
  components: {
      UserList,
      UserProfile,
    Search,
    User
  },
    data(){
    return {
        users:{}
    }
    },
    methods:{
      getUserSearch(query){
          HTTP.get('search/users',{
              params:{
                  q:query
              }
          }).then((res)=>{
                  this.users=res.data.items;
              console.log(res.data.items)
              })
      },
        handleSearch (query) {
            this.users = [];
            this.getUserSearch(query)
        }
    },
    created(){
      this.getUserSearch('gelistirirken')
    }

}
</script>
