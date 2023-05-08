import React from "react";
import { Layout, Menu } from "antd";
import items from "./MenuOptions.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Idade from "./pages/Idade.tsx";
import Nome from "./pages/Nome.tsx";
import MaisInformacoes from "./pages/MaisInformacoes.tsx";
import Profissional from "./pages/Profissional.tsx";
import Portifolio from "./pages/Portifolio.tsx";



const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "rgb(255, 255, 255)",
  height: "15vh",
  width: "100vw",
  backgroundColor: "#3ba0e9",
  textTransform: "capitalize",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  fontSize: "25px",
  justifyContent: "end",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  height: "75vh",
  width: "75vw",
  lineHeight: "10vh",
  color: "#fff",
  backgroundColor: "rgb(125, 188, 234)",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "10vh",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  height: "10vh",
  width: "100vw",
  color: "#fff",
  backgroundColor: "#3ba0e9",
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
        <BrowserRouter>
          <Sider style={siderStyle} width={"15vw"}>
            <Menu
              style={{ minHeight: "75vh" }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              // onClick={(e: any) => Navigate(rotas[e.key])}
              mode="inline"
              items={items}
            />
          </Sider>  
          <Content style={contentStyle}>
            <Routes>
              <Route path="/" element={<Nome />} />
              <Route path="/idade" element={<Idade />} />
              <Route path="/mais_informacoes" element={<MaisInformacoes />} />
              <Route path="/profissional" element={<Profissional />} />
              <Route path="/portifolio" element={<Portifolio />} />
            </Routes>
          </Content>
        </BrowserRouter>
      </Layout>
      <Footer style={footerStyle}>@enrique_cost</Footer>
    </Layout>
  );
}

export default App;
