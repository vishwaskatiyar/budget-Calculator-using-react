import AddExpense from "./Component/AddExpence";
import Budget from "./Component/Budget";
import Expenses from "./Component/Expenselist";
import Remaining from "./Component/Remaining";
import Spend from "./Component/Spend";
import { AppProvider } from "./Context/AppContext";
function App() {
  return (
    <AppProvider>
      <div className="bg-gray-100 min-h-screen flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-8 flex justify-center">
          My Budget Planner
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Budget />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Remaining />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Spend />
          </div>
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-center">Expenses</h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Expenses />
        </div>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-center">
          Add Expense
        </h3>
        <div className="bg-white rounded-lg shadow-md p-6">
          <AddExpense />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
