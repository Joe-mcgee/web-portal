<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
    <mini-title>Projects</mini-title>
    <logo-a
      v-for="(project, i) in projectsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="projects[i].logo.url">
      {{projects[i].site}}
    </logo-a>

    <title-a
      v-for="(project, j) in projectsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="projects[j].site">
      {{projects[j].name}}
    </title-a>

    <content-a
      v-for="(project, k) in projectsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{projects[k].content}}
    </content-a>
    <!--<categories-a v-if="projects" :project="projects[0]"></categories-a> -->   
  </div>
</template>
<script>
import styled from 'vue-styled-components'
import * as ProjectService from '@/shared/ProjectService.js'
import Flask from 'vue-material-design-icons/Flask.vue'
import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'
import * as ProjectListComponent from './ProjectList.js'

let FlaskGrid = iconCenter(Flask)
let MiniTitle = miniTitle()

function getBasePropTypes() {
  return {
    iterator: Number,
    categories: Array,
    content: String,
    github: String,
    logo: {
      url: String
    },
    site: String,
    name: String

  }
}  
let LogoA = styled('img', getBasePropTypes())`
  grid-row: ${(props) => {

    return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
  }};
  grid-column: 1/3;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
let TitleA = styled('h2', getBasePropTypes())`
  
  grid-row: ${(props) => {

    return props.iterator ? `${2+(props.iterator+1)}/${2+(1+props.iterator)}` : '2'
  }};
  display: grid;
  grid-column: 3/-1;
  justify-content: center;
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
        switch (position) {
          case 0:
            return this.projects
          case 1:
            return this.projects.slice(0,2)
        }
        return []
      } else {
        return []
      }
    }
  }
}

</script>

