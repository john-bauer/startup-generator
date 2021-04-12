import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.css';
import IconBase from '@/assets/icons/IconBase.vue';

const app = createApp(App);

app.use(store)
app.use(router)
app.mount('#app')
app.component('GIconBase', IconBase)
