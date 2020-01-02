import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/mui.min.css'
import '@/assets/css/app.css'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card'
import nav from '@/components/nav'
import home from '@/components/home'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Helloword',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/',
      name: 'nav',
      component: nav
    }
    ,
    {
      path: '/home',
      name: 'home',
      component: home
    }
    ,
    {
      path: '/index',
      name: 'index',
      component: index
    }
    
  ]
})
