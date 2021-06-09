import PropTypes from "prop-types";

function MemberCard({ memberName, group }) {
  return (
    <td className="member-item">
      {memberName}
      {group}
    </td>
  );
}
MemberCard.propTypes = { member: PropTypes.string };

export default MemberCard;
