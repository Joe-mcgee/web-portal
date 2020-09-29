import { GGData } from './IGoldenGrid.js'
const GoldenGrid = {
  install(Vue, options) {
    options.fibShort = options.fibShort ? options.fibShort : '13'
    options.fibLong = options.fibLong ? options.fibLong : '21'
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
