import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const Expenses = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white w-3/4 rounded-lg shadow-lg p-6 border border-gray-300">
        {expenses.length === 0 ? (
          <p className="font-semibold flex justify-center">
            No expenses added yet
          </p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Expenses;
