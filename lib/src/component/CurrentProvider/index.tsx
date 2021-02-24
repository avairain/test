import React from 'react'

export interface IStore {
  theme: 'light' | 'dark'
}

const _store: IStore = {
  theme: 'dark'
}
export const store = React.createContext(_store)

export default store.Provider
