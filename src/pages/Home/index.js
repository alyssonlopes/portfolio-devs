import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import DevList from "../../components/DevList";
import DevItem from "../../components/DevList/DevItem";
import SubHeader from "../../components/SubHeader";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      devsList: [],
    };
  }

  handleChange = (evt) => {
    const text = evt.target.value;
    console.log(text);
  };

  async componentDidMount() {
    console.log("componentDidMount");

    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();

    const devsList = data.results.map((result) => {
      return {
        name: `${result.name.first} ${result.name.last}`,
        photo: result.picture.thumbnail,
        expertise: result.email,
      };
    });

    this.setState({
      isLoading: false,
      devsList,
    });

    // fetch("https://randomuser.me/api/?results=5")
    // .then((response) => response.json())
    // .then((data) => {
    //   const devsList = data.results.map((result) => {
    //     return {
    //       name: `${result.name.first} ${result.name.last}`,
    //       photo: result.picture.thumbnail,
    //       expertise: result.email,
    //     };
    //   });

    //   this.setState({
    //     isLoading: false,
    //     devsList,
    //   });
    // });
  }

  render() {
    console.log("render");
    return (
      <>
        {/* Header */}
        <Header title="DEVS" />
        {/* SubHeader */}
        <SubHeader
          title="Portfólios"
          description="As melhores pessoas desenvolvedoras estão aqui!"
        />
        {/* Search */}
        <Search onChange={this.handleChange} />
        {/* List */}
        {this.state.isLoading && "Loading.."}
        {!this.state.isLoading && (
          <DevList>
            {this.state.devsList.map((dev) => (
              <DevItem
                name={dev.name}
                photo={dev.photo}
                expertise={dev.expertise}
              />
            ))}
          </DevList>
        )}
      </>
    );
  }
}

export default Home;
