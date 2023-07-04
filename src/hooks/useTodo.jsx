import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodo = () => {
  const context = useContext(TodoContext);

  return context;
};

//Hàm use Todo phải return và nhận vào file context provider
// Custom hook giống như 1 hàm bình thường
// => Có sử dụng bất kỳ hook nào của React
//Bình thường file nào cũng phải import 2 cái dòng đầu, làm cách này sẽ chỉ cần import mỗi useTodo là được
