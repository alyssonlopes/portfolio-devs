// - Cabeçalho
//     - Seta
//     - Titulo
//     - Inicio
//     - Contato
// - Sobre mim
//     - Titulo
//     - Descrição
// - Imagem Perfil
// - Minhas Experiências
//     - Função
//     - Instituição
// - Projetos
//     - NomeProjeto
//     - Descrição.

import React from "react";
import Header from "../../components/Header";

class Perfil extends React.component {
  render() {
    return (
      <>
        {/*Header*/}
        <header>
          Super Dev
          <button>Início</button>
          <button>Contato</button>
        </header>
        <div>Sobre</div>
      </>
    );
  }
}

export default Perfil;
