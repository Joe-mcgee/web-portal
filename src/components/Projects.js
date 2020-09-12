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
    areas: Array
  }
}

export function getBaseProps() {
  return GoldenNest.nestGrid(window)
  
}

function mapAreaToRow(priority) {
  switch (priority) {
    case 0:
      return '14/27';
    case 1:
      return '14/22';
    case 2:
      return '22/27';
    case 3:
      return '24/27';
    case 4:
      return '22/24';
    case 5:
      return '22/23';
  }
}

function mapAreaToColumn(priority) {
  switch (priority) {
    case 0:
      return '1/14';
    case 1:
      return '14/-1';
    case 2:
      return '17/-1';
    case 3:
      return '14/17';
    case 4:
      return '14/16';
    case 5:
      return '16/17';
  }
}
export function createDiv(tag) {
  return styled(tag, getBasePropTypes())`
    background-image: url(${(props) => {
      switch (props.areas ? props.areas.indexOf('projects') : 1) {
        case 0:
          return require('@/assets/About-big.jpeg')
        case 1:
          return require('@/assets/About-large.jpeg')
        case 2:
          return require('@/assets/About-big.jpeg')
        case 3:
          return require('@/assets/About-large.jpeg')
        case 4:
          return require('@/assets/About-big.jpeg')
        case 5:
            return require('@/assets/About-large.jpeg')
      }
    }});
    background-size: contain;
    display: grid;
    width: 100%;
    height: 100%;
    border: 5px red solid;
    grid-row: ${(props) => {
      if (typeof props.nestData === 'undefined') {
        props.nestData = getBaseProps()
      }
      const area = props.areas ? props.areas.indexOf('projects') : 1
      return mapAreaToRow(area)

    }
    };
    grid-column: ${(props) => {
      if (typeof props.nestData === 'undefined') {
        props.nestData = getBaseProps()
      }

      const area = props.areas ? props.areas.indexOf('projects') : 1
      return mapAreaToColumn(area) 
    }
    };
  `
}

