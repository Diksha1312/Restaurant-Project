import HomePage from './components/home.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddPage from './components/Add.vue';
import UpdatePage from './components/Update.vue';
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
    {
        name: 'AddPage',
        path: '/add',
        component: AddPage
    },
    {        
        name: 'UpdatePage',
        path: '/update/:id',
        component: UpdatePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
