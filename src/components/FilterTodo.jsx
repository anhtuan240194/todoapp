import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
export default function FilterTodo() {
  return (
    <RadioGroup defaultValue="female" className="tab-todo" row>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  );
}
