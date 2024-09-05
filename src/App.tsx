import { Route, Routes } from "react-router-dom";

import { Register } from "./features/auth/components/Register";

const App = () => (
  <>
    <Routes>
      <Route path="/registro" element={<Register />} />
    </Routes>
  </>
);

export default App;
