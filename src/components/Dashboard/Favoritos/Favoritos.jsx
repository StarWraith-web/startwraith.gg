import { ComingSoon } from "../../ComingSoon";
import { Box } from "@mui/material";

export function Favoritos() {
  return (
    <Box m="20px">
      <Box height="75vh">
        <div style={{ padding: "50px" }} className="center-center">
          <ComingSoon day="14" month="6" />
        </div>
      </Box>
    </Box>
  );
}
