<template>
    <HeaderPage />
    <h1>Welcome to Your Vue.js App</h1>
    <img alt="Vue logo" src="../assets/logo.png">
</template>

<script>
import HeaderPage from './header.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderPage
    },
    mounted() {
        const user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'}); 
        }
    }
}
</script>    