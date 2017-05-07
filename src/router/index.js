import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Counter from '../pages/Counter'

import Home from '../components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/counter',
      component: Counter
    }
  ]
})
