<template>
<div id="searchView" class="container">
    <div class="row">
        <div class="col-md-3">
        <search-type/>
            <search-lang/>
       </div>
       <div class="col-md-9">
            <search v-on:SearchRequested="handleSearch">Ara</search>
           <search-error  />
            <user-list  v-if="$store.state.selectedSearchType === 'users' " :users=$store.state.users />
            <repos-list v-if="$store.state.selectedSearchType === 'repositories' " :users="$store.state.searchType"/>

    </div>
    </div>


</div>
</template>
<script>
import SearchType from '../components/SearchType.vue'
import Search from '../components/Search.vue'
import UserList from '../components/UserList.vue'
import ReposList from '../components/ReposList.vue'
import SearchLang from "../components/SearchLang";
import SearchError from "../components/SearchError";

export default {

name:'searchView',
components: {
    SearchLang,
    SearchType,
    Search,
    UserList,
    ReposList,
    SearchError,
    
},
data(){
    return {
        isUsers:true,
    }
},
    methods: {
        handleSearch(query) {
        
            this.$store.state.users = {};
            this.$store.state.searchQuery = query;
            this.$store.dispatch('fetchUsers', query);
            this.$store.state.repos = {};
            this.$store.dispatch('fetchRepos', query);



        }
    },
    created(){
        this.handleSearch('canylmz')
    }
}
</script>

<style scoped>

</style>
>>>>>>> RepoList
