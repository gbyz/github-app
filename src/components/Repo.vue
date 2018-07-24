<template>
        <div class="repo-list-item d-flex flex-justify-start py-4 public source">
            <div class="col-8 pr-3">
                <h4>
                    <a class="v-align-middle" href="">{{repo.full_name}}<em></em></a>

                </h4>

                <p class="col-9 d-inline-block text-gray mb-2 pr-4">
                   {{repo.description}}
                </p>

                <!--<div class="topics-row-container col-9 d-inline-flex flex-wrap flex-items-center f6 my-1">-->
                    <!--<a href="/topics/tetris" class="topic-tag topic-tag-link f6 my-1">-->
                        <!--tetris-->
                    <!--</a>-->
                <!--</div>-->

                <div class="d-flex">

                    <p class="f6 text-gray mr-3 mb-0 mt-2">
                        Updated <span datetime="2018-04-02T12:11:25Z" title="2 Nis 2018 15:11 GMT+3">on 2 Apr</span>
                    </p>

                </div>
            </div>

            <div class="d-table-cell col-2 text-gray pt-2">
                <span class="repo-language-color ml-0" style="background-color:#f1e05a;"></span>
                {{repo.language}}
            </div>

            <div class="col-2 text-right pt-1 pr-3 pt-2">
                <a class="muted-link" >
                    <svg aria-label="star" class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
                   {{repo.stargazers_count}}
                </a>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Repo",
        props:{
            repo:{}
        }
    }
</script>

<style scoped>
    .repo-list {
        position: relative;
    }
    .repo-list-item {
        position: relative;
        padding-top: 30px;
        padding-bottom: 30px;
        list-style: none;
        border-bottom: 1px solid #eee;
    }
    .py-4 {
        padding-top: 24px !important;
        padding-bottom: 24px !important;
    }
    .v-align-middle {
        vertical-align: middle !important;
    }
    .text-gray {
        color: #586069 !important;
    }

    .topics-row-container {
        height: 30px;
        overflow: hidden;
    }
    .f6 {
        font-size: 12px !important;
    }
    .my-1 {
        margin-top: 4px !important;
        margin-bottom: 4px !important;
    }

    .d-inline-block {
        display: inline-block !important;
    }
    .topic-tag {
        display: inline-block;
        padding: 0.3em 0.9em;
        margin: 0 0.5em 0.5em 0;
        white-space: nowrap;
        background-color: #f1f8ff;
        border-radius: 3px;
    }
    .f6 {
        font-size: 12px !important;
    }
    .my-1 {
        margin-top: 4px !important;
        margin-bottom: 4px !important;
    }
    i, cite, em, var, address, dfn {
        font-style: italic;
    }
</style>