<template>
    <HeaderPage />
    <h1>Add Restaurant</h1>
    <img alt="Vue logo" src="../assets/logo.png">
</template>

<script>
import HeaderPage from './header.vue';
export default {
    name: 'AddPage',
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