Math.phi = (1 + Math.sqrt(5))/2

export function nestGrid(window) {
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
  const aPlusB = (isPortrait) ? height: width;
  const a = aPlusB / Math.phi
  const b = aPlusB - a;

  // for fibbonacci increments, test 13 and 21
  const squareEdge = aPlusB / 21
  console.log(squareEdge)
  return {
    width,
    height,
    isPortrait,
    aPlusB,
    a,
    b,
    squareEdge,
  }
}
