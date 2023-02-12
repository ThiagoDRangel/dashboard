import { Box } from "@mui/system";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

function index() {
  return (
    <Box m="20px">
      <Header title="Enem Braavos" subtitle="Public Education" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}

export default index;