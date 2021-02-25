import { IStore } from '../component/CurrentProvider'

let store = {} as IStore

export const useStore = () => {
  const set = (obj: IStore) => {
    store = obj
  }
  const get = (key?: keyof IStore) => {
    if (key) {
      return store[key]
    }
    return store
  }
  return {
    set,
    get
  }
}
