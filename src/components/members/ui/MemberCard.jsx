import PropTypes from "prop-types";

function MemberCard({ member, group }) {
  return (
    <td className="member-item">
      {member}
      {group}
    </td>
  );
}
MemberCard.propTypes = { member: PropTypes.string };

export default MemberCard;
