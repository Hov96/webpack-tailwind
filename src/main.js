import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { toastOptions } from './constants/constants';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(Toast, toastOptions).mount('#app');
