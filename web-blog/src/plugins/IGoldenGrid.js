import styled from 'vue-styled-components'

export class GGData {
  
  constructor(options) {
    this.setGridData(options)
  }

  setGridData(options) {
    let nestData = {
      width: window.innerWidth,
      height: window.innerHeight,
      isPortrait: (window.innerHeight > window.innerWidth) ? true: false,
      squareEdge: window.innerWidth / (this.isPortrait ? options.fibShort : options.fibLong),
    options: options ? options : {fibShort: 13, fibLong: 21}
    }
    return nestData 
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

export function createGrid(tag) {
  return styled(tag, getBasePropTypes())`
    background-size: contain;
    background-repeat: no-repeat;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: repeat(${(props) => {
      console.log(props)
      return props.nestData.isPortrait ? 2*props.nestData.options.fibLong: 2*props.nestData.options.fibShort
    }}, ${(props) => {
      return props.nestData.squareEdge ? props.nestData.squareEdge : '10'
    }}px);
    grid-template-columns: repeat(${(props) => {
      return props.nestData.isPortrait ? props.nestData.options.fibShort: props.nestData.options.fibLong
    }}, ${(props) => {
      return props.nestData.squareEdge ? props.nestData.squareEdge : '10'
    }}px);
  ` 
}
