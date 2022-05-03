import { QueryClient, QueryClientProvider } from "react-query";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home, HomeCandidates, CreateCandidate } from '../../routes';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="candidates" element={<HomeCandidates />} />
            <Route path="candidates/create" element={<CreateCandidate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export { App };
