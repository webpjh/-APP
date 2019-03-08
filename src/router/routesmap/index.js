export default [
  {
    path: '/',
    name: 'indextab',
    component: resolve => require(['@/components/index/index'], resolve)
  },
  {
    path: '/userlocation',
    name: 'userlocation',
    component: resolve => require(['@/components/pages/kachuoplay/UserLocation'], resolve),
  }
]