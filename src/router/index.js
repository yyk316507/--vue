import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import CarGift from "@/components/carGift"
import Lantern from "@/components/lantern"
import Game from "@/components/Game"
import Errors from "@/components/Error"
import Success from "@/components/success"
import Luck from "@/components/Luck"
import Joy from "@/components/Joy"
import Infos from "@/components/info"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/carGift',
      name: 'CarGift',
      component: CarGift
    },
    {
      path: '/lantern',
      name: 'Lantern',
      component: Lantern
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/error',
      name: 'Error',
      component: Errors
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/infos',
      name: 'Infos',
      component: Infos
    },
    {
      path: '/luck',
      name: 'Luck',
      component: Luck
    },
    {
      path: '/joy',
      name: 'Joy',
      component: Joy
    }
  ]
})
