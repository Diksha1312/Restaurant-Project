<template>
    <HeaderPage />
    <h1>Hi {{name}}, Welcome to Your Vue.js App</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Location</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.cuisine}}</td>
            <td>{{item.location}}</td>
            <td><router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button></td>
        </tr>
    </table>
</template>

<script>
import HeaderPage from './header.vue';
import axios from 'axios';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: []
        }
    },
    components: {
        HeaderPage
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            console.warn(result);
            if (result.status === 200) { 
                this.loadData();
            }
        },
        async loadData() {
            const user = localStorage.getItem('user');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({name: 'SignUp'}); 
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            console.warn(result)
            this.restaurants = result.data;
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style>
h1 {
    text-align: center;
    color: #333;
}
table {
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
}
th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
th {
    background-color: #f2f2f2;
}
tr:hover {
    background-color: #f5f5f5;
}
</style>