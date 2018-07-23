<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center mb-3">
                <search/>
            </div>
            <div class="col-md-3">
            <search-lang/>
            </div>
            <div class="col-md-9">
                <repos-list/>


            </div>
        </div>
    </div>
</template>

<script>
    import Search from  '../components/Search'
    import SearchLang from  '../components/SearchLang'
    import ReposList from  '../components/ReposList'
    export default {
        name: "SearchView",
        components:{
            ReposList,
            Search,
            SearchLang
        }
    }
</script>

<style scoped>

</style>