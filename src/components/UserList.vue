<template>
    <div class="container mt-3 p-5">
        <div class="row">
            <div class="col-md-4 p-3" v-for="(user,key) in users">
                <img class="card-img-top" :src="user.avatar_url" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{user.login}}</h5>
                    <p class="card-text"></p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{{user.login}}</small>
                </div>
            </div>
        </div>
        <!--<div class="card-group" >-->

        <!--</div>-->
    </div>

</template>

<script>
    export default {
        name: "UserList",
        props:{
            users:[]
        }
    }
</script

<style scoped>

</style>