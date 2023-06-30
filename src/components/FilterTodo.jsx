import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

/**
 * Tab lọc công việc. Cần phải đưa vào 1 function để khi state thay đổi sẽ thay đổi todos
 *
 * @param {onChange} onChange - Là 1 function xử lý sự kiện
 */
export default function FilterTodo({ onChange }) {
  return (
    <RadioGroup
      defaultValue="All"
      className="tab-todo"
      row
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <FormControlLabel value="All" control={<Radio />} label="Tất cả" />
      <FormControlLabel
        value="In active"
        control={<Radio />}
        label="Chưa hoàn thành"
      />
      <FormControlLabel
        value="Final"
        control={<Radio />}
        label="Đã hoàn thành"
      />
    </RadioGroup>
  );
}
