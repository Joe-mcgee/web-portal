<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
    <mini-title
      v-bind:nestData=nestData
      >Projects</mini-title>
    <logo-a
      :areas=areas
      v-for="(project, i) in projectsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="project.logo.url">
      {{project.site}}
    </logo-a>

    <title-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(project, j) in projectsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="project.site">
      {{project.title | truncate(areas.indexOf('projects'), '...')}}
    </title-a>

    <content-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(project, k) in projectsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{project.content | truncate(areas.indexOf('projects'), '...')}}
    </content-a>
    <!--<categories-a v-if="projects" :project="projects[0]"></categories-a> -->   
  </div>
</template>
<script>
import styled from 'vue-styled-components'
import * as ProjectService from '@/shared/ProjectService.js'
import Flask from 'vue-material-design-icons/Flask.vue'
import * as ListItems from '@/components/ListItems.js'

const FlaskGrid = ListItems.iconCenter(Flask)
const MiniTitle = ListItems.miniTitle()
const LogoA = ListItems.createLogo('projects')
const TitleA = ListItems.createTitle('projects')
const ContentA = ListItems.createContent('projects')
const CategoriesA = ListItems.createCategories('projects')

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
    CategoriesA
  },
  data: () => ({
    projects: Array,
  }),
  async created() {
    this.projects = await ProjectService.getProjects()
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
            return this.projects.filter((project, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((project) => {
              delete project.content

              return project
            })
          case 3:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((projects) => {
              delete projects.content
              delete projects.title
              return projects
            })
          case 4:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((projects) => {
              delete projects.content
              delete projects.title
              return projects
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

