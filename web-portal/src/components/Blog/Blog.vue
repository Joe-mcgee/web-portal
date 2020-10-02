<template>
  <div>
    <typewriter-grid fillColor="#003bff"></typewriter-grid>
    <mini-title
      v-bind:nestData=nestData
      >Blog</mini-title>
    <logo-a
      
      @click="go(blog.id)"
      :areas=areas
      v-for="(blog, i) in blogsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="blog.logo.url">
      {{blog.site}}
    </logo-a>

    <title-a
      @click="go(blog.id)"
      v-bind:nestData=nestData
      :areas=areas
      v-for="(blog, j) in blogsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="blog.site">
      {{blog.title | truncate(areas.indexOf('blog'), '...')}}
    </title-a>

    <content-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(blog, k) in blogsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{blog.content | truncate(areas.indexOf('blog'), '...')}}
    </content-a>
  </div>
</template>
<script>
import Typewriter from 'vue-material-design-icons/Typewriter.vue'

import * as ListItems from '@/components/ListItems.js'
import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components'


import CategoryChit from '@/components/CategoryChit.vue'

let MiniTitle = ListItems.miniTitle()
let TypewriterGrid = ListItems.iconCenter(Typewriter)
const LogoA = ListItems.createLogo('blog')
const TitleA = ListItems.createTitle('blog')
const ContentA = ListItems.createContent('blog')
const CategoriesA = ListItems.createCategories('blog')
const Category = ListItems.createCategory(CategoryChit, 'blog')
export default {
  title: 'Blog',
  props: {
    areas: Array,
    nestData: Object
  },
  components: {
    TypewriterGrid,
    MiniTitle,
    LogoA,
    TitleA,
    ContentA,
    CategoriesA,
    Category,
  },
  data: () => ({
    blogs: Array
  }),
  async created() {
    this.blogs = await ApiService.getPosts()
    console.log(this.blogs)
  },
  methods: {
    go(id) {
      window.open(`https://${process.env.VUE_APP_BLOG}/posts/${id}`, "_blank")
    }

  },
  computed: {
    blogsFilter() {
      if (typeof this.blogs[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('blog')
        let deepCopy;
        switch (position) {
          case 0:
            return this.blogs
          case 1:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blog) => {
              delete blog.categories
              return blog
            }).slice(0,2)
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blog) => {
              delete blog.content
              delete blog.categories

              return blog
            })
          case 3:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blog) => {
              delete blog.content
              delete blog.categories
              delete blog.title
              return blog
            })
          case 4:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blog) => {
              delete blog.content
              delete blog.categories
              delete blog.title
              return blog
            })
        }
        return []
      } else {
        return []
      }
    }
  }
}

</script>

