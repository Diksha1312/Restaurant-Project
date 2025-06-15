<template>
    <img class="logo" src="../assets/logo_restaurant.png" />
    <h1>Login Page</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Passowrd" />
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    }, 
    methods: {
        async login() {
            console.warn(this.email, this.password);
            }

    },
    mounted() {
        const user = localStorage.getItem('user');
        if (user) {
            this.$router.push({name: 'HomePage'});
        }
    }
}
</script>