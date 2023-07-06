import MainPage from "pages";
import { StoreProvider } from "./providers";
import "./styles/index.scss";

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
