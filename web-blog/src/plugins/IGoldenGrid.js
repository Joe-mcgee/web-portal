import styled from 'vue-styled-components'

export class GGData {
  
  constructor(options) {
    this.setGridData(options)
  }

  setGridData(options) {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.isPortrait = (window.innerHeight > window.innerWidth) ? true: false,
    this.squareEdge =  window.innerWidth / (this.isPortrait ? options.dimension.y : options.dimension.x)
    
    this.options = options
    
    return {
      $gridData: {
        width: this.width,
        height: this.height,
        squareEdge: this.squareEdge,
        gridOrigin: this.options.gridOrigin,
        gridDimension: this.options.gridDimension,
        origin: this.options.origin,
        dimension: this.options.dimension
      }
    } 
  }
}
    
export function getBasePropTypes() { 
  return {
    nestData: {
      height: Number,
      width: Number,
      squareEdge: Number,
      isPortrait: Boolean,
      gridOrigin: {
        x: Number,
        y: Number
      },
      gridDimension: {
        x: Number,
        y: Number
      },
      origin: {
        x: Number,
        y: Number
      },
      dimension: {
        x: Number,
        y: Number
      },
    },
    list: Array,
  }
}

export function createGrid(tag, options) {
  return styled(tag, getBasePropTypes())`
    background-size: contain;
    background-repeat: no-repeat;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(${(props) => {
      let yi = props.nestData ? props.nestData.gridDimension.y : 21
      return `${yi}`
    }}, ${(props) => {
      return props.nestData.squareEdge ? props.nestData.squareEdge : '10'
    }}px);
    grid-template-columns: repeat(${(props) => {
      let xi = props.nestData ? props.nestData.gridDimension.x : 13
      return `${xi}`
    }}, ${(props) => {
      return props.nestData.squareEdge ? props.nestData.squareEdge : '10'
    }}px);
    grid-row: ${(props) => {
      if (options) {
        let y = options.origin.y ? options.origin.y : props.nestData.origin.y
        let yi = options.dimension.y ? options.dimension.y : props.nestData.dimension.y
        return `${y}/${y + yi}`
      } else {
        return 0;
      }
    }};
    grid-column: ${(props) => {
      console.log(props)
      if (options) {
        let x = options.origin.x ? options.origin.x : props.nestData.origin.x
        let xi = options.dimension.x ? options.dimension.x : props.nestData.dimension.x
        return `${x}/${x + xi}`
      } else {
        return 0;
      }
    }};
  ` 
}
