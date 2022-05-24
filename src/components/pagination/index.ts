// 全局注册 element UI 组件
import App from "@vue/runtime-dom";
import Component from './index.vue'

export default {
    // @ts-ignore
    install (app: App) {
        app.component('AppPagination', Component)
    }
}
