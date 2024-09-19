import { Route, Routes } from "react-router-dom";

import { Register } from "./features/auth/components/Register";
import { Login } from "./features/auth/components/Login";

const App = () => (
  <>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </>
);

export default App;
