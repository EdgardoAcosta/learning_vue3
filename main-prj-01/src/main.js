import { createApp } from 'vue';

import App from './App';

import router from '@/router';
import store from '@/store/index';
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);


app.mount('#app');