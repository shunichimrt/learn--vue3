import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import List from "@/components/List";

Vue.use(Router);

export default new Router({
  routes: [
    // /→/helloに変更
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    },
    // 元々のHelloWorldの3行をそのままコピペしてHelloWorldを→Listに変更
    {
      path: "/",
      name: "List",
      component: List
    }
  ]
});
