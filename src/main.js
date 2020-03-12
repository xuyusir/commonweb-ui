import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


// 把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  /* 判断该路由是否需要登录权限 */
  if (to.matched.some(record => record.meta.requireAuth)) {
    //是否登录
    axios.post('/home/user/isLogin')
        .then(function (response) {
            if (response.data.code == 0) {
                //未登录
                if (response.data.data.online == 0) {
                    next({
                        path: '/login',
                    })
                } else {
                    //已登录
                    next()
                }
            }
        })
        .catch(function (error) {
            console.log(error)
        });

  }
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
