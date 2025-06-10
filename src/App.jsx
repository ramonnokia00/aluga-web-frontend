import React from "react";
import { LoginProvider } from "./contexts/LoginContext";
import Footer from "./components/footer";
import Header from "./components/Header";
import AppRoutes from "./routes/paths";

function App() {
  return (
    <LoginProvider>
      <Header />
      <AppRoutes />
      <Footer />
    </LoginProvider>
  );
}

export default App;
