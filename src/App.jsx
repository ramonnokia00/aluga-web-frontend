import LoginProvider from "./contexts/Logincontext";
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
