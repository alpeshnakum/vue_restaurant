import homeComp from './components/homeComp.vue';
import SignUp from './components/SignUp.vue';
import loginComp from './components/loginComp.vue';
import addResto from './components/AddResto.vue';
import updateResto from './components/UpdateResto.vue';

export const routes = [
    { name: 'homeComp', path: '/',component: homeComp,  },
    { name: 'SignUp', component: SignUp, path: '/signup' },
    { name: 'loginComp', component: loginComp, path: '/login' },
    { name: 'addResto', component: addResto, path: '/add-resto' },
    { name: 'updateResto', component: updateResto, path: '/update-resto/:restId' },
];

// const router = createRouter({ history: createWebHistory(), routes });
// export default router;