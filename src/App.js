import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import List from "./Components/Items List/list";
const App = ()=> {
    return (
      <div className="container">
        <header className="App-header">
          <Header />
        </header>
        <section className="App-body">
          <List />
        </section>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  
}

export default App;
