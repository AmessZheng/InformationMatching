import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import detail from '@/page/detail'
import analysis from '@/page/analysis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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