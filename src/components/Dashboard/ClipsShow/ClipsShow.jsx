import { Box, useTheme } from "@mui/material";
import { Header } from "../Header";
import { tokens } from "../../../theme/theme";

export function ClipsShow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Clips" subtitle="Página de clips" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 100%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          height="75vh"
        ></Box>
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
          height="75vh"
          ml="15px"
        ></Box>
      </Box>
    </Box>
  );
}
