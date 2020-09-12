import styled from 'vue-styled-components'
import * as GoldenNest from '@/shared/GoldenNest' 
export function getBasePropTypes() {
  return {
    nestData: {
      a: Number,
      b: Number,
      height: Number,
      squareEdge: Number,
      width: Number
    },
  }
}

export function getBaseProps() {
  return GoldenNest.nestGrid(window)
  
}


export function createDiv(tag) {
  return styled(tag, getBasePropTypes())`
    display: grid;
    width: 100%;
    height: 100%;
    border: 3px green solid;
    grid-row: 23;
    grid-column:16;
  `
}

