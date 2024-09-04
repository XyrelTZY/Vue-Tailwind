// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css'; // Ensure Tailwind CSS is imported

createApp(App)
  .use(router)
  .mount('#app');
