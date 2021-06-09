import { useState, useEffect } from "react";
import { getMembers } from "../actions/memberActions";
import { setMembersDatas } from "../presenter/memberPresenter";
import MembersContainer from "../ui/MembersContainer";

export default function MemberManager() {
  const [argonauts, setArgonauts] = useState([{}]);
  console.log(argonauts);

  useEffect(() => {
    getMembers()
      .then((response) => setArgonauts(response))
      .catch((error) => console.error(error));
  }, []);

  const membersDatas = setMembersDatas(argonauts);
  return <MembersContainer membersDatas={membersDatas} />;
}
