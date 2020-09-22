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
  return GoldenNest.getProps(window)
  
}


export function createFooter(tag) {
  return styled(tag, getBasePropTypes())`
    display: grid;
    width: 100%;
    height: 100%;
    border-top: 3px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);
    grid-row: 14/15;
    grid-column: -1 / 1;
  `
}

