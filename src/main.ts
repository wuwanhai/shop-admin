import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import {store, key} from "./store";
import ElementPlus from './plugins/element-plus'

// 传入 store 同时传入 key “至关重要”
createApp(App).use(router).use(store, key).use(ElementPlus).mount('#app')
