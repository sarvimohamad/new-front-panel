import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '@/Pages/Users/UserList'
import UserCreateForm from '@/Pages/Users/UserCreateForm'
import UserEditForm from '@/Pages/Users/UserEditForm'
import RootComponent from '@/components/RootComponent'
import WorkSpaceCreate from '@/Pages/WorkSpace/WorkSpaceCreate'
import WorkSpaceList from '@/Pages/WorkSpace/WorkSpaceList'
import WorkSpaceEdit from '@/Pages/WorkSpace/WorkSpaceEdit'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'root',
  component: RootComponent
}, {
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
}, {
  path: '/work-spaces',
  name: 'workspace',
  component: WorkSpaceList
}, {
  path: '/work-spaces-create',
  name: 'workspace-create',
  component: WorkSpaceCreate
}, {
    path: '/work-spaces/:id',
    name: 'show-work-space',
    component: WorkSpaceEdit
  },]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
