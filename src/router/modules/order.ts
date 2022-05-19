import {RouteRecordRaw, RouterView} from "vue-router";

const routes: RouteRecordRaw =
    {
        // component 如果是无路由，则用 routerview ，斜杠可以决定路由是单页面，还是关联页面
        path:'order',
        component: () => RouterView,
        children:[
            {
                path: 'list',
                name: 'order_list',
                component: () => import('@/views/order/list/index.vue')
            },
            {
                path: 'offline',
                name: 'order_offline',
                component: () => import('@/views/order/offline/index.vue')
            },
        ]
    }

export default routes
