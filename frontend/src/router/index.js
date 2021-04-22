import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserPage from '@/components/user/IndexUser'
import MovieIndex from '@/components/MovieIndexPage'
import MovieShow from '@/components/MovieShowPage'
import SignUp from '@/components/user/Signup'
import SignIn from '@/components/user/Signin'

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
      path: '/user/signin',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/user/signUp',
      name: 'signUp',
      component: SignUp
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
