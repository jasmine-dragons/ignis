import MonthSlider from "@/components/MonthSlider";
import { MONTHS } from "@/lib/constants";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div>
      <MonthSlider defaultMonth={MONTHS.January} />
    </div>
  );
};

export default HomePage;
