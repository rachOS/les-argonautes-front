import PropTypes from "prop-types";
import Members from "../members/Members";
import Form from "../form/Form";

function Main(props) {
  return (
    <main>
      <Form />
      <Members />
    </main>
  );
}
Main.propTypes = { props: PropTypes.node };

export default Main;
