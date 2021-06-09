import PropTypes from "prop-types";

function MemberCard({ memberName }) {
  return <td className="member-item">{memberName}</td>;
}
MemberCard.propTypes = { member: PropTypes.string };

export default MemberCard;
