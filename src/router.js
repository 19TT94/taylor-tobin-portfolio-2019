import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import(/* webpackChunkName: "about" */ './views/Featured.vue')
    },
		{
      path: '/projects',
      name: 'projects',
      component: () => import(/* webpackChunkName: "about" */ './views/Projects.vue')
    },
		{
			path: '/about',
			name: 'about',
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
    },
    {
      // will match everything
      path: '*',
      name: 'NotFound',
      component: () => import(/* webpackChunkName: "NotFound" */ './views/NotFound.vue')
    }
  ]
})
