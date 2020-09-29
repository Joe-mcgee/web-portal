<template>
  <div>
    <mini-title
      v-bind:nestData=this.nestData
      >Recent</mini-title>
    <logo-a 
      v-bind:nestData=this.nestData
      v-for="(post, i) in posts"
      :key="i + 'logo'"
      :iterator="i"
      :src="post.logo.url">
      {{post.site}}
    </logo-a>

    <title-a
      v-bind:nestData=this.nestData
      :areas=areas
      v-for="(post, j) in posts"
      :key="j + 'title'"
      :iterator="j"
      :href="post.site">
      {{post.title}}
    </title-a>

    <content-a
      v-bind:nestData=this.nestData
      :areas=areas
      v-for="(post, k) in posts"
      :key="k + 'content'"
      :iterator="k">
      {{post.content}}
    </content-a>
  </div>
</template>

<script>
import * as ListItems from '@/components/ListItems.js'
import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components'


//import CategoryChit from '@/components/CategoryChit.vue'

let MiniTitle = ListItems.miniTitle()
//const LogoA = ListItems.createLogo('blog')
//const TitleA = ListItems.createTitle('blog')
//const ContentA = ListItems.createContent('blog')
//const CategoriesA = ListItems.createCategories('blog')
//const Category = ListItems.createCategory(CategoryChit, 'blog')
export default {
  name: 'List',
  props: {
    posts: Array
  },
  components: {
    LogoA,
    TitleA,
    ContentA,
    CategoriesA,
    Category
  }
  data: () => ({}),
  

}

</script>
