import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" />
        </label>
        <label>
          Sobrenome:
          <input type="text" name="lastname" />
        </label>
        <label>
          Especialidade:
          <select name="expertise">
            <option value="" selected disabled>
              Selecione..
            </option>
            <option value="React Developer">React Developer</option>
            <option value="Java Developer">Java Developer</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Form;
