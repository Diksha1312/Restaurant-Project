<template>
    <HeaderPage />
    <h1>Update Restaurant</h1>
    <form class="add-restaurant-form">
        <input type="text" name="name" placeholder="Restaurant Name" v-model="restaurant.name" />
        <input type="text" name="cuisine" placeholder="Cuisine Type" v-model="restaurant.cuisine" />
        <input type="text" name="location" placeholder="Location" v-model="restaurant.location" />
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './header.vue';
import axios from 'axios';
export default {
    name: 'UpdatePage',
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
        async updateRestaurant() {
            console.warn(this.restaurant);

            const result = await axios.put('http://localhost:3000/restaurants/'+this.$route.params.id, {
                name: this.restaurant.name,
                cuisine: this.restaurant.cuisine,
                location: this.restaurant.location
            });
            if (result.status === 200) {
                this.$router.push({name: 'HomePage'});
            } else {
                console.error('Error adding restaurant:', result);
            }
        }
    },
    async mounted() {
        const user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'}); 
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        console.warn(result);
        this.restaurant = result.data;
    }
}
</script>    