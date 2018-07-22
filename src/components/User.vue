<template>
    <div >
        <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">
                <router-link :to="userReposPath">{{user.login}}</router-link>
            </h5>
            <p class="card-text"></p>
        </div>
        <div class="card-footer">
            <small class="text-muted">{{user.login}}</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        props:{
            user:{}
        },
        computed:{
            userReposPath() {
                return `/user/${this.user.login}/repos`;
            }
        },
        methods:{

        },
        created(){
            console.log("Login");
            console.log(this.user)
        }
    }
</script>

<style scoped>

</style>