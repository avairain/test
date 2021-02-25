declare module '*.less'

interface GingKooComponent {
  style?: React.CSSProperties
}

interface ILocale {
  [propName: string]: string
}

interface SetLocaleParams {
  locale: 'en' | 'zh-ch' | ILocale
}
