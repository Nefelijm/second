import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import { Layout,Row } from 'antd';

const { Header,Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout>
              <Layout>
                  <Header className = "App-header">Practicando CRUD</Header>
                  <Content>
                      <Row>
                          <Form />
                      </Row>
                  </Content>
              </Layout>
          </Layout>
      </div>
    );
  }
}

export default App;
