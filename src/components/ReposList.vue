<template>
    <div class="repo-list">

        <div v-for="repo in $store.state.repos">
            <repo :repo=repo />
        </div>
    </div>
</template>

<script>
    import Repo from '../components/Repo'
    import SearchError from '../components/SearchError'
    export default {
        name: "ReposList",
        data(){
            return {
                isUsers:true,
            }
        },
        components: {
            SearchError,
            Repo,
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
    .repo-list {
        position: relative;
    }

</style>