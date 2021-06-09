//* CORE */
import PropTypes from "prop-types";

function MemberCard({ member }) {
  return <td className="member-item">{member}</td>;
}
MemberCard.propTypes = { member: PropTypes.string };

export default MemberCard;
