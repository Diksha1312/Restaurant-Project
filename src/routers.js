import HomePage from './components/home.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: SignUp
    },
    {
        name: 'LoginPage',
        path: '/login',
        component: LoginPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
