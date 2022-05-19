import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

import AppLayout from '@/layout/AppLayout.vue'
import product from "@/router/modules/product";
import permission from "@/router/modules/permission";
import order from "@/router/modules/order";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'

// 配置路由器

// RouteRecordRaw  路由规则提示

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        component: () => AppLayout,
        children:[
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home/index.vue'),
                // 自定义元数据
                meta:{title:'首页'}
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

router.beforeEach(() => {
    // 增加最上面的进度条
   nProgress.start()
})

router.afterEach(() => {
    // 路由加载完后消失
    nProgress.done()
})

// 导出路由表
export default router
