import React from 'react';
import { StoreProvider } from "./mobx/BugsStore/store"
import { BugsList } from "./components/BugsList/BugsList.component"
import { BugsForm } from "./components/BugsForm/BugsForm.component"
import { BugsHeader } from "./components/BugsHeader/BugsHeader.component"
import './App.css';

// const StoreContext = React.createContext();

function App() {
  return (
    <StoreProvider>
      <main>
        <BugsHeader />
        <BugsList />
        <BugsForm />
      </main>
    </StoreProvider>
  );
}

export default App;