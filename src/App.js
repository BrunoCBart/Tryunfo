import React from "react";
import ContextProvider from "./context/ContextProvider";
import "./App.css";
import CardForm from "./components/CardForm";
import Cards from "./components/Cards";
import Filters from "./components/Filters";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <CardForm />
        <Filters />
        <Cards />
        <footer>
          <a
            href="https://github.com/BrunoCBart/Tryunfo"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github"></i>
            code
          </a>
          <p>Projeto criado por Bruno Bartolomeu</p>
        </footer>
      </ContextProvider>
    </div>
  );
}

export default App;
