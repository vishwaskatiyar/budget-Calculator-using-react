import { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = { id: uuidv4(), name: name, cost: parseInt(amount) };
    dispatch({ type: "ADD_EXPENSE", payload: expense });

    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold text-xl mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="Expense title"
          className="w-full border-gray-100 rounded-md px-4 py-2  focus:border-blue-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block font-bold text-xl mb-2">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          required
          placeholder="Amount"
          className="w-full border-gray-300 rounded-md px-4 py-2  focus:border-blue-500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 flex text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save Expense
        </button>
      </div>
    </form>
  );
};

export default AddExpense;
