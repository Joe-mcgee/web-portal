<template >
  <div class="home">
    <styled-opening-carousel :page=currentPage></styled-opening-carousel>
    <styled-base-grid-generic nestData></styled-base-grid-generic>
  </div>
</template>

<script>
import styled from 'vue-styled-components'
import * as BaseGrid from '../components/BaseGrid.js'
let StyledBaseGridGeneric = BaseGrid.styledBaseGridGeneric()

const carouselProps = {
  page: String,

}
const StyledOpeningCarousel = styled('img', carouselProps)`
background-image: url(${ props => props.page}); 
background-size: cover;
grid-column: 1 / -1;
grid-row: 1 / -1;
width: 100%;
height: 100%;
`

export default {
  name: 'Home',
  components: {
    StyledOpeningCarousel,
    StyledBaseGridGeneric,
  },
  props: {
    nestData: Object
  },
  data: () => ({
    currentPage: require('@/assets/opening-gif.gif')
  }),
  created() {
    
  },
}
</script>
