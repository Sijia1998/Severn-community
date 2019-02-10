import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import Layout from './components/layout';
import store from './store';
import styles from './App.less';

class App extends Component {
  render() {
    return <div className={styles['content-inner']}  className="wrapper">
      <Provider store={store}>
        <Layout>123</Layout>
      </Provider>
    </div>;
  }
}

export default App;
