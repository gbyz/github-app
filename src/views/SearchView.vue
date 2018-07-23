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
        <user-list></user-list>
        </div>
    </div>
    </div>


</div>
</template>
<script>
import SearchType from '../components/SearchType.vue'
import Search from '../components/Search.vue'
import UserList from '../components/UserList.vue'
import SearchLang from "../components/SearchLang";
export default {

name:'searchView',
components: {
    SearchLang,
    SearchType,
    Search,
    UserList,

},
data(){
    return {
        isUsers:true,
    }
},
    methods: {
        handleSearch(query) {
            this.$store.state.users = {};
            this.$store.dispatch('fetchUsers', query);
        }
    },
}
</script>

<style scoped>

</style>
>>>>>>> RepoList
