<template>
  <div>
    <div class="back" @click="$router.back()">Go Back</div>
    <post-item v-if="post" :post="post" showDetails />
    <div v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import PostItem from '@/components/PostItem.vue'
import { usePost } from '@/hooks/usePost'

const route = useRoute()

const { post } = usePost(+route.params.postId)
</script>

<style scoped>
.back {
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  margin: 30px 20px;
}
</style>
