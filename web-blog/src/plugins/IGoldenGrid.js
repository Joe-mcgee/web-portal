import styled from 'vue-styled-components'

export class GGData {
  
  constructor(options) {
    this.setGridData(options)
  }

  setGridData(options) {
    this.width = window.innerWidth

    this.height = window.innerHeight
    this.isPortrait = (window.innerHeight > window.innerWidth) ? true: false,
    this.squareEdge =  window.innerWidth / (this.isPortrait ? options.fibShort : options.fibLong)
    
    this.options = options ? options : {fibShort: 13, fibLong: 21}
    
    return {
      $gridData: {
        width: this.width,
        height: this.height,
        squareEdge: this.squareEdge,
        options: this.options
      }
    } 
  }
}
    
function getBasePropTypes() {
  let nestData =  {
      height: Number,
      width: Number,
      squareEdge: Number,
      isPortrait: Boolean,
      options: {
        fibShort: Number,
        fibLong: Number
      }
    }
  return {nestData}
}

export function createGrid(tag, options) {
  options = options ? options : false
  return styled(tag, getBasePropTypes())`
    background-size: contain;
    background-repeat: no-repeat;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(${(props) => {
      console.log(props)
      console.log(props.nestData.nestData)
      return props.nestData.isPortrait ? 2*props.nestData.options.fibLong: 2*props.nestData.options.fibShort
    }}, ${(props) => {
      return props.nestData.squareEdge ? props.nestData.squareEdge : '10'
    }}px);
    grid-template-columns: repeat(${(props) => {
      return props.nestData.isPortrait ? props.nestData.options.fibShort: props.nestData.options.fibLong
    }}, ${(props) => {
      return props.nestData.squareEdge ? props.nestData.squareEdge : '10'
    }}px);
    grid-row: ${(props) => {
      console.log(props)
      if (options) {
        let y = options.origin.y
        let yi = y + options.dimension.y
        return `${y}/${yi}`
      } else {
        return 0;
      }
    }};
    grid-column: ${(props) => {
      console.log(props)
      if (options) {
        let x = options.origin.x
        let xi = x + options.dimension.x
        return `${x}/${xi}`
      } else {
        return 0;
      }
    }};
  ` 
}