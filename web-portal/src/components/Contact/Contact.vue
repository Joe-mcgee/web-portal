<template>
  <div>
    <human-greeting-proximity-grid fillColor="#003bff"></human-greeting-proximity-grid>
    <mini-title
      v-bind:nestData=nestData
      >Contact</mini-title>
    <logo-a
      @click="go(contact.site)"
      :areas=areas
      v-for="(contact, i) in contactsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="contact.logo.url">
      {{contact.site}}
    </logo-a>

    <title-a
      @click="go(contact.site)"
      v-bind:nestData=nestData
      :areas=areas
      v-for="(contact, j) in contactsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="contact.site">
      {{contact.title | truncate(areas.indexOf('contact'), '...')}}
    </title-a>

    <content-a
      v-bind:nestData=nestData
      :areas=areas
      v-for="(contact, k) in contactsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{contact.content | truncate(areas.indexOf('contact'), '...')}}
    </content-a> </div> 
</template>
<script>
import HumanGreetingProximity from 'vue-material-design-icons/HumanGreetingProximity.vue'

import * as ListItems from '@/components/ListItems.js'
import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components'

let MiniTitle = ListItems.miniTitle()
let HumanGreetingProximityGrid = ListItems.iconCenter(HumanGreetingProximity)

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

const LogoA = ListItems.createLogo('contact')
const TitleA = ListItems.createTitle('contact')
const ContentA = ListItems.createContent('contact')
const CategoriesA = ListItems.createCategories('contact')

export default {
  name: 'Contact',
  props: {
    areas: Array,
    nestData: Object
  },
  components: {
    HumanGreetingProximityGrid,
    MiniTitle,
    LogoA,
    TitleA,
    ContentA,
    CategoriesA
  },
  data: () => ({
    contacts: Array
  }),
  async created() {
    this.contacts = await ApiService.getContacts()
  },
  methods: {
    go(url) {
      window.open(url, "_blank")
    }

  },
  computed: {

    contactsFilter() {
      if (typeof this.contacts[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('contact')
        let deepCopy;
        switch (position) {
          case 0:
            return this.contacts
          case 1:
            return this.contacts.filter((contact, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.contacts))
            return deepCopy.map((contact) => {
              delete contact.content
              return contact
            })
          case 3:
            deepCopy = JSON.parse(JSON.stringify(this.contacts))
            return deepCopy.map((contact) => {
              delete contact.content
              delete contact.title
              return contact
            })
          case 4:
            deepCopy = JSON.parse(JSON.stringify(this.contacts))
            return deepCopy.map((contact) => {
              delete contact.content
              delete contact.title
              return contact
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

