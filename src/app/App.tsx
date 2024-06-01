import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import Providers from "./Providers";
import Routes from "./Routes";

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Index />
    </QueryClientProvider>
  );
};

const Index = () => {
  return (
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  );
};

export default App;
