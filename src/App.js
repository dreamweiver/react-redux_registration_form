import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './store';
import showConfirmationMsg from "./confirmationScreen";
import UserRegistrationForm from "./UserRegistrationForm";
import UserRegistrationLog from "./UserRegistrationLog";
import './App.css';


class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="cont">
          <h1>Register Account</h1>
          <UserRegistrationForm onSubmit={showConfirmationMsg} />
          <UserRegistrationLog form="userRegistrationForm" />
        </div>
      </Provider>
    );
  }
}

export default App;
