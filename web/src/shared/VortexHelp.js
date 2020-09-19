import * as GoldenNest from '@/shared/GoldenNest' 
import styled from 'vue-styled-components'
export function getBasePropTypes() {
  return {
    areas: Array,
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
export function mapAreaToRow(priority) {
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

export function mapAreaToColumn(priority) {
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

function getArea(position) {
  let i = 1
  let area_t0 = 1
  let area_t1 = 1
  while(i <= position ){ 
    let diff = area_t1 - area_t0
    area_t1 += diff
    i++
  }
  return area_t1
}

export function create(type, component) {
  component = component ? component : 'div'
  return styled(component, getBasePropTypes())`
    background-image: url(${(props) => {
      switch (props.areas ? props.areas.indexOf(type) : 0) {
        case 0:
          return require(`@/assets/${type}-big.jpeg`)
        case 1:
          if (type === 'projects') {
            return require(`@/assets/${type}-large.gif`)
          }
          return require(`@/assets/${type}-large.jpeg`)

      }
      //return require(`@/assets/square.jpeg`)
      
    }});
    background-size: contain;
    display: grid;
    width: 100%;
    grid-template-rows: repeat(${(props) => {
      let position = props.areas ? props.areas.indexOf(type) : 1
      return getArea(position)

    }}, ${(props)=> {
      if (typeof props.nestData === 'undefined') {
        let baseProps = getBaseProps()
        return baseProps.squareEdge
      }
      return props.nestData !== '' ? props.nestData.squareEdge: getBaseProps().squareEdge
    }
    }px);
    grid-template-columns: repeat(${(props) => { 
      let position = props.areas ? props.areas.indexOf(type) : 1
      return getArea(position)
    }}, ${(props) => {
      if (typeof props.nestData === 'undefined') {
        let baseProps = getBaseProps()
        return baseProps.squareEdge
      }
      return props.nestData !== '' ? props.nestData.squareEdge: getBaseProps().squareEdge
    }
    }px);
    height: 100%;
    border: 2px solid;
    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);
    border-image-slice: 1;
    grid-row: ${(props) => {
      const area = props.areas ? props.areas.indexOf(type) : 0
      return mapAreaToRow(area)

    }
    };
    grid-column: ${(props) => {
      const area = props.areas ? props.areas.indexOf(type) : 0
      return mapAreaToColumn(area) 
    }
    };
  `
}

export function iconCenter(div) {
  return styled(div)`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  justify-content: center;
  align-content: center;
`

}
