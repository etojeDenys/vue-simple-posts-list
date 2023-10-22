<template>
  <div class="post">
    <p><span class="bold">ID:</span> {{ post.id }}</p>
    <p><span class="bold">Title:</span> {{ post.title }}</p>
    <p v-show="showDetails"><span class="bold">Body:</span> {{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Post } from '@/types/post'

defineProps<{
  post: Post
  showDetails?: boolean
}>()
</script>

<style scoped>
.post {
  border: 1px solid aquamarine;
  padding: 10px 20px;
}
.bold {
  font-weight: bold;
}
* {
  font-size: 18px;
  padding: 0;
  margin: 0;
}
</style>
