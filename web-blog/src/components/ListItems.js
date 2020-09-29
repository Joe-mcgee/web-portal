
import styled from 'vue-styled-components'
function getBasePropTypes() {
  return {
    nestData: {
      width: Number,
      height: Number,
      isPortrait: Boolean,
      squareEdge: Number,
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

function computeFont(init, scale, props) { 
      let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
      let adjustFont = `${init + (scale*diff)}`
      return `${adjustFont}vmin`
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
      return computeFont(4.2, 0.0025, props ? props: {})
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
    return computeFont(2.6, 0.0025, props ? props: {})
  }}
`
} 
function test (init, scale, props) {

    let diff = props.nestData.isPortrait ? props.nestData.height - props.nestData.width: props.nestData.width - props.nestData.height
    let adjustFont = `${2.6 + (0.0025*diff)}`
    return `${adjustFont}vmin`
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
    let adjustFont = `${1.8 + (0.0025*diff)}`
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
  return styled('div', getBasePropTypes())`
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    let iterator = props.iterator ? props.iterator : 0
    return mapCategories(position, iterator, 1)
  }};
  grid-column: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position == 0) return '6/-1'
    if (position == 1) return '3/-1'
    return '2/-1'
  }};
  gap: 0.382rem 0.618rem;
  display: grid;
  font-size: ${(props) => {
    return computeFont(1.62, 0.0025, props ? props: {})
  }};
  grid-template-columns: repeat(5, 1fr);
  `
}

export function createLinks(div, type) {
  return styled(div, getBasePropTypes())`
  grid-row: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    let iterator = props.iterator ? props.iterator : 0
    return mapCategories(position, iterator, 1)
  }};
  grid-column: ${(props) => {
    let position = props.areas ? props.areas.indexOf(type) : 1
    if (position == 0) return '4/6'
    if (position == 1) return '0'
    if (position == 2) return '9'
    return '2/-1'
  }};
  gap: 0.382rem 0.618rem;
  display: grid;
  font-size: ${(props) => {
    return computeFont(1.62, 0.0025, props ? props: {})
  }};
  grid-template-columns: repeat(2, 1fr);
  `
}
export function createCategory(div, type) {
  return styled(div, getBasePropTypes())`
    display: flex;
    flex-direction: row;
    justify-content:left;
    align-items: center;
    border-radius: 4px;
    transition: all 500ms;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

  `
}



export function createCount() {
return styled('p', getBasePropTypes())`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/1;
  grid-row: 1/1;
  height: 100%;
  width: 100%;
  background-color: #001B74;
  font-size: ${(props) => {
    return computeFont(2.2, 0.0025, props ? props: {})
  }};
  
`

}
