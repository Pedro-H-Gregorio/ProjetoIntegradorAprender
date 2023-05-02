import {
    DesktopOutlined,
    FileOutlined,

    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
import React from 'react';

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
        getItem('Nome', '1'),
        getItem('Idade', '2'),
        getItem('Mais informações', '3'),
      ]),
    getItem('Profissional', '4', <FileOutlined />),
    getItem('Portifólio', '5', <DesktopOutlined />),
  ];

export default items