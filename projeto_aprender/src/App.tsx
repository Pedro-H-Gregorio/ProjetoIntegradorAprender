import React from 'react';
import {Layout, Menu} from 'antd'
import menuOptions from './MenuOptions.tsx'

const {Header, Footer, Sider, Content} = Layout

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "rgb(255, 255, 255)",
  height: "15vh",
  backgroundColor: '#3ba0e9',
  textTransform: "capitalize",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  fontSize: "25px",
  justifyContent: "end",
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: "75vh",
  lineHeight: '10vh',
  color: '#fff',
  backgroundColor: "rgb(125, 188, 234)",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '10vh',
  width:'30vw',
  color: '#fff',
  backgroundColor: "rgb(72, 139, 189)",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  padding:"0rem"
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '10vh',
  color: '#fff',
  backgroundColor: '#3ba0e9',
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
};

function App() {
  return (
    <Layout>
      <Header style={headerStyle}>Minhas Informações</Header>
      <Layout>
      <Sider style={siderStyle}>
        <Menu defaultSelectedKeys={['1']} mode="inline" style={{ width: '10vw' }}
      items={menuOptions}/>
      </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>@enrique_cost</Footer>
    </Layout>
  );
}

export default App;
