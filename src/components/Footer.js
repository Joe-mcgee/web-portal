import styled from 'vue-styled-components'
import * as GoldenNest from '@/shared/GoldenNest' 
export function getBasePropTypes() {
  return {
    url: String,
    nestData: {
      a: Number,
      b: Number,
      height: Number,
      squareEdge: Number,
      width: Number
    }   
  }
}

export function getBaseProps() {
  return GoldenNest.nestGrid(window)
  
}


export function createFooter(tag) {
  return styled(tag, getBasePropTypes())`
    display: grid;
    width: 100%;
    height: 100%;
    border-top: 5px solid #ffc400;
    grid-row: 28/29;
    grid-column: -1 / 1;
  `
}

