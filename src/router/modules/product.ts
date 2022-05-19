import {RouteRecordRaw, RouterView} from "vue-router";

// routerrecordraw 是路由的填充规则
const routes: RouteRecordRaw = {
    // component 如果是无路由，则用 routerview ，斜杠可以决定路由是单页面，还是关联页面
    // path 加上斜杠是相对路径
    path:'product',
    meta:{title:'商品'},
    component: () => RouterView,
    children:[
        {
            path: 'attr',
            name: 'product_attr',
            meta:{title:'商品规则'},
            component: () => import('@/views/product/attr/index.vue')
        },
        {
            path: 'classify',
            name: 'product_classify',
            meta:{title:'商品类别'},
            component: () => import('@/views/product/classify/index.vue')
        },
        {
            path: 'reply',
            name: 'product_reply',
            meta:{title:'商品评价'},
            component: () => import('@/views/product/reply/index.vue')
        },
        {
            path: 'list',
            name: 'product_list',
            meta:{title:'商品列表'},
            component: () => import('@/views/product/list/index.vue')
        },

    ]
}
export default routes
