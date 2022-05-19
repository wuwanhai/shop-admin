import {RouteRecordRaw, RouterView} from "vue-router";

// routerrecordraw 是路由的填充规则
const routes: RouteRecordRaw = {
    // component 如果是无路由，则用 routerview ，斜杠可以决定路由是单页面，还是关联页面
    // path 加上斜杠是相对路径
    path:'product',
    component: () => RouterView,
    children:[
        {
            path: 'attr',
            name: 'product_attr',
            component: () => import('@/views/product/attr/index.vue')
        },
        {
            path: 'classify',
            name: 'product_classify',
            component: () => import('@/views/product/classify/index.vue')
        },
        {
            path: 'reply',
            name: 'product_reply',
            component: () => import('@/views/product/reply/index.vue')
        },
        {
            path: 'list',
            name: 'product_list',
            component: () => import('@/views/product/list/index.vue')
        },

    ]
}
export default routes
