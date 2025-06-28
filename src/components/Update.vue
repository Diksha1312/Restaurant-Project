<template>
    <HeaderPage />
    <h1>Update Restaurant</h1>
    <form class="add-restaurant-form">
        <input type="text" name="name" placeholder="Restaurant Name" v-model="restaurant.restaurantName" />
        <input type="text" name="cuisine" placeholder="Cuisine Type" v-model="restaurant.cuisineType" />
        <input type="text" name="location" placeholder="Location" v-model="restaurant.location" />
        <button type="button" v-on:click="addRestaurant">Update Restaurant</button>
    </form>
</template>

<script>
import HeaderPage from './header.vue';
export default {
    name: 'UpdatePage',
    components: {
        HeaderPage
    },
    data() {
        return {
            restaurant : {
                restaurantName: '',
                cuisineType: '',
                location: ''
            }
        };
    },
    mounted() {
        const user = localStorage.getItem('user');
        if (!user) {
            this.$router.push({name: 'SignUp'}); 
        }
    }
}
</script>    