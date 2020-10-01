<template>
  <v-sheet
    min-height="70vh"
    rounded="lg"
  >
    <PostList :posts="recent" />
    <!--  -->
  </v-sheet>
</template>

<script>
// @ is an alias to /src

import * as ApiService from '@/shared/ApiService.js'
import PostList from '@/components/PostList'
export default {
  name: 'Home',
  components: {
    PostList
  },
  data: () => ({
    recent: [],
    hover: false,
  }),
  async created() {
    this.recent = await ApiService.getPosts()
  },
  methods: {
    go(url, id) {
      this.$router.push({path: `${url}/${id}`})
    }
  }
}
</script>
