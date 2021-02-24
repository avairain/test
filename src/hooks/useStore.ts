import { useContext } from 'react'
import { IStore, store } from '../component/CurrentProvider'

export const useStore =  (key?: keyof IStore) => {
  const s = useContext(store)
  if (key) {
    return s[key]
  }
  return s
}

