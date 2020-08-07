import React from 'react'
import { useObserver } from "mobx-react"
import { StoreContext } from "../../mobx/BugsStore/store"

export const BugsList = () => {
  const store = React.useContext(StoreContext)

  return useObserver(() => (
    <ul>
      {store.bugs.map(bug => <li>{bug}</li>)}
    </ul>
  ))
}

