import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Notes from any manager" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Starks
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            High interest, usually die early
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Lannisters
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            take what you want, and pay when you want... 
            They usually kill anyone who gets in the way.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Targaryens
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            A bird in the hand way is better than a dragon burning you
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Greyjoy
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Descendant of poseidon,
            infiltrations in their homes is a sign of blessing.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Baratheons
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Faith and war, a dangerous combination
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Martells
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            They love to hear the sound of their own voice.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Tyrells
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Great manipulators, beauty is their main weapon.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            Boltons
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
          Good at math, cold and calculating.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;