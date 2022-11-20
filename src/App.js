import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

// Styles
import "antd/dist/antd.min.css";
import "./assets/styles/App.css";

// Pages
import MapPage from "./pages/Map";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

// Components
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Login from "./pages/Login";

import stayLoggedin from "./helpers/stayLoggedin";

function App() {
  const dispatch = useDispatch();

  // Stay logged in
  useEffect(() => {
    stayLoggedin(dispatch);
  }, [dispatch]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<MapPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
