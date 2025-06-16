
import { LoginProvider } from "./contexts/LoginContext";
import Paths from "./routes/paths";


function App() {
  return (
    <><LoginProvider>
      <Paths />

    </LoginProvider>
    
    </>
  );
}

export default App;
