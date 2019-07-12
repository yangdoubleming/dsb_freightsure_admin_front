import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from './views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    {
        path: '/',
        component: Layout,
        redirect: '/userManage/userInfo',
        name: 'userManage',
        hidden: true,
        children: [{
            path: 'userManage',
            component: () => import('@/views/userManage/userInfo')
        }]
    },

    // 订单管理
    {
        path: '/userManage',
        component: Layout,
        children: [
            {
                path: 'userInfo',
                name: 'userInfo',
                component: () => import('@/views/userManage/userInfo'),
                meta: { title: '申请列表'}
            },
            {
                path: 'userInfoDetails',
                name: 'userInfoDetails',
                component: () => import('@/views/userManage/userInfoDetails'),
                meta: { title: '申请详情' }
            },
            {
                path: 'loanRecords',
                name: 'loanRecords',
                component: () => import('@/views/userManage/loanRecords'),
                meta: { title: '驳回列表'}
            },
            {
                path: 'loanDetails',
                name: 'loanDetails',
                component: () => import('@/views/userManage/loanDetails'),
                meta: { title: '驳回详情' }
            },
            {
                path: 'orderList',
                name: 'orderList',
                component: () => import('@/views/userManage/orderList'),
                meta: { title: '订单列表' }
            },
            {
                path: 'orderDetails',
                name: 'orderDetails',
                component: () => import('@/views/userManage/loanDetails'),
                meta: { title: '订单详情' }
            },
        ]
    },

];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
