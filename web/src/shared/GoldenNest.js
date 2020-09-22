Math.phi = (1 + Math.sqrt(5))/2

export function getProps(fibShort, fibLong) {
  /* let a + b be the longest edge, and a be the short
       solve for a
       definition:
       a + b = a * Math.phi, a + b = longest edge px
       (1 - Math.phi)*a + b = 0
       a + b = 500

       (1 - Math.phi)*a + (500 - a) = 0
       -0.618*a - a = -500
       - Math.phi*a = - 500
       a = 500 / Math.phi
       short edge = long edge / phi
       */ 
  const width = window.innerWidth
  const height = window.innerHeight
  const isPortrait = (height > width) ? true: false

  
  const activeLength = width
  
  let squareEdge = (activeLength) / (isPortrait ? fibShort : fibLong)
  // for fibbonacci increments, test 13 and 21
  //
  //
  //

    /*
  if (isPortrait) {
  let diff = isPortrait ? height - width : width - height
  
  squareEdge = squareEdge - diff
    let pxmod = 0
    let xi = width
    let yi = height
    while (pxmod < (yi - xi)) {
      console.log(`pxmode${pxmod}, xi${xi},yi${yi}`)
      pxmod += 1
      yi -= 1
      xi -=1
      
      if (xi < 0) {
        xi = 0
        console.log('hi')
        break;
      }
      squareEdge -= 1
    }
  }

  if (!isPortrait) {
    let pxmod = 0
    let xi = width
    let yi = height
    while (pxmod < (xi - yi)) {
      console.log(`pxmode${pxmod}, xi${xi},yi${yi}`)
      pxmod += 1
      yi -= 1
      xi -=1
      
      if (yi < 0) {
        yi = 0
        break;
      }
      squareEdge -= 1
    }
  }
  */
  console.log(`widht ${width} height ${height} const calc width`)
  console.log(`portraitwidthcalc ${squareEdge*fibShort} height ${squareEdge*fibLong} const calc width`)
  console.log(`landscapetwidthcalc ${squareEdge*fibLong} height ${squareEdge*fibShort} const calc width`)
  return {
    width,
    height,
    isPortrait,
    squareEdge,
  }
}

