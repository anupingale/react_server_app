import React, { Component } from 'react';
import './App.css';

const showUser = function() {
  fetch('/listen')
    .then(res => res.text())
    .then(text => alert(text));
};

const Form = function() {
  return (
    <form>
      <input type="text" name="username" />
      <input type="submit" value="submit" name="submit" onClick={showUser} />
    </form>
  );
};

class App extends Component {
  render() {
    return <Form />;
  }
}

export default App;
