<template>
  <div>
    <typewriter-grid fillColor="#003bff"></typewriter-grid>
    <mini-title
      v-bind:nestData=nestData
      >Blog</mini-title>
    <logo-a
      
      @click="go(blog.site)"
      :areas=areas
      v-for="(blog, i) in blogsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="blog.logo.url">
      {{blog.site}}
    </logo-a>

    <title-a
      @click="go(blog.site)"
      v-bind:nestData=nestData
      :areas=areas
      v-for="(blog, j) in blogsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="blog.site">
      {{blog.title}}
    </title-a>

    <content-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(blog, k) in blogsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{blog.content}}
    </content-a>
  </div>
</template>
<script>
import Typewriter from 'vue-material-design-icons/Typewriter.vue'

import * as ListItems from '@/components/ListItems.js'
import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components'

let MiniTitle = ListItems.miniTitle()
let TypewriterGrid = ListItems.iconCenter(Typewriter)
const LogoA = ListItems.createLogo('blog')
const TitleA = ListItems.createTitle('blog')
const ContentA = ListItems.createContent('blog')
const CategoriesA = ListItems.createCategories('blog')

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
    CategoriesA
  },
  data: () => ({
    blogs: Array
  }),
  async created() {
    this.blogs = await ApiService.getPosts()
  },
  methods: {
    go(url) {
      window.open(url, "_blank")
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
            return this.blogs.filter((blog, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blog) => {
              delete blog.content

              return blog
            })
          case 3:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blogs) => {
              delete blogs.content
              delete blogs.title
              return blogs
            })
          case 4:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blogs) => {
              delete blogs.content
              delete blogs.title
              return blogs
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

