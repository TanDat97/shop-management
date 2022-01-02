import React from 'react';
import { Alert } from 'antd';
import './index.scss';

const Home = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Alert
          message='消息提示的文案1'
          description='消息提示的辅助性文字介绍消息提示的辅助性文，字介绍消息提示的辅助性文字介绍'
          type='info'
          showIcon
        />
      </div>
    </div>
  );
};

export default Home;
