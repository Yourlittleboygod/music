import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index/Index'
import Xingqing from '@/Index/Xingqing'
import Gsxq from '@/Index/Gsxq'
import Paiheng2 from '@/Index/Paiheng2'
import Grzx from '@/Index/Grzx'
import Gedan from '@/Index/Gedan'
import Tuijian from '@/divide/Tuijian'
import Geshou from '@/divide/Geshou'
import Paiheng from '@/divide/Paiheng'
import Shousuo from '@/divide/Shousuo'
Vue.use(Router)

export default new Router({
  linkActiveClass:'zhong',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Index',
      name: 'Indexs',
      component: Index,
      children:[
        {
          path:'/Index/',
          component:Tuijian
        },
        {
          path:'/Index/Tuijian',
          component:Tuijian
        },
        {
          path:'/Index/Geshou',
          component:Geshou
        },
        {
          path:'/Index/Paiheng',
          component:Paiheng
        },
        {
          path:'/Index/Shousuo',
          component:Shousuo
        }
      ]
    },
    {
      path: '/Xingqing',
      name: 'Xingqing',
      component: Xingqing
    },
    {
      path: '/Gsxq',
      name: 'Gsxq',
      component: Gsxq
    },
    {
      path: '/Paiheng2',
      name: 'Paiheng2',
      component: Paiheng2
    },
    {
      path: '/Grzx',
      name: 'Grzx',
      component: Grzx
    },
    {
      path: '/Gedan',
      name: 'Gedan',
      component: Gedan
    }
  ]
})
