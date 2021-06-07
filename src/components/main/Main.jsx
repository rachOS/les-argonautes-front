import PropTypes from "prop-types";
import Axios from "axios";
import { useState, useEffect } from "react";

function Main(props) {
  const [test, setTest] = useState({});

  const testFn = () => {
    const url = `${process.env.REACT_APP_HOST}`;
    return Axios.get(url)
      .then((r) => r.data)
      .then((data) => setTest(data));
  };
  useEffect(() => {
    testFn();
  }, []);

  return (
    <main>
      {test.title}
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Envoyer</button>
      </form>

      {/* <Form/> */}
      {/* <Members/> */}
      <h2>Membres de l'équipage</h2>
      <section className="member-list">
        <div className="member-item">Eleftheria</div>
        <div className="member-item">Gennadios</div>
        <div className="member-item">Lysimachos</div>
      </section>
    </main>
  );
}
Main.propTypes = { props: PropTypes.node };

export default Main;
