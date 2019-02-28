export default [
  {
    path: '/',
    name: 'indextab',
    redirect:'/kachuotabplay',
    component: resolve => require(['../components/index/index'], resolve),
    children: []
  },
  {
    path: '/kachuotabplay',
    name: 'KachuoTabPlay',
    component: resolve => require(['../components/pages/tabindex/KachuoTabPlay'], resolve),
    children: []
  },
  {
    path: '/kachuotabmall',
    name: 'KachuoTabMall',
    component: resolve => require(['../components/pages/tabindex/KachuoTabMall'], resolve),
    children: []
  },
  {
    path: '/kachuotabcash',
    name: 'KachuoTabCash',
    component: resolve => require(['../components/pages/tabindex/KachuoTabCash'], resolve),
    children: []
  },
  {
    path: '/kachuotabincome',
    name: 'KachuoTabIncome',
    component: resolve => require(['../components/pages/tabindex/KachuoTabIncome'], resolve),
    children: []
  },
  {
    path: '/kachuotabpersonalcenter',
    name: 'KachuoTabPersonalCenter',
    component: resolve => require(['../components/pages/tabindex/KachuoTabPersonalCenter'], resolve),
    children: []
  }
]