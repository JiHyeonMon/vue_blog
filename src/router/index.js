import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserPage from '@/components/IndexPage'
import MovieIndex from '@/components/MovieIndexPage'
import MovieShow from '@/components/MovieShowPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'userPage',
      component: UserPage
    },
    {
      path: '/movieIndex',
      name: 'movieIndex',
      component: MovieIndex
    },
    {
      path: '/movieIndex/:id?',
      name: 'movieShow',
      component: MovieShow
    },
  ]
})
