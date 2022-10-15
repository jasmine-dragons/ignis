import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { MONTHS } from "@/lib/constants";
import { getMonthLabel, getMonthIndex } from "@/lib/utils";

interface SliderProps {
  defaultMonth: MONTHS;
}

const MonthSlider = ({ defaultMonth }: SliderProps) => {
  const [value, setValue] = useState<number>(getMonthIndex(defaultMonth));

  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={value}
        min={0}
        max={11}
        step={1}
        getAriaValueText={getMonthLabel}
        valueLabelFormat={getMonthLabel}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="month-slider"
      />
    </Box>
  );
};

export default MonthSlider;
