import { createRouter, createWebHistory } from 'vue-router';


import TeamList from '@/components/teams/TeamsList';
import UsersList from '@/components/users/UsersList';
import TeamMembers from '@/components/teams/TeamMembers';
import NotFound from '@/components/nav/NotFound';
import TeamsFooter from '@/components/teams/TeamsFooter';
import UsersFooter from '@/components/users/UsersFooter';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/users',
      components: {
        default: UsersList, footer: UsersFooter
      },
      beforeEnter(to,from, next){
        next();
      }
    },
    {
      name: 'teams',
      path: '/teams',
      components: {
        default: TeamList, footer: TeamsFooter
      },
      meta:{
        needsAuth: false
      },
      alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  scrollBehavior(_,_2, savePosition){
    if(savePosition){
      return savePosition;
    }
    return{
      left:0,
      top:0
    }
  }
});

router.beforeEach((to, from, next) =>{
  if (to.meta.needAuth){
    console.log('Needs Auth');
    next();
  }else{
    next();
  }
})

export default router;
