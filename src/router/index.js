import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '@/Pages/Users/UserList'
import UserCreateForm from '@/Pages/Users/UserCreateForm'
import UserEditForm from '@/Pages/Users/UserEditForm'

Vue.use(VueRouter)

const routes = [{
  path: '/users',
  name: 'users',
  component: UserList
}, {
  path: '/users-create',
  component: UserCreateForm
}, {
  path: '/users/:id',
  name: 'show-user',
  component: UserEditForm
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
