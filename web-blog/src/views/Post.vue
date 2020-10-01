<template>
  <v-sheet
    min-height="70vh"
    rounded="lg">
    <v-container fluid>
      <v-row
        justify="center"
        align="center">
        <v-img
          v-if="loaded"
          max-width="50vmin"
          :src="post.logo.url"></v-img>
      </v-row>
      <v-row
        justify="center"
        align="center">
        <h1>{{post.title}}</h1>
      </v-row>
      <SubTitleList :post=post />
      <CategoryChitList :categories="post.categories"/>
        <v-row>
          <v-card-text>
            {{post.content}}
          </v-card-text>
        </v-row>
    </v-container>
  </v-sheet>
</template>
<script>
import * as ApiService from '@/shared/ApiService.js'
import CategoryChitList from '@/components/CategoryChitList'
import SubTitleList from '@/components/SubTitleList'
console.log(ApiService)
export default {
  props: {

  },
  components: {
    CategoryChitList,
    SubTitleList
  },
  data: () => ({
    loaded: false,
    post: {},
  }),
  async created() {
     this.post = await ApiService.getPost(this.$route.params.id) 
    this.loaded = true
  },
}
</script>
