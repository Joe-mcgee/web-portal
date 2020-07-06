<template >
  <div class="home">
    <styled-img></styled-img>
  </div>
</template>

<script>
import styled from 'vue-styled-components'

const StyledImg = styled.img`
background-image: url(${require('@/assets/mercury-cat.png')});
background-size: cover;
grid-column: 1 / -1;
grid-row: 1 / -1;
width: 100%;
height: 100%;
`

export default {
  name: 'Home',
  components: {
    StyledImg,
  },
  props: {
    nestData: Object
  },
  data: () => ({
  }),
}
</script>
