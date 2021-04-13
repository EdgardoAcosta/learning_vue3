import { createRouter, createWebHistory } from 'vue-router';
import CoachDetail from '@/pages/coaches/CoachDetail';
import CoachesList from '@/pages/coaches/CoachesList';
import CoachRegistration from '@/pages/coaches/CoachRegistration';

import ContactCoach from './pages/requets/ContactCoach';
import RequestsReceived from '@/pages/requets/RequestsReceived';
import NotFound from '@/pages/NotFound';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      props: true,
      component: CoachDetail,
      children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }

  ]
});

export default router;

