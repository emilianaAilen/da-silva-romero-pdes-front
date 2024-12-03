import { Route, Routes } from "react-router-dom";

import { GlobalSnackbar } from "./features/common/components/GlobalSnackbar/globalSnackbar";
import { HomeWrapper } from "./features/home/components/HomeWrapper";
import { Login } from "./features/auth/components/Login";
import { Products } from "./features/products/components/Products";
import { ProtectedRoute } from "./features/auth/components/ProtectedRoute";
import { Provider } from "react-redux";
import { Register } from "./features/auth/components/Register";
import { store } from "./store";
import { GlobalLayout } from "./layouts/components/GlobalLayout";
import { Favorites } from "./features/favorites/components/Favorites";
import { Purchases } from "./features/purchases/components/Purchases";

const App = () => (
  <Provider store={store}>
    <GlobalLayout>
      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchases"
          element={
            <ProtectedRoute>
              <Purchases/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites/>
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </GlobalLayout>
    <GlobalSnackbar />
  </Provider>
);

export default App;
