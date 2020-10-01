<template>
  <v-sheet
    min-height="70vh"
    rounded="lg">
    <PostList :posts="posts" /> 
  </v-sheet>
</template>
<script>
import PostList from '@/components/PostList'
import * as ApiService from '@/shared/ApiService.js'
export default {
  components: {
    PostList
  },
  props: {
  },
  data: () => ({
    loaded: false,
    category: {},
    posts: [],
  }),
  async created() {
    this.posts = await ApiService.getPosts({'categories': this.$route.params.id})
    console.log(this.posts)
  }
}
</script>
