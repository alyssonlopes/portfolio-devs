import React from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import DevList from "../../components/DevList";
import DevItem from "../../components/DevList/DevItem";
import SubHeader from "../../components/SubHeader";

class Home extends React.Component {
  handleChange = (evt) => {
    const text = evt.target.value;
    console.log(text);
  };

  render() {
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

        <DevList>
          <DevItem
            photo={"https://i.pravatar.cc/100?img=1"}
            name="Ana Lopes"
            expertise="React Developer"
          />
          <DevItem
            photo={"https://i.pravatar.cc/100?img=2"}
            name="Silvia Luiza"
            expertise="React Developer"
          />
          <DevItem
            photo={"https://i.pravatar.cc/100?img=3"}
            name="Caio Banguela"
            expertise="React Developer"
          />
          <DevItem
            photo={"https://i.pravatar.cc/100?img=4"}
            name="Harry Potter"
            expertise="React Developer"
          />
        </DevList>
      </>
    );
  }
}

export default Home;
