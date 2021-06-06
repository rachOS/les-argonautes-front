//* CORE */
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer>
      <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
    </footer>
  );
}
Footer.propTypes = { props: PropTypes.node };

export default Footer;
