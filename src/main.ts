import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import NotificationCenterPlugin from '@novu/notification-center-vue';
import '@novu/notification-center-vue/dist/style.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(NotificationCenterPlugin)
app.mount('#app')
