<template>
    <div class="h-card col-12 float-left pr-3" >
     
      <img width="230" height="230" class="avatar width-full rounded-2"  :src="user.avatar_url">
      <div  class="vcard-names-container py-3 js-sticky js-user-profile-sticky-fields" style="position: static; top: 0px; left: 184.5px; width: 229px;">
          <h1 class="vcard-names">
             <span class="p-name vcard-fullname d-block overflow-hidden">{{user.name}}</span> 
             <span class="p-nickname vcard-username d-block">{{user.login}}</span>
          </h1>
      </div>
      <div class="p-note user-profile-bio">
          <div>
            {{user.bio}}
          </div>
      </div>
      <div class="pb-3">
          <ul class="vcard-details border-top border-gray-light py-3">
              <li class="vcard-detail pt-1 css-truncate css-truncate-target">
              <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" 
                  aria-hidden="true"><path fill-rule="evenodd" d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409
                   0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10
                    8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z">
                  </path></svg> <span class="p-org">{{user.company}}</span>
              </li>
              <li class="vcard-detail pt-1 css-truncate css-truncate-target">
                  <svg class="octicon octicon-location" viewBox="0 0 12 16" version="1.1" width="12" height="16"
                   aria-hidden="true"><path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 
                   6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 
                   1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 
                   0-1.11.89-2 2-2 1.11 0 2 .89 2 2z">
                      </path></svg>
                      <span class="p-label">{{user.location}}</span>
                  
              </li>
          </ul>
      </div>
       

        
    </div>

</template>

<script>
    export default {
        name: "UserProfile",
        props:{
            user:{}
        }
    }
</script>

<style scoped>
.pr-3 {
    padding-right: 16px !important;
}
.avatar {
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
}
.rounded-2 {
    border-radius: 6px !important;
}
.py-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
}
.vcard-names {
    line-height: 1;
}
h1 {
    font-size: 32px;
    font-weight: 600;
}

.vcard-fullname {
    font-size: 26px;
    line-height: 30px;
}
.d-block {
    display: block !important;
}
.overflow-hidden {
    overflow: hidden !important;
}
.vcard-username {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #666;
}
.vcard-details {
    list-style: none;
}
.py-3 {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
}
.border-gray-light {
    border-color: #eaecef !important;
}
.border-top {
    border-top: 1px #e1e4e8 solid !important;
}
ul, ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
}
.vcard-details .css-truncate.css-truncate-target {
    width: 100%;
    max-width: 100%;
}
.css-truncate.css-truncate-target, .css-truncate .css-truncate-target {
    display: inline-block;
    max-width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
}
.vcard-detail {
    padding-left: 22px;
}
.vcard-detail {
    padding-left: 24px;
    font-size: 14px;
}
.pt-1 {
    padding-top: 4px !important;
}
</style>