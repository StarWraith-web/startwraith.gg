import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../../theme/theme";
import { Header } from "../Header";

export function Faq() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Página de preguntas frecuentes" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Qué hay en el apartado Clips?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En este apartado se podrán visulizar los clips subidos por el
            usuarios en la parte izquierda, en la parte derecha habrá un panel
            de control, donde se podrá avanzar o retrocer si es posible sobre el
            listado de clips. También se encontrara información referida al
            clip, como fecha de subida, nombre de usuario etc.. Por otro lado
            habrá un botón donde se podrá añadir el clip a favoritos para poder
            visualizarlo en dicha sección, también habrá un botón para banear al
            usuario para que no pueda subir más clips hasta ser desbaneado.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Qué hay en el apartado de Clips Vistos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En este apartado se podra encontrar un listado de todos los clips
            que se ha visualizado a lo largo del tiempo en la web, no se
            permitirá realizar acciones sobre ellos, salvo la visualización del
            mismo.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            ¿Qué hay en el apartado de Clips Favoritos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            En este apartado se podrán ver los clips que se hayan guardado en
            favoritos, se podrán eliminar des favoritos en este apartado
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pregunta
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Pregunta
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
