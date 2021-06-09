import PropTypes from "prop-types";
import "./style/columns.css";

function Column({ children }) {
  return <div className="column">{children}</div>;
}
Column.propTypes = { column: PropTypes.array };

export default Column;
