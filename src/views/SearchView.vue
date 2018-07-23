<template>
<div id="searchView" class="row">
    <div class="col-3">
    <search-type/>
    </div>
    <div class="col-9">
        <search>Ara</search>
        <div v-if="isUsers">
        <user-list></user-list>
        </div>
    </div> 
</div>   
</template>
<script>
import SearchType from '../components/SearchType.vue'
import Search from '../components/Search.vue'
import UserList from '../components/UserList.vue'
export default {

name:'searchView',
components: {
    SearchType,
    Search,
    UserList,

},
data(){
    return {
        isUsers:true,
    }
}
}
</script>
