import React, { Component } from "react";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import "./styles/App.css";

class App extends Component {
  async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }

  render() {
    return (
      <div className='App'>
        <Navbar title='GithubFinder' icon='fab fa-github' />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
