import styled from 'vue-styled-components'

function getBasePropTypes() {
  return {
    nestData: {
      width: Number,
      height: Number,
      isPortrait: Boolean
    },
    areas: Array,
    iterator: Number,
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

export function iconCenter(div) {
  return styled(div)`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  justify-content: center;
  align-content: center;
`
}

export function miniTitle() {
  return styled('h1', getBasePropTypes())`
    display: grid;
    grid-column: 2/-1;
    grid-row: 1/2;
    justify-content: left;
    align-content: center;
    overflow: hidden;
    font-size: ${(props) => {
      let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
      let adjustFont = `${4.2 + (0.0025*diff)}`
      return `${adjustFont}vmin`
    }}
  `
}
export function createLogo(type) {

  return styled('img', getBasePropTypes())`
    grid-row: ${(props) => {
      let position = props.areas ? props.areas.indexOf(type) : 1
      if (position <  2) {
        return props.iterator ? `${(props.iterator+1)*2}/${2+(1+props.iterator)*2}` : '2/4'
      }
      return props.iterator ? `${(props.iterator+2)}/${(3+props.iterator)}` : '2/2'
    }};
    grid-column: ${(props) => {
      
      let position = props.areas ? props.areas.indexOf(type) : 1
      
      if (position <  2) {
        return '1/3'
      }
      return '1/2'
    }};
    width: 90%;
    height: 90%;
    border-radius: 50%;
  `

}

export function createTitle(type) {
  return  styled('h2', getBasePropTypes())`  
  display: grid;
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position < 2) {
      return props.iterator ? `${2*(props.iterator+1)}` : '2'
    }
      return props.iterator ? `${2+(props.iterator+1)}/${1+(1+props.iterator)}` : '2'
  }};
  grid-column: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position < 2) return '3/-1'; else return '2/-1'
  }
  };
  align-content: center;
  overflow: hidden;
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
    let adjustFont = `${2.6 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }}
`
} 

export function createContent(type) {
  return styled('p', getBasePropTypes())`
  grid-row: ${(props) => {
    return props.iterator ? `${2*(props.iterator+1)+1}` : '3'
  }};
  grid-column: 3/-1;
  align-content: center;
  display: grid;
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? (props.nestData.height - props.nestData.width): props.nestData.width - props.nestData.height
    let adjustFont = `${2 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }};
  word-wrap: break-word;
`
}

export function createCategories(type) {
  return styled('h2', getBasePropTypes())`
  grid-row: -4/-2;
  grid-column: -1/-2;
`
}
