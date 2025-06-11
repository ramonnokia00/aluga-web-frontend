
import React from "react";
import Home from "./pages/Home";
import { LoginProvider } from "./contexts/LoginContext";
import Footer from "./components/footer";
import Header from "./components/Header";
import Abas from "./pages/Abas";

function App() {
  return (
  <><LoginProvider>
  <Header/>
  <Home /> 
  <Footer/>
  <Abas/> 
  </LoginProvider>
  
  <Footer />
  </>

    <Paths />
 main
  );
}

export default App;
