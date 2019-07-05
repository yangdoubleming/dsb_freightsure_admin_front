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
                meta: { title: '用户信息'}
            },
            {
                path: 'loanRecords',
                name: 'loanRecords',
                component: () => import('@/views/userManage/loanRecords'),
                meta: { title: '贷款记录'}
            },
            {
                path: 'repayRecords',
                name: 'repayRecords',
                component: () => import('@/views/userManage/repayRecords'),
                meta: { title: '还款记录'}
            },
            {
                path: 'userInfoDetails',
                name: 'userInfoDetails',
                component: () => import('@/views/userManage/userInfoDetails'),
                meta: { title: '用户详情' }
            },
            {
                path: 'loanDetails',
                name: 'loanDetails',
                component: () => import('@/views/userManage/loanDetails'),
                meta: { title: '贷款详情' }
            },
            {
                path: 'loanEdit',
                name: 'loanEdit',
                component: () => import('@/views/userManage/loanEdit'),
                meta: { title: '贷款信息录入' }
            },
        ]
    },

];
export default new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});
