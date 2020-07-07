import styled from 'vue-styled-components'
import Home from '@/views/Home.vue'
import * as GoldenNest from '@/shared/GoldenNest' 
export function getBasePropTypes() {
  return { 
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
}

export function getBaseProps() {
  return GoldenNest.nestGrid(window)
  
}

export let StyledBaseGrid = styled(Home, getBasePropTypes())`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(13, ${(props) => props.nestData.squareEdge}px);
  grid-template-columns: repeat(21, ${props => props.nestData.squareEdge}px);
`

export function styledBaseGridGeneric() {
  return styled('div', getBasePropTypes())` 
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(13, ${(props)=> {
      console.log(props.nestData == '')
      console.log(getBaseProps().squareEdge)
      return props.nestData !== '' ? props.squareEdge: getBaseProps().squareEdge
    }
    }px);
    grid-template-columns: repeat(21, ${(props) => {
      return props.nestData !== '' ? props.nestData.squareEdge: getBaseProps().squareEdge
    }
    }px);
  `
}

