<template>
  <div class="home">
      <Search v-on:SearchRequested="handleSearch"></Search>
      <div v-for="(value,key) in users" >
          <UserProfile  :name="value.login" :key="key"/>
      </div>


  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search'
import UserProfile from '../components/UserProfile'
import HTTP from '../service'

export default { 
  name: 'home',
  components: {
      UserProfile,
    Search
  },
    data(){
    return {
        users:[]
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
