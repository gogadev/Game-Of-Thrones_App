import React, { Component } from "react";
import axios from "axios";

import Header from "./components/header/Header";
import Characters from "./components/characters/Characters";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNum: 1,
      characters: [],
    };
  }

  componentDidMount = () => {
    this.getCharacters();
  };

  getCharacters = async () => {
    const res = await axios.get(
      `https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNum}&pageSize=10`
    );
    this.setState({
      characters: res.data,
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Characters characters={characters} />
      </React.Fragment>
    );
  }
}

export default App;
