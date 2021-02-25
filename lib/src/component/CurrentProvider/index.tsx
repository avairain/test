import React from 'react'
import { useStore } from '../../hooks'
import en from '../../locale/en'
import zhCn from '../../locale/zh-cn'

const _locale: { [propName: string]: { [propName: string]: string } } = {
  en,
  'zh-cn': zhCn
}

export interface IStore {
  theme: 'light' | 'dark',
  locale: ILocale
}

const _store: IStore = {
  theme: 'dark',
  locale: zhCn
}
const store = React.createContext(_store)

interface ICurrentProvider {
  children: React.ReactNode
  /**
   * @description 主题样式
   */
  value: IStore
  /**
   * @description 国际化 默认 zh-cn 可选 zh-cn, en 自定义
   */
  locale?: SetLocaleParams
}

const CurrentProvider: React.FC<ICurrentProvider> = ({ value, children, locale = 'zh-cn' }) => {
  const { Provider } = store
  const { set } = useStore()
  set({
    ...value,
    locale: (typeof locale === 'string' ? _locale[locale as any] : locale) as ILocale
  })
  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export default CurrentProvider
