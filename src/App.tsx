import Home from "./Home";
import { CardContextProvider } from "./context/ManageState";

function App() {
  return (
    <CardContextProvider>
      <Home />
    </CardContextProvider>
  );
}

export default App;
