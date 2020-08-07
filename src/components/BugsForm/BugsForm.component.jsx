import React from 'react'

import { StoreContext } from "../../mobx/BugsStore/store"


export const BugsForm = () => {
  const store = React.useContext(StoreContext)

  const [bug, setBug] = React.useState("");

  const onSubmit = (e) => {
    bug && store.addBug(bug);
    setBug("")
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={bug} onChange={e => setBug(e.target.value)} />
      <button type="submit">Add Bug</button>
    </form>
  )
}
