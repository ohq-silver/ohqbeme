import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/page/HelloWorld'
import Register from '@/components/page/front_page/register';
import Login from '@/components/page/front_page/login';
import index from '@/components/page/front_page/index';
import house from '@/components/page/front_page/SecondHouse';
import newhouse from '@/components/page/front_page/NewHouse';
import rentinghouse from '@/components/page/front_page/RentingHouse';
import publicHouseResource from '@/components/page/front_page/publicHouseResource';
import evaluationHouse from '@/components/page/front_page/evaluationHouse';
import commitHireHouse from '@/components/page/front_page/commitHireHouse';
import secondHouseItem from '@/components/page/front_page/secondHouseItem';
import newHouseItem from '@/components/page/front_page/NewHouseItem';
import rentingHouseItem from '@/components/page/front_page/RentingHouseItem';
// import footer from '@/components/page/front_page/footer'

import CSSTEST from '@/components/page/test_page/CSS_TEST';
import USER from '@/components/page/test_page/User';
import CSSUPDATE from '@/components/page/test_page/CSS_UPDATE';

import personCenter from '@/components/page/back_page/personCenter';
import personCenterlease from '@/components/page/back_page/personCenterlease';
import personCenterSell from '@/components/page/back_page/personCenterSell';
import personCenterContract from '@/components/page/back_page/personCenterContract';
import personCenterCredit from '@/components/page/back_page/personCenterCredit';

import personCenterTwo from '@/components/page/back_page/personCenterTwo';
import personCenterContractTwo from '@/components/page/back_page/personCenterContractTwo';
import personCenterCreditTwo from '@/components/page/back_page/personCenterCreditTwo';
import personCenterSellTwo from '@/components/page/back_page/personCenterSellTwo';

Vue.use(Router);

export default new Router({
  // mode: 'hash',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录',
        keepAlive: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册',
        keepAlive: true
      }
    },
    {
      path: '/second_house',
      name: 'house',
      component: house,
      meta: {
        title: '二手房',
        keepAlive: true
      }
    },
    {
      path: '/new_house',
      name: 'newhouse',
      component: newhouse,
      meta: {
        title: '新房',
        keepAlive: true
      }
    },
    {
      path: '/renting_house',
      name: 'rentinghouse',
      component: rentinghouse,
      meta: {
        title: '租房',
        keepAlive: true
      }
    },
    {
      path: '/public_house_resource',
      name: 'publicHouseResource',
      component: publicHouseResource,
      meta: {
        title: '发布房源',
        keepAlive: true
      }
    },
    {
      path: '/evaluation_house',
      name: 'evaluationHouse',
      component: evaluationHouse,
      meta: {
        title: '我要估价',
        keepAlive: true
      }
    },
    {
      path: '/commit_hire_house',
      name: 'commitHireHouse',
      component: commitHireHouse,
      meta: {
        title: '委托出租',
        keepAlive: true
      }
    },
    {
      path: '/second_house_item',
      name: 'secondHouseItem',
      component: secondHouseItem,
      meta: {
        title: '二手房页面具体内容',
        keepAlive: true
      }
    },
    {
      path: '/new_house_item',
      name: 'newHouseItem',
      component: newHouseItem,
      meta: {
        title: '新房页面具体内容',
        keepAlive: true
      }
    },
    {
      path: '/renting_house_item',
      name: 'rentingHouseItem',
      component: rentingHouseItem,
      meta: {
        title: '租房页面具体内容',
        keepAlive: true
      }
    },
    {
      path: '/CSS_TEST',
      name: 'CSSTEST',
      component: CSSTEST,
      meta: {
        title: '用户添加数据前后端整合页面',
        keepAlive: true
      }
    },
    {
      path: '/User',
      name: 'USER',
      component: USER,
      meta: {
        title: '用户查询数据前后端整合页面',
        keepAlive: true
      }
    },
    {
      path: '/CSS_UPDATE',
      name: 'CSS_UPDATE',
      component: CSSUPDATE,
      meta: {
        title: '用户修改数据前后端整合页面',
        keepAlive: true
      }
    },
    {
      path: '/personCenter',
      name: 'personCenter',
      component: personCenter,
      meta: {
        title: '个人中心',
        keepAlive: true
      },
      children: [
        {
          path: '/personCenterlease',
          name: 'personCenterlease',
          component: personCenterlease,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/personCenterSell',
          name: 'personCenterSell',
          component: personCenterSell,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/personCenterContract',
          name: 'personCenterContract',
          component: personCenterContract,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/personCenterCredit',
          name: 'personCenterCredit',
          component: personCenterCredit,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/personCenterTwo',
      name: 'personCenterTwo',
      component: personCenterTwo,
      meta: {
        title: '个人中心',
        keepAlive: true
      },
      children: [
        {
          path: '/personCenterContractTwo',
          name: 'personCenterContractTwo',
          component: personCenterContractTwo,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/personCenterCreditTwo',
          name: 'personCenterCreditTwo',
          component: personCenterCreditTwo,
          meta: {
            keepAlive: true
          }
        },
        {
          path: '/personCenterSellTwo',
          name: 'personCenterSellTwo',
          component: personCenterSellTwo,
          meta: {
            keepAlive: true
          }
        }
      ]
    }
  ]
});
