import Vue from 'vue'
import Router from 'vue-router'

import Apage from "@/page/a.vue"
import Bpage from "@/page/b.vue"
import Cpage from "@/page/c.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'A',
      component: Apage
    },
    {
      path: '/apage',
      name: 'A',
      component: Apage
    },
    {
      path: '/bpage',
      name: 'B',
      component: Bpage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/cpage',
      name: 'C',
      component: Cpage
    }
  ]
})
