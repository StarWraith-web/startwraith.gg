import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import "./Dashboard.scss";
import SideBar from "../../components/SideBar/SideBar";
import { TopBarDashboard } from "../../components";

export function Dashboard() {
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
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
