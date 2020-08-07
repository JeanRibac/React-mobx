import React from 'react'
import { useObserver } from "mobx-react"
import { StoreContext } from "../../mobx/BugsStore/store"

export const BugsHeader = () => {
  const store = React.useContext(StoreContext)

  return useObserver(() => (
    <h1>{store.bugsCount}</h1>
  ))
}
