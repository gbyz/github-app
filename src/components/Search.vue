<template>
    <div class="col-md-12 ">
            <input  type="text" class="m-3 p-2" v-model="query" @keypress.enter="handleSearch" />
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
input {
    width: 60%;
}

    
</style>
