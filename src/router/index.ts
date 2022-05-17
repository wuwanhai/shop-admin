import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'

// 配置路由器

// RouteRecordRaw  路由规则提示

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    },
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

// 导出路由表
export default router
