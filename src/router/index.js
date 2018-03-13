import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/pages/main-page'
import SlideComponent from '@/components/pages/slide-page'
import YoutubeComponent from '@/components/pages/youtube-page'
import GridComponent from '@/components/pages/grid-page'

Vue.use(Router);

export default new Router({
  mode:  'history',
  routes: [{
    path: '/main', name: 'main', component: MainComponent
  },{
    path: '/slide', name: 'slide', component: SlideComponent
  },{
    path: '/youtube', name: 'youtube', component: YoutubeComponent
  },{
    path: '/grid', name: 'grid', component: GridComponent
  }, {
    path: '**', redirect: {name:'main'}
  }]
})
