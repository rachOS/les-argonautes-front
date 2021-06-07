//* CORE */
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Members() {
  const [members, setMembers] = useState([{}]);
  console.log(members);

  const getMembers = async () => {
    const url = await `${process.env.REACT_APP_HOST}/members`;
    return await Axios.get(url)
      .then((r) => r.data)
      .then((data) => setMembers(data));
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <h2>Membres de l'équipage</h2>
      <section className="member-list">
        {members.map((member, index) => (
          <div key={index} className="member-item">
            {member.name}
          </div>
        ))}
      </section>
    </>
  );
}
