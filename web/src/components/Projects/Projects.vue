<template>
  <div>
    <flask-grid fillColor="#003bff"></flask-grid>
    <mini-title>Projects</mini-title>
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
import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'
import * as ProjectListComponent from './ProjectList.js'

let FlaskGrid = iconCenter(Flask)
let MiniTitle = miniTitle()

function getBasePropTypes() {
  return {
    nestData: {
      width: Number,
      height: Number,
      isPortrait: Boolean
    },
    areas: Array,
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
    console.log(props.areas.indexOf('projects'))
    let position = props.areas ? props.areas.indexOf('projects') : 1
    if (position <  2) {
      return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
    }
    return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
  }};
  grid-column: ${(props) => {
    
    let position = props.areas ? props.areas.indexOf('projects') : 1
    
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

    let position = props.areas ? props.areas.indexOf('projects') : 1
    if (position < 2) {

      return props.iterator ? `${2+(props.iterator+1)}/${2+(1+props.iterator)}` : '2'
    }

      return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
  }};
  display: grid;
  align-content: center;
  grid-column: ${(props) => {

  let position = props.areas ? props.areas.indexOf('projects') : 1
  if (position < 2) return '3/-1'; else return '2/-1'
  }
  };
  font-size: ${(props) => {
    console.log(props)
    let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
    let adjustFont = `${3 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }}
`

let ContentA = styled('p', getBasePropTypes())`
  grid-row: ${(props) => {

    return props.iterator ? `${3+(props.iterator+1)}/${3+(1+props.iterator)}` : '3'
  }};
  grid-column: 3/-1;
  display: grid;
  align-content: center;
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
    let adjustFont = `${2 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }}
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
  filters: {
      truncate: function (text, position, suffix) {
        let length;
        switch (position) {
          case 0:
            length = 50
            break
          case 1:
            length = 39
            break
          case 2:
            length = 11
            break
          case (position > 2):
            length = 0
            break
        }
        if (typeof text === "undefined") text = ''
        if (text.length > length) {
            return text.substring(0, length) + suffix;
        } else {
            return text;
        }
      },
  },
  computed: {
    projectsFilter() {
      if (typeof this.projects[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('projects')
        let deepCopy;
        switch (position) {
          case 0:
            console.log('0', this.projects)
            return this.projects
          case 1:
            return this.projects.filter((project, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.projects))
            return deepCopy.map((project) => {
              delete project.content

              console.log(project)
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

