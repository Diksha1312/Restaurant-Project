<template>
    <HeaderPage />
    <h1>Hi {{name}}, Welcome to Your Vue.js App</h1>
    <img alt="Vue logo" src="../assets/logo.png">
</template>

<script>
import HeaderPage from './header.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            name: ''
        }
    },
    components: {
        HeaderPage
    },
    mounted() {
        const user = localStorage.getItem('user');
        this.name = JSON.parse(user).name;
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push({name: 'SignUp'}); 
        }
    }
}
</script>    