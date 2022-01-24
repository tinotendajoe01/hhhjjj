import { useState } from "react";
import InputRange from "react-input-range";
// import "react-input-range/lib/css/styles.css";
function RangeSlider(props) {
  const [value, setValue] = useState(10);

  return (
    <InputRange maxValue={20} minValue={0} value={value} onChange={setValue} />
  );
}
export default RangeSlider;
