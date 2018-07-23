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
.user-list-meta {
    overflow: hidden;
}
.list-style-none {
    list-style: none !important;
}
.f5 {
    font-size: 14px !important;
}
.f6 {
    font-size: 12px !important;
}

.user-list-info {
    min-height: 48px;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
}
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
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
}

.muted-link {
    color: #586069 !important;
}
.octicon {
    vertical-align: text-bottom;
}
.octicon {
    display: inline-block;
    vertical-align: text-top;
    fill: currentColor;
}
</style>