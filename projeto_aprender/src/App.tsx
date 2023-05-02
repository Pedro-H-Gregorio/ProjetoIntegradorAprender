import React from 'react';
import {Layout, Menu} from 'antd'
import menuOptions from './MenuOptions.tsx'

const {Header, Footer, Sider, Content} = Layout

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "rgb(255, 255, 255)",
  height: "15vh",
  width:"100vw",
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
  width:"75vw",
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
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '10vh',
  width:"100vw",
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
      <Sider style={siderStyle} width={'25vh'}>
        <Menu defaultSelectedKeys={['1']} mode="inline" 
        style={{minHeight:'75vh',     
              display: "flex",
              alignContent: "flex-start",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              flexDirection: "column",
              antMenuSubmenuTitle:{with:'100%'},}}
      items={menuOptions}/>
      </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
      <Footer style={footerStyle}>@enrique_cost</Footer>
    </Layout>
  );
}

export default App;
