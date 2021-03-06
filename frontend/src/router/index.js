import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserPage from '@/components/user/IndexUser'
import MovieIndex from '@/components/movie/MovieIndexPage'
import MovieShow from '@/components/movie/MovieShowPage'
import SignUp from '@/components/user/Signup'
import SignIn from '@/components/user/Signin'
import BlogHome from '@/components/blog/blogHome'
import CreatePost from '@/components/blog/createPost'
import DetailBlog from '@/components/blog/detailBlog'

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
      path: '/user/signIn',
      name: 'signIn',
      component: SignIn
    },
    {
      path: '/user/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/blog',
      name: 'blogHome',
      component: BlogHome
    },
    {
      path: '/blog/:id?',
      name: 'detailBlog',
      component: DetailBlog
    },
    {
      path: '/blog/create',
      name: 'create',
      component: CreatePost
    },
    {
      path: '/blog/delete/:id?',
      name: 'blogHome',
      component: BlogHome
    },
    {
      path: '/blog/update/:id?',
      name: 'detailBlog',
      component: DetailBlog
    },
    {
      path: '/movie',
      name: 'movieIndex',
      component: MovieIndex
    },
    {
      path: '/movie/:id?',
      name: 'movieShow',
      component: MovieShow
    },
  ]
})
