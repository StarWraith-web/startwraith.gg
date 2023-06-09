/* eslint-disable no-unused-vars */
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../../theme/theme";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../hooks/useAuth";

export function TopBarDashboard() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const { closeSession } = useAuth();

  const handleCloseSession = () => {
    closeSession();
    localStorage.removeItem("token");
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={handleCloseSession}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
