import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home, HomeCandidates, CreateCandidate } from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="candidates" element={<HomeCandidates />} />
          <Route path="candidates/create" element={<CreateCandidate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
