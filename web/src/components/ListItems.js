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

export function mapLogo(position, iterator, offset) {
  let padding
  let start
  switch (position) {
    case 0:
      padding = 3
      start = ((iterator + 1)*padding) + offset
      return `${start}/${padding + start}`
    case 1:
      padding = 2 
      start = ((iterator + 1)*padding) + offset + 1
      return `${start}/${padding + start}`
    case (position > 2):
      padding = 1
      start = ((iterator + 1)*padding) + offset + 1
      return `${start}/${padding + start}`
  }

}

export function createLogo(type) {

  return styled('img', getBasePropTypes())`
    grid-row: ${(props) => {
      let position = props.areas ? props.areas.indexOf(type) : 1
      let iterator = props.iterator ? props.iterator : 0
      return mapLogo(position, iterator, -1)
    }};
    grid-column: ${(props) => {
      
      let position = props.areas ? props.areas.indexOf(type) : 1
      if (position == 0) return '1/4'
      if (position == 1) return '1/3'
      return '1/2'
    }};
    width: 90%;
    height: 90%;
    border-radius: 50%;
  `

}

export function mapTitle(position, iterator, offset) {
  let padding
  let start
  //  props.iterator ? `${2*(props.iterator+1)}` : '2'
  switch (position) {
    case 0:
      padding = 3
      start = ((padding*iterator)+1) + offset
      return `${start}`
    case 1:
      padding = 2 
      start = ((padding*iterator)+1) + offset
      return `${start}`
    case 2:
      padding = 1
      start = ((padding*iterator)+1) + offset
      return `${start}`
  }

}
export function createTitle(type) {
  return  styled('h2', getBasePropTypes())`  
  display: grid;
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    let iterator = props.iterator ? props.iterator : 0
    return mapTitle(position, iterator, 1)
  }};
  grid-column: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position == 0) return '4/-1'
    if (position == 1) return '3/-1'
    return '2/-1'
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

export function mapContent(position, iterator, offset) {
  let padding
  let start
  //  props.iterator ? `${2*(props.iterator+1)}` : '2'
  switch (position) {
    case 0:
      padding = 3
      start = ((padding*iterator)+1) + offset + 1
      return `${start}`
    case 1:
      padding = 2 
      start = ((padding*iterator)+1) + offset
      return `${start}`
    case 2:
      padding = 1
      start = ((padding*iterator)+1) + offset
      return `${start}`
  }
}

export function createContent(type) {
  return styled('p', getBasePropTypes())`
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    let iterator = props.iterator ? props.iterator : 0
    return mapContent(position, iterator, 2)
  }};
  grid-column: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position == 0) return '4/-1'
    if (position == 1) return '3/-1'
    return '2/-1'
  }
  };
  align-content: center;
  display: grid;
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? (props.nestData.height - props.nestData.width): props.nestData.width - props.nestData.height
    let adjustFont = `${2 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }};
  word-break: break-all;
  `
}

export function mapCategories(position, iterator, offset) {
  let padding
  let start
  //  props.iterator ? `${2*(props.iterator+1)}` : '2'
  switch (position) {
    case 0:
      padding = 3
      start = ((padding*iterator)+1) + offset + 1
      return `${start}`
    case 1:
      padding = 2 
      start = ((padding*iterator)+1) + offset
      return `${start}`
    case 2:
      padding = 1
      start = ((padding*iterator)+1) + offset
      return `${start}`
  }
}
export function createCategories(type) {
  return styled('h2', getBasePropTypes())`
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    let iterator = props.iterator ? props.iterator : 0
    return mapCategories(position, iterator, 1)
  }};
  grid-column: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position == 0) return '4/-1'
    if (position == 1) return '3/-1'
    return '2/-1'
  }}
  font-size: ${(props) => {
    let diff = props.nestData.isPortrait ? (props.nestData.height - props.nestData.width): props.nestData.width - props.nestData.height
    let adjustFont = `${1.62 + (0.0025*diff)}`
    return `${adjustFont}vmin`
  }};
`
}

export function createCategory(type) {
  return styled('div', getBasePropTypes())``
}
