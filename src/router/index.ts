import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/ppt/template',
            name: 'template',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/Photoretouch/deepLink',
            name: 'retouch',
            component: () => import('../views/retouch.vue')
        },
        {
            path: '/Formmaster/template',
            name: 'formmaster',
            component: () => import('../views/formmaster.vue')
        },
        {
            path: '/FormMaster/shareInApp',
            name: 'formmastershare',
            component: () => import('../views/formmasterShareInApp.vue')
        },
        {
            path: '/ppt/function',
            name: 'function',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/ppt/fallback',
            name: 'fallback',
            component: () => import('../views/pptfallback.vue')
        },
        {
            path: '/knockout/function',
            name: 'knockout',
            component: () => import('../views/knockout.vue')
        },
        {
            path: '/FormMaster/share',
            name: 'formmasterfunction',
            component: () => import('../views/formmasterAriDrop.vue')
        }
    ]
})

export default router
