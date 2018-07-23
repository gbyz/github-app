<template>
    <div class="container mt-3 p-5">
        <div class="row">
            <div class="col-md-12"  >
                <ul>
                    <li>user</li>
                    <li>user</li>
                    <li>user</li>
                    <li>user</li>
                    <li>user</li>
                </ul>
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