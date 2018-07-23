<template>
    <div >
        <div class="row pl-5 m-3" >
            <div class="col-md-3">
                <User :user="$store.state.user" />
            </div>
            <div class="col-md-9">
                <Repos :repos="$store.state.repos"/>
            </div>

        </div>

    </div>

</template>

<script>
    import Repos from '../components/Repos'
    import User from '../components/User'
export default {
    name: "Repositories",
    components: {
        Repos,
        User
    },
    created() {
        this.username = this.$route.params.username;
        this.$store.dispatch('fetchUserRepos', this.username);



    }
}


</script>

<style>

</style>
