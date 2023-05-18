import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { SideBar } from "../../components/Dashboard";
import { TopBarDashboard } from "../../components";
import { Outlet } from "react-router-dom";

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
