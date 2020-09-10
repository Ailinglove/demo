//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
import login from "../components/login"
import main from "../components/main"
const routes = [
  {
    path: "",
    component: login
  },
  {
    path: "/main",
    name:'main',
    component: main
  }
];

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});
console.log('路由')
//抛出这个这个实例对象方便外部读取以及访问
export default router