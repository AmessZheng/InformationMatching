import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import detail from '@/page/detail'
import analysis from '@/page/analysis'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
    ,
    {
      path: '/analysis',
      component: analysis
    }
  ]
})
