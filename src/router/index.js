import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import InsideWorld from '@/components/InsideWorld'
import Callback from '@/components/callback'
import { requireAuth } from '../auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/inside-world',
      name: 'InsideWorld',
      beforeEnter: requireAuth,
      component: InsideWorld
    },
    {
      path: '/callback',
      component: Callback
    }
  ]
})
