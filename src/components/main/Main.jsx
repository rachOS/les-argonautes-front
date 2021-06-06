import PropTypes from "prop-types";

function Main(props) {
  return (
    <main>
      <h2>Ajouter un(e) Argonaute</h2>
      <form className="new-member-form">
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" placeholder="Charalampos" />
        <button type="submit">Envoyer</button>
      </form>

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
