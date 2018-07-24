<template>
<div class="user-list" >   
<div class="user-list-item f5 py-4"  v-for="user in users" >
<user :user=user />
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

.user-list em {
    padding: 3px;
    font-style: normal;
    font-weight: 600;
    background-color: rgba(255,255,140,0.5);
    border-radius: 3px;
}
.user-list .avatar {
    position: absolute;
    top: 0;
    left: 0;
}
.user-list-item+.user-list-item {
   border-top: 1px solid #e1e4e8;
}

</style>