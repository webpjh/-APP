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
  },
  {
    path: '/appmessage',
    name: 'appmessage',
    component: resolve => require(['@/components/pages/kachuouser/Message'], resolve),
  },
  {
    path: '/messagelist',
    name: 'messagelist',
    component: resolve => require(['@/components/pages/kachuouser/MessageList'], resolve),
  },
  {
    path: '/usersearch',
    name: 'usersearch',
    component: resolve => require(['@/components/pages/kachuoplay/UserSearch'], resolve),
  },
  {
    path: '/ticketsdiscount',
    name: 'ticketsdiscount',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TicketsDiscount'], resolve),
  },
  {
    path: '/intelligentnavigation',
    name: 'intelligentnavigation',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/IntelligentNavigation'], resolve),
  },
  {
    path: '/scencerelease',
    name: 'scencerelease',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceRelease'], resolve),
  },
  {
    path: '/scenceservice',
    name: 'scenceservice',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ScenceService'], resolve),
  },
  {
    path: '/remember',
    name: 'remember',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Remember'], resolve),
  },
  {
    path: '/understand',
    name: 'understand',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/Understand'], resolve),
  },
  {
    path: '/takeaway',
    name: 'takeaway',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/TakeAway'], resolve),
  },
  {
    path: '/servicesurround',
    name: 'servicesurround',
    component: resolve => require(['@/components/pages/kachuoplay/toolslist/ServiceSurround'], resolve),
  }
]