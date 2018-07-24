<template>
    <div class="home">
        <Loader v-if="$store.state.isLoading"/>
        <Search v-on:SearchRequested="handleSearch"></Search>
        <UserList :users="$store.state.users"/>
        <repos-list :users="$store.state.users"/>


    </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search'
import UserList from '../components/UserList'
import ReposList from '../components/ReposList'
import Loader from '../components/Loader'

export default {
    name: 'home',
    components: {
        ReposList,
        UserList,
        Search,
        Loader,
    },
    methods: {
        handleSearch(query) {
            this.$store.state.users = {};
            this.$store.dispatch('fetchUsers', query);
        }
    },
    created() {

        this.$store.dispatch('fetchUsers', 'gelistirirken');
    }
}
</script>
