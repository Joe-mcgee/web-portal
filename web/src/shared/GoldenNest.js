Math.phi = (1 + Math.sqrt(5))/2

export function nestGrid(nthFibbonaci) {
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
  //const isPortrait = (height > width) ? true: false
  //const width = (isPortrait) ? height: width;
  const a = width / Math.phi
  const b = width - a;

  // for fibbonacci increments, test 13 and 21
  //
  //const squareEdge = isPortrait ? width / 13 : width / 21
  const squareEdge = width / nthFibbonaci;
  return {
    width,
    height,
    //isPortrait,
    //width,
    a,
    b,
    squareEdge,
  }
}
