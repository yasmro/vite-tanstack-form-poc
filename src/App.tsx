import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import EntireForm from "./components/EntireForm";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <EntireForm />
    </QueryClientProvider>
  );
}

export default App;
