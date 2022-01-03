import React from 'react';
import { Layout, Row } from 'antd';
import './index.scss';

const { Header } = Layout;

const commonHeader = () => {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Row type='flex' justify='end' align='middle'></Row>
    </Header>
  );
}

export default commonHeader;
