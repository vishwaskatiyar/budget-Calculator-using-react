import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  // Calculate total expenses
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const remainingBudget = budget - totalExpenses;

  return (
    <div className="bg-green-200 rounded-lg p-4">
      <span className="text-lg font-bold">Remaining:</span>
      <span className="ml-2">Rs {remainingBudget}</span>
    </div>
  );
};

export default Remaining;
