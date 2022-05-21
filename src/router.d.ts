import 'vue-router'

// 元数据，ts类型
declare module 'vue-router' {
    interface RouteMeta {
        title?: String,
        // 使用 ？ 使得他是可选填
        requireAuth?: boolean

    }
}
