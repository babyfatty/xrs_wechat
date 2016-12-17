// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import Router from 'vue-router'
import Report from './container/Report'
import Basic from './components/Basic'
import Knowledge from './components/Knowledge'
import Score from './components/Score'
import Overall from './components/Overall'
import ReportList from './components/ReportList'
import Validator from 'vue-validator'

Vue.use(Validator)
Vue.use(Router)

const routes = [
  { path: '/', component: App },
  { path: '/reportlist', component: ReportList, name:'list' },
  { 
  	path: '/report/:id', 
  	component: Report ,
  	name:'report',
  	children : [
	  	{
	  		path : 'basic',
	  		name : 'basic',
	  		component : Basic
	  	},
	  	{ 
	  		path: 'overall', 
	  		name: 'overall', 
	  		component: Overall 
	  	},
  		{ 
  			path: 'knowledge', 
	  		name: 'knowledge', 
  			component: Knowledge 
  		},
  		{ 	path: 'score', 
	  		name: 'score', 
  			component: Score 
  		}
  	]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
	mode: 'history',
  	routes // （缩写）相当于 routes: routes
})

const app = new Vue({
  router
}).$mount('#app')