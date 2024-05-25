import PropTypes from "prop-types";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpence = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className=" flex  justify-around items-center py-2">
      <span className="text-lg">{props.name}</span>
      <div className="flex items-center">
        <span className="text-lg font-semibold">{props.cost}</span>
        <TiDelete
          onClick={handleDeleteExpence}
          className="ml-5 text-red-600 cursor-pointer"
        />
      </div>
    </li>
  );
};

ExpenseItem.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
};

export default ExpenseItem;
