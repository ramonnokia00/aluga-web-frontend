import React from "react";
import Home from "./pages/Home";
import { LoginProvider } from "./contexts/LoginContext";
import Footer from "./components/footer";
import Header from "./components/Header";

function App() {
  return (
  <><LoginProvider>
  <Header/>
  <Home /> 
  <Footer/> 
  </LoginProvider>
  
  </>
  );
}

export default App;
