import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from 'vue'

// 全局注册 element UI 组件
export default {
    // @ts-ignore
    install (app: App) {
        app.use(ElementPlus)
    }
}
