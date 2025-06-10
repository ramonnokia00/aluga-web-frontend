
import { LoginProvider } from "./contexts/Logincontext";
import Paths from "./routes/paths";


const App = () => {
  return (<>
<LoginProvider>
    <Paths />
</LoginProvider>
  </>);
}

export default App;