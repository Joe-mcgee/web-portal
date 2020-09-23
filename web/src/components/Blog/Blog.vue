<template>
  <div>
    <typewriter-grid fillColor="#003bff"></typewriter-grid>
    <mini-title>Blog</mini-title>
    <logo-a
      :areas=areas
      v-for="(blog, i) in blogsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="blog.logo.url">
      {{blog.site}}
    </logo-a>

    <title-a
      :areas=areas
      v-for="(blog, j) in blogsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="blog.site">
      {{blog.title}}
    </title-a>

    <content-a
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

import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components'
import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let TypewriterGrid = iconCenter(Typewriter)

function getBasePropTypes() {
  return {
    areas: Array,
    iterator: Number,
    categories: Array,
    content: String,
    github: String,
    logo: {
      url: String
    },
    site: String,
    title: String

  }
}  
let LogoA = styled('img', getBasePropTypes())`
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf('blog') : 1
    if (position <  2) {
      return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
    }
    return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
  }};
  grid-column: ${(props) => {
    
    let position = props.areas ? props.areas.indexOf('blog') : 1
    
    if (position <  2) {
      return '1/3'
    }
    return '1/2'
  }};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
let TitleA = styled('h2', getBasePropTypes())`
  
  grid-row: ${(props) => {

    let position = props.areas ? props.areas.indexOf('blog') : 1
    if (position < 2) {

      return props.iterator ? `${2+(props.iterator+1)}/${2+(1+props.iterator)}` : '2'
    }

      return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
  }};
  display: grid;
  grid-column: ${(props) => {

  let position = props.areas ? props.areas.indexOf('blog') : 1
  if (position < 2) return '3/-1'; else return '2/-1'
  }
  };
  justdify-content: center;
  align-content: center;
`

let ContentA = styled('p', getBasePropTypes())`
  grid-row: ${(props) => {

    return props.iterator ? `${3+(props.iterator+1)}/${3+(1+props.iterator)}` : '3'
  }};
  grid-column: 3/-1;
`

let CategoriesA = styled('h2', getBasePropTypes())`
  grid-row: -4/-2;
  grid-column: -1/-2;
`
export default {
  title: 'Blog',
  props: {
    areas: Array,
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
    console.log(this.blogs)
  },
  computed: {
    blogsFilter() {
      if (typeof this.blogs[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('blog')
        let deepCopy;
        switch (position) {
          case 0:
            console.log('0', this.blogs)
            return this.blogs
          case 1:
            return this.blogs.filter((blog, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.blogs))
            return deepCopy.map((blog) => {
              delete blog.content

              console.log(blog)
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

