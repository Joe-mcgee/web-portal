<template>
  <div>
    <information-variant-grid fillColor="#003bff"></information-variant-grid>
    <mini-title>About</mini-title>

    <logo-a
      :areas=areas
      v-for="(about, i) in aboutsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="about.logo.url">
      {{about.site}}
    </logo-a>

    <title-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(about, j) in aboutsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="about.site">
      {{about.title | truncate(areas.indexOf('about'), '...')}}
    </title-a>

    <content-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(about, k) in aboutsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{about.content}}
    </content-a>
    <!--<categories-a v-if="abouts" :about="abouts[0]"></categories-a> -->   
  </div>
</template>
<script>

import styled from 'vue-styled-components'
import * as ApiService from '@/shared/ApiService.js'

function getBasePropTypes() {
  return {
    nestData: {
      width: Number,
      height: Number,
      isPortrait: Boolean,
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
    title: String

  }
}  
let LogoA = styled('img', getBasePropTypes())`
  grid-row: ${(props) => {
    console.log(props.areas.indexOf('about'))
    let position = props.areas ? props.areas.indexOf('about') : 1
    if (position <  2) {
      return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
    }
    return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
  }};
  grid-column: ${(props) => {
    
    let position = props.areas ? props.areas.indexOf('about') : 1
    
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
  
  display: grid;
  grid-row: ${(props) => {

    let position = props.areas ? props.areas.indexOf('about') : 1
    if (position < 2) {

      return props.iterator ? `${2*(props.iterator+1)}` : '2'
      //return props.iterator ? `${2+(props.iterator+1)}/${2+(1+props.iterator)}` : '2'
    }

      return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
  }};
  grid-column: ${(props) => {

  let position = props.areas ? props.areas.indexOf('about') : 1
  if (position < 2) return '3/-1'; else return '2/-1'
  }
  };
  align-content: center;
  overflow: hidden;
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
    let adjustFont = `${3 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }}
`

let ContentA = styled('p', getBasePropTypes())`
  grid-row: ${(props) => {

    return props.iterator ? `${2*(props.iterator+1)+1}` : '3'
  }};
  grid-column: 3/-1;
  align-content: center;
  display: grid;
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? (props.nestData.height - props.nestData.width): props.nestData.width - props.nestData.height
    let adjustFont = `${2 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }}
`


let CategoriesA = styled('h2', getBasePropTypes())`
  grid-row: -4/-2;
  grid-column: -1/-2;
`
import InformationVariant from 'vue-material-design-icons/InformationVariant.vue'

import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let InformationVariantGrid = iconCenter(InformationVariant)
export default {
  name: 'About',
  props: {
    areas: Array,
    nestData: Object,
  },
  components: {
    InformationVariantGrid,
    MiniTitle,
    LogoA,
    TitleA,
    ContentA,
    CategoriesA
  },
  data: () => ({
    abouts: Array,
  }),
  async created() {
    this.abouts = await ApiService.getAbouts()
    console.log('abouts', this.abouts)
  },
  filters: {
      truncate: function (text, position, suffix) {
        let length;
        switch (position) {
          case 0:
            length = 50
            break
          case 1:
            length = 21
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
    aboutsFilter() {
      if (typeof this.abouts[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('about')
        let deepCopy;
        switch (position) {
          case 0:
            console.log('0', this.abouts)
            return this.abouts
          case 1:
            return this.abouts.filter((about, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.abouts))
            return deepCopy.map((about) => {
              delete about.content

              console.log(about)
              return about
            })
          case 3:
            deepCopy = JSON.parse(JSON.stringify(this.abouts))
            return deepCopy.map((abouts) => {
              delete abouts.content
              delete abouts.title
              return abouts
            })
          case 4:
            deepCopy = JSON.parse(JSON.stringify(this.abouts))
            return deepCopy.map((abouts) => {
              delete abouts.content
              delete abouts.title
              return abouts
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

