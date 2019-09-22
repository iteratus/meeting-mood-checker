import React, { Component, createContext } from 'react';

const Context = createContext({
  newSession: () => {},
  session: '',
  values: {},
});

export class ContextProvider extends Component {
  newSession = () => {
    this.setState({ session: '' });
  };

  state = {
    newSession: this.newSession,
    session: '',
    values: {},
  };

  render() {
    return (
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
    );
  }
}

export const ContextConsumer = Context.Consumer;
