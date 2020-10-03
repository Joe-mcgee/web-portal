<template>
  <v-sheet
    min-height="70vh"
    rounded="lg">
    <Title text="Posts" />
      <v-row
        v-if="post.logo"
        class="pt-0"
        justify="center"
        align="center">
        <v-img
          v-if="loaded"
          max-width="50vmin"
          :src="post.logo.url"></v-img>
      </v-row>
      <v-row
        v-if="post.title"
        justify="center"
        align="center">
        <h1>{{post.title}}</h1>
      </v-row>
      <SubTitleList v-if="post.id" :post=post />
      <CategoryList v-if="post.id" :categories="post.categories"/>
        <v-row v-if="post.content" class="px-3"> 
          <v-card-text>
            <vue-markdown>
            {{post.content}}
            </vue-markdown>
          </v-card-text>
        </v-row>
    <PostList v-if="posts.length" :posts="posts" />
  </v-sheet>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import * as ApiService from '@/shared/ApiService.js'
import CategoryList from '@/components/CategoryList'
import SubTitleList from '@/components/SubTitleList'
import PostList from '@/components/PostList'
import Title from '@/components/Title'
export default {
  props: {
    PostList,
  },
  components: {
    VueMarkdown,
    CategoryList,
    SubTitleList,
    PostList,
    Title,

  },
  data: () => ({
    loaded: false,
    posts: [],
    post: {}
  }),
  async created() {
    if (this.$route.params.id) {
      this.post = await ApiService.getPost(this.$route.params.id)
      this.posts = []
    } else {
      this.post = {}
      this.posts = await ApiService.getPosts()
    }
    this.loaded = true
  },
}
</script>
