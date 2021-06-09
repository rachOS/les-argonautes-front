import PropTypes from "prop-types";
import MembersManager from "../members/manager/memberManager";
import Form from "../form/Form";

function Main(props) {
  return (
    <main>
      <Form />
      <MembersManager />
    </main>
  );
}
Main.propTypes = { props: PropTypes.node };

export default Main;
