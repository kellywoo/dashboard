import Vue from 'vue'
import Router from 'vue-router'
import MainPageComponent from '@/components/pages/main-page'
import SlidePageComponent from '@/components/pages/slide-page'
import YoutubePageComponent from '@/components/pages/youtube-page'
import GridPageComponent from '@/components/pages/grid-page'
import WaitPartComponent from '@/components/parts/waiting'
Vue.use(Router);

export default new Router({
  mode:  'history',
  routes: [{
    path: '/main', name: 'main', component: MainPageComponent
  },{
    path: '/slide', name: 'slide', component: SlidePageComponent
  },{
    path: '/youtube', name: 'youtube', component: YoutubePageComponent
  },{
    path: '/grid', name: 'grid', component: GridPageComponent
  },{
    path: '/wait', name: 'wait', component: WaitPartComponent
  }, {
    path: '**', redirect: {name:'main'}
  }]
})
