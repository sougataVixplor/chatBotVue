import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './index.css'; // Tailwind CSS

createApp(App).use(store).mount('#app');
