import MemberCard from "./MemberCard";
import PropTypes from "prop-types";
import { useCallback } from "react";

import "./style/members.css";
import Column from "../../column/ui/Column";

export default function MembersContainer({ membersDatas }) {
  const { argonauts, normalize } = membersDatas;
  const getMemberPerGroupNumber = useCallback(
    (num) => {
      return normalize(argonauts).filter((member) => member.group === num);
    },
    [argonauts]
  );
  console.log(normalize(argonauts));
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Membres de l'équipage</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((col, index) => (
          <Column key={index}>
            {getMemberPerGroupNumber(col).map((member) => (
              <MemberCard memberName={member.name} group={member.group} />
            ))}
          </Column>
        ))}
      </tbody>
    </table>
  );
}

MembersContainer.propTypes = { membersDatas: PropTypes.object };
