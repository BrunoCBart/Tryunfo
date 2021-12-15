import React from 'react';
import ContextProvider from './context/ContextProvider';
import './App.css';
import CardForm from './components/CardForm';
import Cards from './components/Cards';
import Filters from './components/Filters';
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CardForm />
        <Filters />
        <Cards />
      </ContextProvider>
    </div>
  );
}

export default App;
