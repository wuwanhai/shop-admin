import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

import AppLayout from '@/layout/AppLayout.vue'
import product from "@/router/modules/product";
import permission from "@/router/modules/permission";
import order from "@/router/modules/order";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import {store} from "@/store";

// 配置路由器

// RouteRecordRaw  路由规则提示

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component: () => AppLayout,
        meta:{
            requireAuth: true
        },
        children:[
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home/index.vue'),
                // 自定义元数据
                meta:{title:'首页',}
            },
            product,
            permission,
            order
        ]
    },
    // login 是单独的页面，所以跳出去
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/index.vue')
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes // 路由规则
})

router.beforeEach((to, from) => {
    // 增加最上面的进度条
    nProgress.start()

    // 而不是去检查每条路由记录
    // to.matched.some(record => record.meta.requiresAuth)
    debugger

    if (to.meta.requireAuth && store.state.user) {
        // 此路由需要授权，请检查是否已登录
        // 如果没有，则重定向到登录页面
        return {
            path: '/login',
            // 保存我们所在的位置，以便以后再来
            query: { redirect: to.fullPath },
        }
    }
})

router.afterEach(() => {
    // 路由加载完后消失
    nProgress.done()
})

// 导出路由表
export default router
