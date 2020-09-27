<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
    <mini-title
      v-bind:nestData=nestData
      >Projects</mini-title>
    <logo-a
      @click="go(project.site)"
      :areas=areas
      v-for="(project, i) in projectsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="project.logo.url">
    </logo-a>

    <title-a
      @click="go(project.site)"
      v-bind:nestData=nestData
      :areas=areas
      v-for="(project, j) in projectsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="project.site">
      {{project.title | truncate(areas.indexOf('projects'), '...')}}
    </title-a>
    <links-a
      v-bind:nestData=nestData
      v-for="(project, k) in projectsFilter"
      :key="k +'link'"
      :iterator=k
      :areas=areas>
    </links-a>
    <categories-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(project, k) in projectsFilter"
      :key="k + 'categories'"
      :iterator="k">
      <category
        v-bind:nestData=nestData
        v-for="(category,l) in project.categories"
        :key="l +'category'"
        :logo="category.logo.url"
        :count="category.count"
        >
      </category>
    </categories-a>
    <content-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(project, k) in projectsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{project.content | truncate(areas.indexOf('projects'), '...')}}
    </content-a>
  </div>
</template>
<script>
import styled from 'vue-styled-components'
import Flask from 'vue-material-design-icons/Flask.vue'
import * as ApiService from '@/shared/ApiService.js'

import * as ListItems from '@/components/ListItems.js'
import CategoryChit from '@/components/CategoryChit.vue'
import LinkChit from '@/components/LinkChit.vue'

const FlaskGrid = ListItems.iconCenter(Flask)
const MiniTitle = ListItems.miniTitle()
const LogoA = ListItems.createLogo('projects')
const TitleA = ListItems.createTitle('projects')
const ContentA = ListItems.createContent('projects')
const CategoriesA = ListItems.createCategories('projects')
const Category = ListItems.createCategory(CategoryChit, 'projects')
const LinksA = ListItems.createLinks(LinkChit, 'projects')
export default {
  name: 'Projects',
  props: {
    areas: Array,
    nestData: Object
  },
  components: {
    FlaskGrid,
    MiniTitle,
    LogoA,
    TitleA,
    ContentA,
    CategoriesA,
    LinksA,
    Category
  },
  data: () => ({
    projects: Array,
  }),
  async created() {
    this.projects = await ApiService.getProjects()
  },
  methods: {
    go(url) {
      window.open(url, "_blank")
    }

  },
  computed: {
    projectsFilter() {
      if (typeof this.projects[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('projects')
        let deepCopy;
        switch (position) {
          case 0:
            return this.projects
          case 1:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((project) => {
              delete project.categories
              return project
            }).slice(0,2)
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((project) => {
              delete project.content
              delete project.categories

              return project
            })
          case 3:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((project) => {
              delete project.content
              delete project.categories
              delete project.title
              return project
            })
          case 4:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((project) => {
              delete project.content
              delete project.title
              delete project.categories
              return project
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

