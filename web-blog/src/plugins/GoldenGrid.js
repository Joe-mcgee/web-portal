import { GGData } from './IGoldenGrid.js'
const GoldenGrid = {
  install(Vue, options) {
    let $GGData = new GGData(options)

    Vue.mixin({
      data: function () {
        return $GGData.setGridData(options)
      },
      mounted() {
        console.log('mounted')
      },
      created() {
        window.addEventListener("resize", () => {
          let newFrame = $GGData.setGridData(options)
          Object.assign(this.$data, newFrame)    
        })
      },
      destroyed()  {
        window.removeEventListener("resize", () => {})
      },
      computed: {
        getNestData() {
          return {
            ...this.$data.$gridData
          }
        }        
      }
    })
  }
}

export default GoldenGrid
