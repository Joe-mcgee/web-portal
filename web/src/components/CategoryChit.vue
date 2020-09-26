<template>
  <Wrapper :mouseOver="hover"
    @mouseover="hover = true"
    @mouseleave="hover = false">
    {{count}} {{title}}
  </Wrapper>
</template>
<script>
import styled from 'vue-styled-components'

function getBasePropTypes() {
  return {
    count: Number,
    title: String,
    mouseOver: Boolean
  }
}
let Wrapper = styled('div', getBasePropTypes())`
  display: grid;
  height:80%;
  width: 95%;
  background-color: ${(props) => {
    return props.mouseOver ? "#ffc400": '#003BFF'
  }};
  border-radius: 5%;
  justify-content: center;
  align-content: center;
`
let Count = styled('div', getBasePropTypes())`
  height: 100%;
  background-color: #001B74;
`
let TitleDiv = styled('div', getBasePropTypes())`
  width: 61.8%;
`

export default {
  props: {
    count: Number,
    title: String,
  },
  components: {
    Wrapper,
    Count,
    TitleDiv,
  },
  data: () => ({hover: false}),
  async created() {},
  methods: {
  },

}
</script>
