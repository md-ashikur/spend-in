'use client';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
      
      },
      {
        key: '1-2',
        label: 'Item 2',
        
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub5',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
      
      },
      {
        key: '1-2',
        label: 'Item 2',
        
      },
    ],
  },
];
const Navbar = () => {

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
  return (

      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          padding: '0',
        }}
      >
        
        <Menu onClick={onClick} style={{ width: '100%' }} mode="horizontal" items={items} />
      </Header>
     
    
  );
};

export default Navbar;