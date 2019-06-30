import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import detail from '@/page/detail'
import analysis from '@/page/analysis'
import login from '@/page/login'
import demo from '@/page/demo'
import form from '@/page/form'

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
    },
    {
      path: '/analysis',
      component: analysis
    },
    {
      path: '/demo',
      component: demo
    },
    {
      path: '/form',
      component: form
    }
  ]
})
