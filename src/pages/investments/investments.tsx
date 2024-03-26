import { Button } from "components";
import { useInvestments } from "./investments.utils";

const Investments = () => {
  const { handleToNewInvestment } = useInvestments()

  return <Button onClick={handleToNewInvestment}>Nueva Inversion</Button>
};

export default Investments
