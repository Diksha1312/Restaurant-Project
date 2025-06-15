<template>
    <h1>Welcome to Your Vue.js App</h1>
    <img alt="Vue logo" src="../assets/logo.png">
</template>

<script>
export default {
    name: 'HomePage',
    mounted() {
        const user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'}); 
        }
    }
}
</script>    