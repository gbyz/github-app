<template>
<div id="searchType">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Search Type</h3>
                </div>
                <ul class="list-group" v-for="item in $store.state.searchType" >
                    <a :href=item.toLowerCase() class="list-group-item">{{item}}</a>
                   
                </ul>
            </div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style>


</style>

