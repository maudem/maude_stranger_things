import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Inspiration',
      name: 'The Insiprations of the Show',
      component: () => import(/* webpackChunkName: "Inspiration" */ './views/Inspiration.vue'),
    },
    {
      path: '/Map',
      name: 'Map',
      component: () => import(/* webpackChunkName: "Map" */ './views/Map.vue'),
    },
    {
      path: '/Gallery',
      name: 'Show Gallery',
      component: () => import(/* webpackChunkName: "Gallery" */ './views/Gallery.vue'),
    },
    {
      path: '/Episodes',
      name: 'List of Episodes',
      component: () => import(/* webpackChunkName: "Inspiration" */ './views/Episodes.vue'),
    },
  ],
});
