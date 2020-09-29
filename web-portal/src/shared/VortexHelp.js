import * as GoldenNest from '@/shared/GoldenNest' 
import styled from 'vue-styled-components'
export function getBasePropTypes() {
  return {
    areas: Array,
    nestData: { 
      a: Number,
      b: Number,
      height: Number,
      isPortrait: Boolean,
      squareEdge: Number,
      width: Number

    }
  }
}


export function getBaseProps() {
  return GoldenNest.getProps(window)
  
}
export function mapAreaToRow(priority) {
  switch (priority) {
    case 0:
      return '1/14';
    case 1:
      return '1/9';
    case 2:
      return '9/14';
    case 3:
      return '11/14';
    case 4:
      return '9/11';
    case 5:
      return '9/10';
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

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
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
      return fibonacci(6-position)

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
      return fibonacci(6-position)
    }}, ${(props) => {
      if (typeof props.nestData === 'undefined') {
        let baseProps = getBaseProps()
        return baseProps.squareEdge
      }
      return props.nestData !== '' ? props.nestData.squareEdge: getBaseProps().squareEdge
    }
    }px);
    height: 100%;
    border: 1px solid;
    border-image-source: linear-gradient(42.5deg, #ffc400, #003bff);
    border-image-slice: 1;
    grid-row: ${(props) => {
      const area = props.areas ? props.areas.indexOf(type) : 0
      return props.nestData.isPortrait ? mapAreaToColumn(area) :mapAreaToRow(area)

    }
    };
    grid-column: ${(props) => {
      const area = props.areas ? props.areas.indexOf(type) : 0
      return props.nestData.isPortrait ? mapAreaToRow(area) :mapAreaToColumn(area) 
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

  border-bottom: 1px solid rgba(0,0,0,0.38);
`

}

export function miniTitle() {
  return styled('h1')`
    display: grid;
    grid-column: 2/-1;
    grid-row: 1/2;
    justify-content: left;
    align-content: center;
    overflow: hidden;
  `
}
