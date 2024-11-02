import { useState } from "react";

const useInputChange = (initial = null) => {
  const [value, setValue] = useState(initial);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const handleChange = e => {
  //     setValue(e.target.value);
  // }
  // return [value , handleChange];
  return {
    value,
    onChange,
  };
};

export default useInputChange;
