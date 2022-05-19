import {RouteRecordRaw, RouterView} from "vue-router";

const routes: RouteRecordRaw = {
    // component 如果是无路由，则用 routerview ，斜杠可以决定路由是单页面，还是关联页面
    path:'permission',
    meta:{title:'权限'},
    component: () => RouterView,
    children:[
        {
            path: 'admin',
            name: 'permission_admin',
            meta:{title:'管理员'},
            component: () => import('@/views/permission/admin/index.vue')
        },
        {
            path: 'rule',
            meta:{title:'规则'},
            name: 'permission_rule',
            component: () => import('@/views/permission/rule/index.vue')
        },
        {
            path: 'role',
            meta:{title:'角色'},
            name: 'permission_role',
            component: () => import('@/views/permission/role/index.vue')
        },
    ]
}

export default routes
