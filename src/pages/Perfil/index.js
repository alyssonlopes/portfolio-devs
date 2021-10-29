import React from "react";
import Header from "../../components/Header";
import DevItem from "../../components/DevList/DevItem";
import { Link } from "react-router-dom";

const Perfil = (props) => {
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
      <DevItem {...props.location.state.dev} />
    </>
  );
};

export default Perfil;
