<template>
    <div class="col-12 search">
        <input type="text"  v-model="query" @keypress.enter="handleSearch" />
        <button class="btn btn-primary " @click="handleSearch">Search</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                query: ''
            }
        },
        methods: {
            handleSearch () {
                this.$emit('SearchRequested', this.query)
            }
        }
    }
</script>

<style scoped>
    .search input{
        padding: 10px 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 70%;
    }
    .search button{
        padding: 10px 20px;
        border:1px solid #ccc;
        background-color: rgb(50, 23, 75);
        color: #fff;
        height: 100%;
    }
</style>
