import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Candidates } from '../../routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="candidates" element={<Candidates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
