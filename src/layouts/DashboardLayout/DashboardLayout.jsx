import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Calendar, SideBar } from "../../components/Dashboard";
import { TopBarDashboard } from "../../components";
import { Outlet, Route, Routes } from "react-router-dom";
import { Dashboard } from "../../pages";
import { ProtectedLayout } from "../ProtectedLayout";

export function DashboardLayout() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <TopBarDashboard setIsSidebar={setIsSidebar} />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
