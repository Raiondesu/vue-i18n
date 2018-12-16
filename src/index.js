import { VueI18n } from './core'
import { Vue, install } from './install'

VueI18n.install = function (instance) {
  /* istanbul ignore next */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)

    instance._vue = window.Vue
  } else { // Save Vue constructor for later usage
    instance._vue = Vue
  }
}

export default VueI18n
