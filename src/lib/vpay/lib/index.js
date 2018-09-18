import vpay from './pay'

const vpayPlugin = {
  install(Vue, options) {
    Vue.component('vpay', vpay)
  }
}

export default vpayPlugin
