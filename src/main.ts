/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Plugins
import { registerPlugins } from '@/plugins';
import router from '@/router';

const app = createApp(App);

registerPlugins(app);
const pinia = createPinia();

// Axios
import { api } from '@/plugins/api';
import { AxiosKey } from '@/symbols';
app.config.globalProperties.axios = api;
app.provide(AxiosKey, app.config.globalProperties.axios);

app.use(pinia);
app.use(router);
app.mount('#app');
