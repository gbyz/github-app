<template>
    <div>
        <!--<div class="row container-fluid">-->
            <!--<User :user="user"/>-->
        <!--</div>-->
        <Repos :repos="repos"/>

    </div>

</template>

<script>
    import Repos from '../components/Repos'
    import User from '../components/User'
    import HTTP from '../service'
export default {
    name: "Repositories",
    components: {
        Repos,
        User
    },
    data() {
        return {
            repos: {},
            user: {},
            username: String
        }
    },
    methods: {
        getUserRepos(query) {
            HTTP.get(`users/${query}/repos`)
                .then((res) => {
                    this.repos = res.data;
                    console.log(res.data)
                })
        },
        handleSearch(query) {
            this.repos = {};
            this.getUserSearch(query)
        },
        // getUser(query) {
        //     HTTP.get(`users/${query}`)
        //         .then((res) => {
        //             this.user = res.data.items;
        //             console.log("can");
        //             console.log(res.data)
        //         })
        // },

    },
    created() {
        this.username = this.$route.params.username;
        // this.getUser(this.username);
        this.getUserRepos(this.username);

    }
}


</script>

<style>

</style>
