import { useState } from "react";
import PropTypes from "prop-types";

const EditBudget = ({ budget, handleSaveClick }) => {
  const [value, setValue] = useState(budget);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSave = () => {
    handleSaveClick(value);
  };

  return (
    <div className="flex items-center justify-between">
      <input
        required
        type="number"
        value={value}
        onChange={handleChange}
        className="w-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="button"
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

EditBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
};

export default EditBudget;
