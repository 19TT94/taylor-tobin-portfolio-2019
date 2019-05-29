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
      component: Home
    },
    {
      path: '/featured',
      name: 'featured',
      component: Featured
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      // will match everything
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
