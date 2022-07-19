import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RenTable from '../views/RenTable.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/RenTable',
    name: 'RenTable',
    component: RenTable
  }
]

const router = new VueRouter({
  routes
})

export default router
