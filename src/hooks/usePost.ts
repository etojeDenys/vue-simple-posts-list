import axios from 'axios'
import { onMounted, ref } from 'vue'
import { Post } from '@/types/post'

export function usePost(postId: number) {
  const post = ref<Post | null>(null)
  const isPostLoading = ref(false)

  const fetchPost = async (postId: number) => {
    isPostLoading.value = true

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    post.value = response.data
    isPostLoading.value = false
  }

  onMounted(() => fetchPost(postId))

  return {
    post,
    isPostLoading,
    fetchPost
  }
}
