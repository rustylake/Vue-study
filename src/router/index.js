import Vue from 'vue'
import Router from 'vue-router'
import Memony from '@/components/memony/Memony'
import Pro from '@/components/pro/Pro'
import Ducter from '@/components/ducter/Ducter'
import Teacher from '@/components/teacher/Teacher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/ducter',
      name:'ducter',
      component:Ducter,
    },
    {
      path:'/pro',
      name:'pro',
      component:Pro,
    },
    {
      path:'/memony',
      name:'memony',
      component:Memony,
    },
    {
      path:'/teacher',
      name:'teacher',
      component:Teacher,
    }
  ]
})
