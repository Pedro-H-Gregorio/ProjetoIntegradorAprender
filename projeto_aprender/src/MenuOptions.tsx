import {
    DesktopOutlined,
    FileOutlined,

    UserOutlined,
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
      getItem('Pessoal', 'sub1', <UserOutlined />, [
        getItem(<NavLink to="/" key="1">Nome</NavLink>, '1'),
        getItem(<NavLink to="/idade" key="2">Idade</NavLink>, '2'),
        getItem(<NavLink to="/mais_informacoes" key="3">Mais Informações</NavLink>, '3'),
      ]),
    getItem(<NavLink to="/profissional" key="4">Profissional</NavLink>, '4', <FileOutlined />),
    getItem(<NavLink to="/portifolio" key="2">Portifólio</NavLink>, '5', <DesktopOutlined />),
  ];

export default items