<template>
<div id="searchType" class="col-md-12 mt-3">
            <div class="card">

                <ul class="list-group" v-for="(item,key) in $store.state.searchType" >
                    <button type="button" class="list-group-item list-group-item-action"
                            @click=handleSearchType(key)
                            :key=key >
                        {{item}}
                    </button>
                   
                </ul>
            </div>
</div>
    
</template>
<script>
export default {
    name:'SearchType',
    methods:{
        handleSearchType(type){
            this.$store.dispatch('changeSearchType',type)
        }
    }

}
</script>
<style>


</style>

