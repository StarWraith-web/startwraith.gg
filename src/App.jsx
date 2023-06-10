import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DashboardLayout, MainLayout, ProtectedLayout } from "./layouts";
import { AuthProvider } from "./context/AuthProvider";
import {
  Clips,
  Eventos,
  Home,
  LiderBoard,
  PrivacyPolicy,
  Tiers,
  Login,
  Cookies,
} from "./pages";
import {
  Barras,
  Calendar,
  Donut,
  Geografica,
  Lineal,
  ClipsShow,
  Faq,
  Favoritos,
  DashboardHome,
  BbDd,
  Users,
} from "./components";

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
              <Route path="clips" element={<Clips />}>
                <Route path="upload-clip/:id" element={<Clips />} />
              </Route>
              <Route path="liderboard" element={<LiderBoard />} />
              <Route path="politica-privacidad" element={<PrivacyPolicy />} />
              <Route path="cookies" element={<Cookies />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedLayout />}>
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="/dashboard/" element={<DashboardHome />} />
                <Route path="/dashboard/database" element={<BbDd />} />
                <Route path="/dashboard/users" element={<Users />} />
                <Route path="/dashboard/calendario" element={<Calendar />} />
                <Route path="/dashboard/grafica-barras" element={<Barras />} />
                <Route path="/dashboard/grafica-lineal" element={<Lineal />} />
                <Route path="/dashboard/grafica-donut" element={<Donut />} />
                <Route path="/dashboard/favoritos" element={<Favoritos />} />
                <Route path="/dashboard/clips" element={<ClipsShow />} />
                <Route path="/dashboard/faq" element={<Faq />} />
                <Route
                  path="/dashboard/grafica-geografica"
                  element={<Geografica />}
                />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
