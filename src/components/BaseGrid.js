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


export function createBaseGrid(tag) {
  return styled(tag, getBasePropTypes())`
    background-image: url(${ (props) => {
      return props.url ? props.url : require('@/assets/test-block.png')
    }
    });
    background-size: cover;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(39, ${(props)=> {
      if (typeof props.nestData === 'undefined') {
        let baseProps = getBaseProps()
        return baseProps.squareEdge
      }
      return props.nestData !== '' ? props.nestData.squareEdge: getBaseProps().squareEdge
    }
    }px);
    grid-template-columns: repeat(21, ${(props) => {
      if (typeof props.nestData === 'undefined') {
        let baseProps = getBaseProps()
        return baseProps.squareEdge
      }
      return props.nestData !== '' ? props.nestData.squareEdge: getBaseProps().squareEdge
    }
    }px);
  `
}

