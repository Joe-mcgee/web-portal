import styled from 'vue-styled-components'
import Home from '@/views/Home.vue'
const baseGridProps = {
  nestData: {
    //aPlusB: Number,
  a: Number,
  b: Number,
  height: Number,
    //isPortrait: Boolean,
  squareEdge: Number,
  width: Number
  }
}

const StyledBaseGrid = styled(Home, baseGridProps)`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(${
    props => props.nestData.isPortrait ? '21' : '13' 
  }, ${(props) => props.nestData.squareEdge}px);

  grid-template-columns: repeat(${
    props => props.nestData.isPortrait ? '13' : '21' 
  }, ${props => props.nestData.squareEdge}px);
`
export default StyledBaseGrid
