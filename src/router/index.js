import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/HomePage',
      name: 'HomePage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomePage.vue'),
      meta:{
        breadCrum:[{
          name:"首頁",
          link:'HomePage'
        }
      ]
      }

    },
    {
      path: '/BicycleRoute',
      name: 'BicycleRoute',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BicycleRoute.vue'),
      meta:{
        breadCrum:[{
          name:"首頁",
          link:'HomePage'
        },
        {
          name:'自行車路線'
        }]
      }
    },
    {
      path: '/FoodTourism',
      name: 'FoodTourism',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FoodTourism.vue'),
      meta:{
        breadCrum:[{
          name:"首頁",
          link:'HomePage'
        },
        {
          name:'美食資訊'
        }]
      }
    },
    {
      path: '/CarbonEmissions',
      name: 'CarbonEmissions',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CarbonEmissions.vue'),
      meta:{
        breadCrum:[{
          name:"首頁",
          link:'HomePage'
        },
        {
          name:'碳排放量'
        }]
      }
    },
  ]
})

export default router
