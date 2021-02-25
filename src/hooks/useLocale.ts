import { useStore } from "."

export const useLocale = () => {
  const { get } = useStore()
  const locale = get('locale') as ILocale
  return new Proxy(locale, {
    get(t, k: keyof ILocale) {
      return locale[k] || console.error('国际化语言:', locale.locale, '的', k, '未定义')
    }
  })
}