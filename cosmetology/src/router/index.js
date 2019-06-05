import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode:"history",
  routes: [
    // 前台收银
    {
      path:'/OrderDetails',
      name:'OrderDetails',
      component:()=>import('@/components/Cashier/OderDetails')
    },
    {
      path: '/cashier',
      name: 'Cashier',
      component: ()=>import('@/components/Cashier/Cashier'),
      children:[{
          path:'right',
          name:'right',
          component:()=>import('@/components/Cashier/Cashier_right')
        },
        {
          path:'ordModify',
          name:'ordModify',
          component:()=>import('@/components/Cashier/ordModify')
        },
        {
          path:'ordSettlement',
          name:'ordSettlement',
          component:()=>import('@/components/Cashier/ordSettlement')
        },
        {
          path:'ordPurchasing',
          name:'ordPurchasing',
          component:()=>import('@/components/Cashier/ordPurchasing')
        },
      ]
    },
    // 会员管理左侧导航栏
    {
      path: '/leftNav',
      name: 'LeftNav',
      component: ()=>import('@/components/LeftNav'),
      children:[
        {
          path: '/VipDetail',
          name: 'VipDetail',
          component: () => import('@/components/VipManage/VipDetail')
        },
        {
          path: '/VipList',
          name: 'VipList',
          component: () => import('@/components/VipManage/VipList'),
        },
        {
          path: '/VipAffair',
          name: 'VipAffair',
          component: () => import('@/components/VipManage/VipAffair'),
        },
        {
          path: '/vipAffairComes',
          name: 'VipAffairComes',
          component: () => import('@/components/VipManage/VipAffairComes')
        },
        {
          path: '/CustomersBooking',
          name: 'CustomersBooking',
          component: () => import('@/components/VipManage/CustomersBooking')
        },
        {
          path: '/VipLevel',
          name: 'VipLevel',
          component: () => import('@/components/VipManage/VipLevel')
        },
        {
          path: '/VipConsume',
          name: 'VipConsume',
          component: () => import('@/components/VipManage/VipConsume')
        },
        {
          path: '/SMS',
          name: 'SMS',
          component: () => import('@/components/VipManage/SMS')
        },
        {
          path: '/SMSList',
          name: 'SMSList',
          component: () => import('@/components/VipManage/SMSList')
        },
        {
          path: '/Integral',
          name: 'Integral',
          component: () => import('@/components/VipManage/Integral')
        },
      ]
    },
    // 员工管理
    {
      path: '/staffManaNav',
      name: 'staffManaNav',
      component: ()=> import('@/components/staffManage/staffManaNav'),
      children:[
        {
          path: '/basicImformation',
          name: 'basicImformation',
          component: ()=> import('@/components/staffManage/basicImformation'),
        },
        {
          path: '/role',
          name: 'role',
          component: ()=> import('@/components/staffManage/role'),
        },
        {
          path: '/staff',
          name: 'staff',
          component: ()=> import('@/components/staffManage/staff'),
        }
      ]
    },
    {
      path: '/SMS',
      name: 'SMS',
      component:()=> import('@/components/VipManage/SMS'),
      children:[
        {
          path: '/sendMessNav',
          name: 'sendMessNav',
          component:()=> import('@/components/VipManage/sendMessNav')
        },
        {
          path: '/sendMessTable',
          name: 'sendMessTable',
          component:()=> import('@/components/VipManage/sendMessTable')
        }
      ]
    },
    //统计路由
    {
      path:'/statisticsNav',
      name:'statisticsNav',
      component:()=>import('@/components/statistics/StatisticsNav'),
      children:[
        {
          path:'/Statistics/Product',
          name:'PdtSaCount',
          component:()=>import('@/components/statistics/PdtSaCount')
        },
        {
          path:'/indexCount',
          name:'indexCount',
          component:()=>import('@/components/statistics/indexCount')
        },
        {
          path:'/Statistics/Profit',
          name:'Profit',
          component:()=>import('@/components/statistics/Profit')
        }
      ]
    }

  ],
  methods:{

  }
})
