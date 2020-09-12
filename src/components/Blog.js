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
    volume: Number
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
    grid-row: ${(props) => {
      if (typeof props.nestData === 'undefined') {
        props.nestData = getBaseProps()
      }
      const volume = props.volume ? props.volume 
    }
    };
    grid-column: ${(props) => {
      if (typeof props.nestData === 'undefined') {
        props.nestData = getBaseProps()
      }
      const x = props.mouseX ? props.mouseX : 1;
      const column = Math.floor(x / props.nestData.squareEdge)
      return `${column+1}/${column+2}`
      
    }
    };
  `
}

