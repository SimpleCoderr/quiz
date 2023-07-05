import "./index.scss";
import MainPage from "pages";
import { StoreProvider } from "./providers";

function App() {
  return (
    <div className="app">
      <StoreProvider>
        <MainPage />
      </StoreProvider>
    </div>
  );
}

export default App;
