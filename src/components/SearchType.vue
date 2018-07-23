<template>
<div id="searchType" class="col-md-12 mt-3">
            <div class="card">

                <ul class="list-group" v-for="item in $store.state.searchType" >
                    <a :href=item.toLowerCase() class="list-group-item " >{{item}}</a>
                   
                </ul>
            </div>
</div>
    
</template>
<script>
export default {
    name:'SearchType',

}
</script>
<style>


</style>

