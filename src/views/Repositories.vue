<template>
    <div >
        <div class="row pl-5 m-3" >
            <div class="col-md-3">
                <UserProfile :user="$store.state.user" />
            </div>
            <div class="col-md-9">
                <h3 >Repositories</h3>
                <Repos :repos="$store.state.repos"/>
            </div>

        </div>

    </div>

</template>

<script>
    import Repos from '../components/Repos'
    import UserProfile from '../components/UserProfile'
export default {
    name: "Repositories",
    components: {
        Repos,
        UserProfile,
    },
    created() {
        this.username = this.$route.params.username;
        console.log(this.username);
        this.$store.dispatch('fetchUserRepos', this.username)
        .then(this.$store.dispatch('fetchUser',this.username));
        

      

    }
}


</script>

<style scoped>
h3{
 text-align: center;
}
</style>
