//* CORE */
import { useState } from "react";
import Axios from "axios";

function Form() {
  const [newMember, setNewMember] = useState({});
  console.log(newMember);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const postNewMember = () => {
    const url = `${process.env.REACT_APP_HOST}/members`;
    return Axios.post(url, newMember);
  };

  return (
    <div className="new-member-form">
      <h2>Ajouter un(e) Argonaute</h2>
      <form onSubmit={() => postNewMember()}>
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;
