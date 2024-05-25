import PropTypes from "prop-types";

const ViewBudget = (props) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-md font-bold">
        Budget: <span>RS {props.budget}</span>
      </span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        type="button"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
};

ViewBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default ViewBudget;
