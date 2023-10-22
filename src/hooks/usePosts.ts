import axios from 'axios'
import { Post } from '@/types/post'
import { onMounted, ref } from 'vue'

export function usePosts(itemsPerPage: number, currentPage: number) {
  const posts = ref<Post[]>([])
  const isPostsLoading = ref(false)
  const fetchPosts = async (limit?: number, page?: number) => {
    isPostsLoading.value = true
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    })
    isPostsLoading.value = false

    posts.value = response.data
  }

  onMounted(() => fetchPosts(itemsPerPage, currentPage))

  return {
    posts,
    isPostsLoading,
    fetchPosts
  }
}
