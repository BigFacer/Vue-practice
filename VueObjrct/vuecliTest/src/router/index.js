import Vue from 'vue'
import Router from 'vue-router'
import post from '@/components/page/post'
import hi from '@/components/page/hi'
import HelloWorld from '@/components/page/HelloWorld'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'post',
      component: post,

    },{
      path: '/hi',
      name: 'hi',
      component: hi,

    },
    {
      path: '/HelloWorld/:newsId/:newsTitle',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
      }

    }

  ]
})
