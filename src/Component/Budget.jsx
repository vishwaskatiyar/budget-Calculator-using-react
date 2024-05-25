import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: parseInt(value),
    });
    setEditing(false);
  };

  return (
    <div className="bg-blue-200 rounded-lg shadow-md p-3">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
