<template>
    <HeaderPage />
    <h1>Add Restaurant</h1>
    <form class="add-restaurant-form">
        <input type="text" name="name" placeholder="Restaurant Name" v-model="restaurant.name" />
        <input type="text" name="cuisine" placeholder="Cuisine Type" v-model="restaurant.cuisine" />
        <input type="text" name="location" placeholder="Location" v-model="restaurant.location" />
        <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './header.vue';
import axios from 'axios';
export default {
    name: 'AddPage',
    components: {
        HeaderPage 
    },
    data() {
        return {
            restaurant : {
                name: '',
                cuisine: '',
                location: ''
            }
        };
    },
    methods: {
        async addRestaurant() {
            console.log('Restaurant added:', this.restaurant);
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.restaurant.name,
                cuisine: this.restaurant.cuisine,
                location: this.restaurant.location
            });
            console.warn('Result:', result);
            if (result.status === 201) {
                this.$router.push({name: 'HomePage'});
            } else {
                console.error('Error adding restaurant:', result);
            }
            this.restaurant = {
                name: '',
                cuisine: '',
                location: ''
            };
        }
    },
    mounted() {
        const user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'}); 
        }
    }
}
</script>    