<template>
  <div class="d-flex">
    <a  class="d-table" :href="userReposPath" >
      <img class="avatar position-relative" :src="user.avatar_url" width="48" height="48" >
       </a>    
        <div class="user-list-info ml-2">
        <a :href="userReposPath"><em> </em></a>
        <span class="f4 ml-1">{{user.login}} </span>
        <p class="f5 mt-2">
          Student at the KTU Software Engineering
          Intern at movecarbon.com 
        </p>
        <ul class="user-list-meta d-flex f6 list-style-none text-gray mt-2">
          <li class="mr-3">
            <svg class="octicon octicon-location" viewBox="0 0 12 16" version="1.1" width="12" 
                 height="16" aria-hidden="true">
                 <path fill-rule="evenodd" 
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                    </path>
                    </svg>
            Turkey
          </li>

          <li class="mr-3">
            <svg class="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
            <a class="muted-link" :href="user.email"> {{user.login}}@gmail.com</a>
          </li>

      </ul>
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
                return `/users/${this.user.login}/repos`;
            },
            
        },
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