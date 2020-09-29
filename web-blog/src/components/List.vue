<template>
  <div>
    <mini-title
      v-bind:nestData=getNestData
      >Recent</mini-title>
    <logo-a 
      v-bind:nestData=getNestData
      v-for="(post, i) in list"
      :key="i + 'logo'"
      :iterator="i"
      :src="post.logo.url">
      {{post.site}}
    </logo-a>

    <title-a
      v-bind:nestData=getNestData
      v-for="(post, j) in list"
      :key="j + 'title'"
      :iterator="j"
      :href="post.site">
      {{post.title}}
    </title-a>

    <content-a
      v-bind:nestData=getNestData
      v-for="(post, k) in list"
      :key="k + 'content'"
      :iterator="k">
      {{post.content}}
    </content-a>
  </div>
</template>

<script>
import * as ApiService from '@/shared/ApiService.js'
import * as ListItems from '@/components/ListItems.js'
import { createGrid } from '@/plugins/IGoldenGrid.js'

//import CategoryChit from '@/components/CategoryChit.vue'
let MiniTitle = createGrid(ListItems.miniTitle(), {
  origin: {
    x: 1,
    y: 1,
  },
  dimension: {
    x: 13,
    y: 1
  }
})
const LogoA = ListItems.createLogo('blog')
const TitleA = ListItems.createTitle('blog')
const ContentA = ListItems.createContent('blog')
// const CategoriesA = ListItems.createCategories('blog')
// const Category = ListItems.createCategory(CategoryChit, 'blog')
export default {
  name: 'List',
  props: {
    list: Array,
  },
  components: {
    MiniTitle,
    LogoA,
    TitleA,
    ContentA,
//    CategoriesA,
//    Category
  },
  data: () => ({
  }),
  async created() {
    this.list  = await ApiService.getPosts()
  }
  

}

</script>
