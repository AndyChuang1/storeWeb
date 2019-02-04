import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Home from '@/page/Home'
import Main from '@/page/Main'
import News from '@/page/News'
import About from '@/page/About'
import Catalog from '@/page/Catalog'
import Guide from '@/page/Guide'
import Cart from '@/page/Cart'
import Recipe from '@/page/Recipe'
import All from '@/components/catalog/All'
import Sales from '@/components/catalog/Sales'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/loginYongsn',
            name: 'login',
            component: Login
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            children: [
                {
                    path: 'news',
                    name: 'news',
                    component: News
                },
                {
                    path: 'about',
                    name: 'about',
                    component: About
                },
                {
                    path: 'catalog',
                    name: 'catalog',
                    component: Catalog,
                    children: [
                        {
                            path: 'all',
                            name: 'all',
                            component: All
                        }, {
                            path: 'sales',
                            name: 'sales',
                            component: Sales
                        },
                    ]
                },
                {
                    path: 'guide',
                    name: 'guide',
                    component: Guide
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: Cart
                },
                {
                    path: 'recipe',
                    name: 'recipe',
                    component: Recipe
                },
            ]
        }
    ]
})
