<template>
    <div class="container mt-3 p-5">
        <div class="row">
            <div class="col-md-4 p-3" v-for="(repo,key) in repos">
                <div class="card text-center">
                    <div class="card-header">
                        {{repo.name}}
                        <span v-if="repo.fork" > | Forked from
                            <a :href="repo.forks_url">{{repo.name}}</a>
                        </span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">
                            <a :href="repo.html_url">{{repo.full_name}}</a>
                        </h5>
                        <p class="card-text">{{repo.description}}</p>
                        <a :href="repo.html_url" class="btn btn-primary">Show</a>
                    </div>
                    <div class="card-footer text-muted">
                        {{repo.created_at}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Repos",
        data(){
            return {
                isForked:false
            }
        },
        props:{
            repos:{}
        }
    }
</script>

<style scoped>

</style>