<template>
  <div>
    <information-variant-grid fillColor="#003bff"></information-variant-grid>
    <mini-title
      v-bind:nestData=nestData
      >
      About</mini-title>
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
      {{about.content | truncate(areas.indexOf('about'), '...')}}
    </content-a>
    <!--<categories-a v-if="abouts" :about="abouts[0]"></categories-a> -->   
  </div>
</template>
<script>

import * as ListItems from '@/components/ListItems.js'
import styled from 'vue-styled-components'
import * as ApiService from '@/shared/ApiService.js'
import InformationVariant from 'vue-material-design-icons/InformationVariant.vue'

const LogoA = ListItems.createLogo('about')
const TitleA = ListItems.createTitle('about')
const ContentA = ListItems.createContent('about')
const CategoriesA = ListItems.createCategories('about')
let MiniTitle = ListItems.miniTitle()
let InformationVariantGrid = ListItems.iconCenter(InformationVariant)
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
  },
  computed: {
    aboutsFilter() {
      if (typeof this.abouts[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('about')
        let deepCopy;
        switch (position) {
          case 0:
            return this.abouts
          case 1:
            return this.abouts.filter((about, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.abouts))
            return deepCopy.map((about) => {
              delete about.content

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

