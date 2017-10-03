import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Meutrabalho from '@/components/Meutrabalho'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Meutrabalho.vue',
      component: Meutrabalho
    }
  ]
})
