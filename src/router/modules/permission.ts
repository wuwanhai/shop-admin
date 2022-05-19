import {RouteRecordRaw, RouterView} from "vue-router";

const routes: RouteRecordRaw = {
    // component 如果是无路由，则用 routerview ，斜杠可以决定路由是单页面，还是关联页面
    path:'permission',
    component: () => RouterView,
    children:[
        {
            path: 'admin',
            name: 'permission_admin',
            component: () => import('@/views/permission/admin/index.vue')
        },
        {
            path: 'rule',
            name: 'permission_rule',
            component: () => import('@/views/permission/rule/index.vue')
        },
        {
            path: 'role',
            name: 'permission_role',
            component: () => import('@/views/permission/role/index.vue')
        },
    ]
}

export default routes
