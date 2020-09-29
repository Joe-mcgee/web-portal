<template>
  <Wrapper :mouseOver="hover"
    @mouseover="hover = true"
    @mouseleave="hover = false">
      <count v-bind:nestData="nestData">{{count}}</count>
      <logo :src="logo"/>
  </Wrapper>
</template>
<script>
import styled from 'vue-styled-components'
import {createCount} from '@/components/ListItems.js'
function getBasePropTypes() {
  return {
    count: Number,
    logo: String,
    mouseOver: Boolean
  }
}
let Wrapper = styled('div', getBasePropTypes())`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: ${(props) => {
    return props.mouseOver ? "#ffc400": '#003BFF'
  }};
  border-radius: %5;
  overflow: hidden;
`
let CountDiv = createCount()
let Count = styled(CountDiv, getBasePropTypes())`
  max-height: 100%;

`
let Logo = styled('img', getBasePropTypes())`
  grid-column: 2/2;
  grid-row: 1/1;
  max-height: 100%;
`

export default {
  props: {
    count: Number,
    logo: String,
    nestData: Object,
  },
  components: {
    Wrapper,
    Count,
    Logo,
  },
  data: () => ({hover: false}),
  async created() {},
  methods: {
  },

}
</script>
