<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a> 
    </div>  
</template>
<script>
export default {
    name: 'HeaderPage',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'LoginPage' });
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}
.nav a {
    color: #f2f2f2f2;
    float: left;
    padding: 14px 16px;
    text-decoration: none;
    margin-right: 5px;
    font-size: 17px;
    text-align: center;
}
.nav a:hover {
    color: #333;
    background: #ddd;
}
</style>