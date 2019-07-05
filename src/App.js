import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Action from './components/Modal';
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
     <Navbar />
     <Search />
     <Action />   
    </div>
    );
  }
}

export default App;
