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
  let squareEdge = width / (isPortrait ? fibShort : fibLong)
  return {
    width,
    height,
    isPortrait,
    squareEdge,
  }
}

