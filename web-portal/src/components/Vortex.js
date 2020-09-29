import styled from 'vue-styled-components'
import * as GoldenNest from '@/shared/GoldenNest' 
export function getBasePropTypes() {
  return {
    nestData: {
      a: Number,
      b: Number,
      height: Number,
      squareEdge: Number,
      isPortrait: Number,
      width: Number
    },
  }
}

export function getBaseProps() {
  return GoldenNest.getProps(window)
  
}


export function createDiv(tag) {
  return styled(tag, getBasePropTypes())`
    background-image: url(${(props) => {
      return require('@/assets/vortex.gif')
    }});
    background-size: contain;
    display: grid;
    width: 100%;
    height: 100%;
    border: 2px solid #ffc400;
    grid-row: ${(props) => {
    return props.nestData.isPortrait ? 16 : 10
    }};
    grid-column:${(props) => {
    return props.nestData.isPortrait ? 10 : 16
    }};
  `
}

