import { Box } from "@mui/system";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

function index() {
  return (
    <Box m="20px">
      <Header title="Enem Braavos" subtitle="Public Education" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}

export default index;