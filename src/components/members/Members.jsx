//* CORE */
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Members() {
  const [members, setMembers] = useState([{}]);
  const [error, setError] = useState({});
  console.log(error);
  console.log("members", members);

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
      .catch((e) => setError(e));
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
