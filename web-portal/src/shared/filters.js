import Vue from 'vue'
Vue.filter('truncate', function (text, position, suffix) {
  let length;
  switch (position) {
    case 0:
      length = 90
      break
    case 1:
      length = 64
      break
    case 2:
      length = 11
      break
    case (position > 2):
      length = 0
      break
  }
  if (typeof text === "undefined") text = ''
  if (text.length > length) {
      return text.substring(0, length) + '' + suffix;
  } else {
      return text;
  }
}
)
