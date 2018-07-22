<template>
    <div class="container mt-3 p-5">
        <div class="row">
            <div class="col-md-4 p-3"  v-for="(user,key) in users">
                <User :user="user" />
            </div>
        </div>
    </div>

</template>

<script>
    import User from './User'
    export default {
        name: "UserList",
        components:{
          User
        },
        props:{
            users:{}
        },
        computed:{
            userReposPath() {
                return `/user/canylmz/repos`;
            }
        },methods:{
            userReposPathUrl(username) {
                return `/user/${username}/repos`;
            }
        }
    }
</script>

<style scoped>

</style>