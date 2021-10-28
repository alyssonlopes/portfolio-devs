import React from "react";
import Header from "../../components/Header";
import DevItem from "../../components/DevList/DevItem";
import { Link } from "react-router-dom";

class Perfil extends React.Component {
  render() {
    return (
      <>
        {/*Header*/}
        <Header title="Super Dev">
          <Link to="/register">
            <button>Criar</button>
          </Link>
          <Link to="/">
            <button>Início</button>
          </Link>
        </Header>
        <DevItem {...this.props.location.state.dev} />
      </>
    );
  }
}

export default Perfil;
