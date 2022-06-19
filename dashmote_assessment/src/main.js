import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue/es';
import 'ant-design-vue/dist/antd.css';
import './assets/styles.css'
import '@ant-design/icons-vue'

const app = createApp(App)

app.use(Antd) // same as Vue.use in Vue 2.X
app.mount('#app')