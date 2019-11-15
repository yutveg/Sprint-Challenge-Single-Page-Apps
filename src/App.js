import React from "react";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList.js';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" component={CharacterList} />
    </main>
  );
}
