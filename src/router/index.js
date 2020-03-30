import Vue from 'vue'
import Router from 'vue-router'
import SlickSort from '@/components/SlickSort'
Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/slick',
    	component: SlickSort
    }
  ]
})
