import PropTypes from "prop-types";
import "./style/columns.css";

function Column({ children }) {
  return <tr className="column">{children}</tr>;
}
Column.propTypes = { column: PropTypes.array };

export default Column;
