<template>
    <HeaderPage />
    <h1>Update Restaurant</h1>
    <img alt="Vue logo" src="../assets/logo.png">
</template>

<script>
import HeaderPage from './header.vue';
export default {
    name: 'UpdatePage',
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