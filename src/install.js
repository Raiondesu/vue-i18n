import { warn } from './util'
import extend from './extend'
import mixin from './mixin'
import component from './component'
import { bind, update, unbind } from './directive'

export let Vue

export function install (_Vue) {
  /* istanbul ignore next */
  if (install.installed && _Vue === Vue) {
    warn('already installed.')
    return
  }
  install.installed = true

  Vue = _Vue

  /* istanbul ignore next */
  const version = (Vue.version && Number(Vue.version.split('.')[0])) || -1
  /* istanbul ignore next */
  if (version < 2) {
    warn(`vue-i18n (${install.version}) need to use Vue 2.0 or later (Vue: ${Vue.version}).`)
    return
  }

  extend(Vue, this)
  Vue.mixin(mixin)
  Vue.directive('t', { bind, update, unbind })
  Vue.component(component.name, component)

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  const strats = Vue.config.optionMergeStrategies
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  }
}
