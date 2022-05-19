import {RouteRecordRaw, RouterView} from "vue-router";

const routes: RouteRecordRaw =
    {
        // component 如果是无路由，则用 routerview ，斜杠可以决定路由是单页面，还是关联页面
        path:'order',
        component: () => RouterView,
        meta:{title:'订单'},
        children:[
            {
                path: 'list',
                name: 'order_list',
                meta:{title:'订单列表'},
                component: () => import('@/views/order/list/index.vue')
            },
            {
                path: 'offline',
                meta:{title:'完成订单'},
                name: 'order_offline',
                component: () => import('@/views/order/offline/index.vue')
            },
        ]
    }

export default routes
