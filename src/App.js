import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from './pages/Form';
// import { Home } from "./pages/Home";
// import { Contact } from "./pages/Contect";
// import { Profile } from "./pages/Profile";
// import { Navbar } from "./Navbar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        // this will change effect of change tab reload
        refetchOnWindowFocus: false
      }
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Form />
      </QueryClientProvider>
    </div>
  );
}

export default App;