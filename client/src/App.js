import React, { Component } from 'react';
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'
import GetTodo from './components/GetTodo'
import { Provider } from 'react-redux'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
            <div className="header">
              <Header />
              <AddTodo />
            </div>
            <ListTodos />
            <div>
              <GetTodo/>
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;
