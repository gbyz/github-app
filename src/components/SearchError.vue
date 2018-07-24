<template>
    <div class="column three-fourths codesearch-results "  v-if=" $store.state.isError ">
        <div class="pl-2">
            <div class="blankslate">
                <svg height="32" class="octicon octicon-search blankslate-icon" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
                <h3>
                    We couldn’t find any {{$store.state.searchQuery}} matching '{{$store.state.selectedSearchType}}'
                </h3>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchError",

    }
</script>

<style scoped>
    .three-fourths {
        width: 75%;
    }
    .column {
        float: left;
        padding-right: 10px;
        padding-left: 10px;
    }
    .blankslate {
        position: relative;
        padding: 32px;
        text-align: center;
        background-color: #fafbfc;
        border: 1px solid #e1e4e8;
        border-radius: 3px;
        box-shadow: inset 0 0 10px rgba(27,31,35,0.05);
    }
    .blankslate-icon {
        margin-right: 4px;
        margin-bottom: 8px;
        margin-left: 4px;
        color: #a3aab1;
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