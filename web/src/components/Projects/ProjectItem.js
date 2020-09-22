import styled from 'vue-styled-components'
import * as GoldenNest from '@/shared/GoldenNest' 
export function getBasePropTypes() {
  return {
    categories: Array,
    content: String,
    github: String,
    logo: {
      url: String
    },
    site: String,
    name: String

  }
}  

export function getBaseProps() {
  return GoldenNest.getProps(window)
  
}


export function create(tag, position) {
  
  let Logo = styled('img', getBasePropTypes())`
    grid-row: ${2+position*2}/${4+ position*2};
    grid-column: 1/2;
  `
  let Title = styled('div', getBasePropTypes())`
  
  `
  return styled(tag, getBasePropTypes())`
    display: grid;
    width: 100%;
    grid-template-rows: repeat(${(props) => {
      
    }}, ${(props)=> {
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
    height: 100%;
    border: 2px solid #ffc400;
    grid-row: 23;
    grid-column:16;
  `
}

