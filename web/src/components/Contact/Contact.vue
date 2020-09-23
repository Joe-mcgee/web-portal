<template>
  <div>
    <human-greeting-proximity-grid fillColor="#003bff"></human-greeting-proximity-grid>
    <mini-title>Contact</mini-title>
    <logo-a
      :areas=areas
      v-for="(contact, i) in contactsFilter"
      :key="i + 'logo'"
      :iterator="i"
      :src="contact.logo.url">
      {{contact.site}}
    </logo-a>

    <title-a
      :areas=areas
      v-for="(contact, j) in contactsFilter"
      :key="j + 'title'"
      :iterator="j"
      :href="contact.site">
      {{contact.title}}
    </title-a>

    <content-a
      :areas=areas
      v-for="(contact, k) in contactsFilter"
      :key="k + 'content'"
      :iterator="k">
      {{contact.content}}
    </content-a> </div> 
</template>
<script>
import HumanGreetingProximity from 'vue-material-design-icons/HumanGreetingProximity.vue'

import * as ApiService from '@/shared/ApiService.js'
import styled from 'vue-styled-components'
import {
  iconCenter,
  miniTitle,
  } from '@/shared/VortexHelp'

let MiniTitle = miniTitle()
let HumanGreetingProximityGrid = iconCenter(HumanGreetingProximity)

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
    let position = props.areas ? props.areas.indexOf('contact') : 1
    switch (position) {
      case 0:
        return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
      case 1:
        return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
      case 2:
        return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
      case 3:
        return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
      case 4:
        return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
    }
  }};
  grid-column: ${(props) => {
    
    let position = props.areas ? props.areas.indexOf('contact') : 1
    
    switch (position) {
      case 0:
      return '1/3'
      case 1:
      return '1/3'
      case 2:
        return '1/2'
      case 3:
        return '1/2'
      case 4:
        return '1/2'
    }
  }};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`
let TitleA = styled('h2', getBasePropTypes())`
  
  grid-row: ${(props) => {

    let position = props.areas ? props.areas.indexOf('contact') : 1
    switch (position) {
      case 0:
        return props.iterator ? `${2+(props.iterator+1)}/${2+(1+props.iterator)}` : '2'
      case 1:
        return props.iterator ? `${2+(props.iterator+1)}/${2+(1+props.iterator)}` : '2'
      case 2:
        return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
      case 3:
        return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
      case 4:
        return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
    }
  }};
  display: grid;
  grid-column: ${(props) => {

    let position = props.areas ? props.areas.indexOf('contact') : 1
    switch (position) {
      case 0:
        return '3/-1'
      case 1:
        return '3/-1'
      case 2:
        return '2/-1'
      case 3:
        return '2/-1'
      case 4:
        return '2/-1'
    }
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
  name: 'Contact',
  props: {
    areas: Array,
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
    console.log('hmm',this.contacts)
  },
  computed: {

    contactsFilter() {
      if (typeof this.contacts[0] !== 'undefined') {
        let position = this.$props.areas.indexOf('contact')
        let deepCopy;
        switch (position) {
          case 0:
            console.log('0', this.contacts)
            return this.contacts
          case 1:
            return this.contacts.filter((contact, i) => {
                return i < 2

            })
          case 2:
            deepCopy = JSON.parse(JSON.stringify(this.contacts))
            return deepCopy.map((contact) => {
              delete contact.content

              console.log(contact)
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

