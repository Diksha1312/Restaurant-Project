<template>
    <img class="logo" src="../assets/logo_restaurant.png" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Passowrd" />
        <button v-on:click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">Already have an account? Login here</router-link>
        </p>
    </div>
</template>
<script>

import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.log(result);
            if (result.status == 201) {
                alert("Signup successful!")
                localStorage.setItem('user', JSON.stringify(result.data));
            } else {
                alert("Signup failed!")
            }
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