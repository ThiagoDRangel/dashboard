
import { Box } from "@mui/system";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

function Index() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="the seven kingdoms" subtitle="divided by region" />
      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
}

export default Index;