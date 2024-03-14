import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import useToast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const app = createApp(App)

app.use(router)
.use(useToast, {
    position: 'top-right',
    timeout: 1500,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
  })
app.mount('#app')
