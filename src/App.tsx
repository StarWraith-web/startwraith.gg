import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout, ProtectedLayout } from "./layouts";
import { AuthProvider } from "./context/AuthProvider";
import {
  Clips,
  Eventos,
  Home,
  LiderBoard,
  PrivacyPolicy,
  Tiers,
  Dashboard,
  Login
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="tiers" element={<Tiers />} />
              <Route path="eventos" element={<Eventos />} />
              <Route path="clips" element={<Clips />} />
              <Route path="liderboard" element={<LiderBoard />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
