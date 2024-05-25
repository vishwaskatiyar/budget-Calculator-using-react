import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
const Spend = () => {
  const { expenses } = useContext(AppContext);
  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="bg-red-200 rounded-lg p-4">
      <span className="text-lg font-semibold">Spent so far:</span>
      <span className="ml-2">Rs {totalExpense}</span>
    </div>
  );
};

export default Spend;
