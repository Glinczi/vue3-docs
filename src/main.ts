import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'

createApp(App).use(router).mount('#app')

// 全局组件的注册和使用
// import GlobalCom from './components/GlobalCom.vue'

// createApp(App).use(router).component('GlobalCom',GlobalCom).mount('#app')