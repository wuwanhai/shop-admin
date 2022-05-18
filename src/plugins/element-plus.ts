import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 全局注册 element UI 组件
export default {
    // @ts-ignore
    install (app: App) {
        app.use(ElementPlus,{locale:zhCn}, {size: 'small'})
    }
}
