import { createApp } from 'vue'
import App from './App.vue'
import VFocus from '@/directives/VFocus'
import PostsPage from '@/pages/PostsPage.vue'
import HomePage from '@/pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import PostDetailsPage from '@/pages/PostDetailsPage.vue'

const app = createApp(App)

app.directive(VFocus.name, VFocus)

const routes = [
  { path: '/posts', component: PostsPage },
  { path: '/posts/:postId', component: PostDetailsPage },
  { path: '/', component: HomePage }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes
})

app.use(router)

app.mount('#app')
