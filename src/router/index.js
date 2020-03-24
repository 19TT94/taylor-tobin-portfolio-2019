import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Featured from '@/views/Featured'
import Projects from '@/views/Projects'
import About from '@/views/About'
import Contact from '@/views/Contact'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { transitionName: 'fade' }
    },
    {
      path: '/featured',
      name: 'featured',
      component: Featured,
      meta: { transitionName: 'zoom' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: { transitionName: 'fade' }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { transitionName: 'fade' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { transitionName: 'fade' }
    },
    {
      // will match everything
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
