import React from "react";
import { Header } from "./components/Header";
import { PlacesList } from "./components/PlacesList";
import "./style.css"
import { GlobalProvider } from './Context/GlobaleState'



function App() {
  return (
    <GlobalProvider>
      <Header/>
      <PlacesList/>
    </GlobalProvider>
  );
}

export default App;
