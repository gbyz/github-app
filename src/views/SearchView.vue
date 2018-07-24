<template>
<div id="searchView" class="container">
    <div class="row">
        <div class="col-md-3">
            <search-type/>
            <search-lang/>
       </div>

       <div class="col-md-9">
            <search v-on:SearchRequested="handleSearch">Ara</search>

            <div v-if="isUsers">
                <user-list  v-if="$store.state.selectedSearchType === 'users' " :users=$store.state.users />
                <repos-list v-if="$store.state.selectedSearchType === 'repos' " :users="$store.state.searchType"/>
            </div>
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
import List from "../components/List";
export default {

name:'searchView',
components: {
    SearchLang,
    SearchType,
    Search,
    UserList,
    ReposList,
    List,

},
data(){
    return {
        isUsers:true,
    }
},
    methods: {
        handleSearch(query) {
            if (this.$store.state.selectedSearchType === 'users'){
                this.$store.state.users = {};
                this.$store.dispatch('fetchUsers', query);
            }
            else{
                this.$store.state.repos = {};
                this.$store.dispatch('fetchRepos', query);
            }

        }
    },
    created(){
        this.handleSearch('canylmz')
    }
}
</script>

<style scoped>

</style>

