<template>
  <div class="form-container">
    <input v-focus v-model.trim="filter" type="text" />
  </div>

  <div v-if="!isPostsLoading" class="list">
    <post-item
      v-for="post in filteredPosts"
      @click="$router.push(`/posts/${post.id}`)"
      :style="{ cursor: 'pointer' }"
      :post="post"
      :key="post.id"
    />
  </div>
  <div v-else>Loading...</div>
  <div class="pagination">
    <custom-pagination :nr-of-pages="pages" v-model="currentPage" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import PostItem from '@/components/PostItem.vue'
import CustomPagination from '@/components/CustomPagination.vue'
import { usePosts } from '@/hooks/usePosts'

const TOTAL_ITEMS = 100
const ITEMS_PER_PAGE = 5

const pages = TOTAL_ITEMS / ITEMS_PER_PAGE

const filter = ref('')
const currentPage = ref(1)

const { isPostsLoading, posts, fetchPosts } = usePosts(ITEMS_PER_PAGE, currentPage)

const filteredPosts = computed(() =>
  posts.value.filter(
    (p) => p.title.includes(filter.value) || p.id.toString().includes(filter.value)
  )
)

watch(currentPage, () => fetchPosts(ITEMS_PER_PAGE, currentPage.value))
</script>

<style scoped>
.form-container {
  margin: 10px 15px;
}
input {
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 18px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 15px;
}

.pagination {
  margin: 10px 15px;
}
</style>
