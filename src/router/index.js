import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Package from '@/components/Package'
import ScopeItem from '@/components/ScopeItem'
import Detail from '@/components/Detail'
import selTable from '@/components/selTable'
import TreeTable from '@/components/TreeTable'
import Panel from '@/components/Panel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Packages',
      name: 'Packages',
      component: Package
    },
    {
      path: '/ScopeItems',
      name: 'ScopeItems',
      component: ScopeItem
    },
    {
      path: '/Detail*',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/selTable',
      name: 'selTable',
      component: selTable
    },
    {
      path: '/TreeTable',
      name: 'TreeTable',
      component: TreeTable
    },
    {
      path: '/Panel',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/Panel/Package*',
      name: 'Panel',
      component: Panel
    }
  ]
})
