
import styled from 'vue-styled-components'
export function getBasePropTypes() {
  return {
    areas: Array
  }
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


export function create(type, component) {
  component = component ? component : 'div'
  return styled(component, getBasePropTypes())`
    background-image: url(${(props) => {
      switch (props.areas ? props.areas.indexOf(type) : 0) {
        case 0:
          return require(`@/assets/${type}-big.jpeg`)
        case 1:
          return require(`@/assets/${type}-large.jpeg`)

      }
      //return require(`@/assets/square.jpeg`)
      
    }});
    background-size: contain;
    display: grid;
    width: 100%;
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

