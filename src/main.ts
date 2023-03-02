import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './routers';
import i18n from './i18n';

import 'element-plus/theme-chalk/el-loading.css';
import '@/shared/styles/base.scss';
// import '@/shared/styles/o-theme/index.scss';

import App from './App.vue';

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);

app.mount('#app');
