import { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* Header */}
        <Header title="Register">
          <button onClick={() => this.props.history.goBack()}>Voltar</button>
          <Link to="/">
            <button>Início</button>
          </Link>
        </Header>

        {/* SubHeader */}
        <SubHeader title={"Cadastro"} description={"Cadastre um novo dev"} />

        {/* Formulário */}
        <Form />
      </>
    );
  }
}

export default Register;
