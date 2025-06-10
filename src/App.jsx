import React from "react";
import Home from "./pages/Home";
import SidebarFilters from './components/SidebarFilters';
import PropertyCard from './components/PropertyCard';
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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SidebarFilters />
        <main className="flex-1 p-4 bg-gray-100">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">
            122 Casas para alugar em Fortaleza - CE
          </h2>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <PropertyCard key={i} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;