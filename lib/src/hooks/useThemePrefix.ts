import { useStore } from "."

export const useThemePrefix = (style: any) => {
  const theme = useStore('theme')
  return new Proxy(style, {
    get(t, k) {
      return style[`${theme}-${String(k)}`]
    }
  })
}