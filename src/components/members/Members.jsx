import { useState, useEffect } from "react";
import Axios from "axios";
import MemberCard from "./MemberCard";
import "./style/members.css";

export default function Members() {
  const [members, setMembers] = useState([{}]);
  const [formatMembers, setFormatMembers] = useState([{}]);
  const [columns1, setColumns1] = useState([]);
  const [columns2, setColumns2] = useState([]);
  const [columns3, setColumns3] = useState([]);

  const extractToColumn = (members) => {
    const crew = [];
    for (let index = 0; index < members.length; index++) {
      let column = 1;
      return members.map((x) => {
        if (column <= 3) {
          crew.push({ name: x.name, column: column });
          column++;
          setFormatMembers(crew);
        } else {
          column = 1;
        }
        return column;
      });
    }
  };

  const getMembers = async () => {
    const url = await `${process.env.REACT_APP_HOST}/members`;
    const options = {
      method: "GET",
      withCredentials: true,
      url: url,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": [
          "GET",
          "POST",
          "PATCH",
          "PUT",
          "DELETE",
        ],
        "Access-Control-Allow-Headers": [
          "Origin",
          "Content-Type",
          "X-Auth-Token",
        ],
      },
    };
    return await Axios(options)
      .then((r) => {
        setMembers(r.data);
      })
      .catch((e) => console.error(e));
  };

  const sortMembersByColumnNum = (num) => {
    const filtered = formatMembers
      .filter((member) => member.column === num)
      .map((member) => member.name);
    return filtered;
  };

  useEffect(() => {
    getMembers();
  }, []);

  useEffect(() => {
    setColumns1(sortMembersByColumnNum(1));
    setColumns2(sortMembersByColumnNum(2));
    setColumns3(sortMembersByColumnNum(3));
  }, [formatMembers]);

  useEffect(() => {
    extractToColumn(members);
  }, [members]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Membres de l'équipage</th>
        </tr>
      </thead>
      <tbody>
        <tr className={`col-${1}`}>
          {columns1.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </tr>
        <tr className={`col-${2}`}>
          {columns2.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </tr>
        <tr className={`col-${3}`}>
          {columns3.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </tr>
      </tbody>
    </table>
  );
}
