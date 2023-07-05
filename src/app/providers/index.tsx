import { store } from "app/models";
import { Provider } from "react-redux";

type ProviderProps = {
  children: React.ReactNode;
};

export const StoreProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
