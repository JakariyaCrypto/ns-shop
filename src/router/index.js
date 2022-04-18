import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import CategoryProduct from '../views/Category.vue'
import singleView from '../views/Single.vue'
import subCat from '../views/subCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {path: '/menu', name: 'Menu', component: Menu },
  {path: '/category-product', name: 'CategoryProduct', component: CategoryProduct},
  {path: '/single-product', name: 'singleView', component: singleView},
  {path: '/sub-category', name:subCat, component:subCat}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
