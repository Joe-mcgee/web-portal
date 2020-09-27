<template>
  <Wrapper>
      <external @click="go(external)"/>
      <git @click="go(github)"/>
  </Wrapper>
</template>
<script>
import styled from 'vue-styled-components'
import Github from 'vue-material-design-icons/Github.vue'
import OpenInNew from 'vue-material-design-icons/OpenInNew.vue'
function getBasePropTypes() {
  return {
    mouseOver: Boolean
  }
}
let Wrapper = styled('div', getBasePropTypes())`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  border-radius: %5;
  overflow: hidden;
  justify-content: center;
  align-content: center;

`
let External = styled(OpenInNew, getBasePropTypes())`
  margin: auto auto;
  grid-column: 1/1;
  grid-row: 1/1;
  display: flex; 
  justify-content: center;
  align-content: center;
  
`
let Git = styled(Github, getBasePropTypes())`

  margin: auto auto;
  grid-column: 2/2;
  grid-row: 1/1;
  max-height: 100%;
`

export default {
  props: {
    external: String,
    github: String,
    nestData: Object,
  },
  components: {
    Wrapper,
    Git,
    External,
  },
  data: () => ({hover: false}),
  async created() {},
  methods: {
    go(url) {
      window.open(url, "_blank")
    }
  },

}
</script>
