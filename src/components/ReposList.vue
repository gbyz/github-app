<template>
    <div class="repo-list">
        <div v-for="repo in $store.state.searchType">
            <repo :repo=repo />
        </div>
    </div>
</template>

<script>
    import Repo from '../components/Repo'
    export default {
        name: "ReposList",
        data(){
            return {
                isUsers:true,
            }
        },
        components: {
            Repo,
        },
        methods: {
            handleSearch(query) {

                this.$store.state.users = {};
                this.$store.dispatch('fetchUsers', query);
            }
        },
        created() {
            this.username = this.$route.params.username;
            this.$store.dispatch('fetchUserRepos', this.username);



        }
    }
</script>

<style scoped>
    .repo-list {
        position: relative;
    }
</style>