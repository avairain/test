import { useStore } from "."

export const useThemePrefix = (style: any) => {
  const { get } = useStore()
  const theme = get('theme') || 'light'
  return new Proxy(style, {
    get(t, k) {
      return style[`${theme}-${String(k)}`]
    }
  })
}