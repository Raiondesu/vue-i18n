describe('silent', () => {
  it('should suppress translate warnings', () => {
    const vm = new Vue({
      i18n: new VueI18n({
        locale: 'en',

        silentTranslationWarn: true,
        messages: {
          en: { who: 'root' },
          ja: { who: 'ルート' }
        },

        dateTimeFormats: {
          'en': {
            short: {
              year: '2-digit',
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            },
            human: {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric'
            }
          }
        },
        numberFormats: {
          'en': {
            test: {
              style: 'currency',
              currency: 'USD',
              currencyDisplay: 'name'
            }
          }
        }
      })
    })

    const spy = sinon.spy(console, 'warn')
    vm.$t('foo.bar.buz')
    vm.$d(1545001459635, 'short')
    vm.$n(12, 'test')
    assert(spy.notCalled === true)

    // change
    vm.$i18n.silentTranslationWarn = false
    vm.$t('foo.bar.buz')
    assert(spy.callCount === 2)

    spy.restore()
  })
})
