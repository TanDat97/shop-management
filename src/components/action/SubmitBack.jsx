import React from 'react';
import { Button } from 'antd';
import { CheckOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const SubmitBack = (props) => {
  const {
    isShowSubmit = true,
    isShowBack = true,
    size = 'medium',
    textSubmit = 'Submit',
    textBack = 'Back',
    onClickSubmit = () => {},
    onClickBack = () => {},
  } = props;

  return (
    <div className='portal'>
      {isShowSubmit && (
        <Button icon={<CheckOutlined />} type='primary' size={size} htmlType='submit' onClick={onClickSubmit}>
          {textSubmit}
        </Button>
      )}
      &nbsp;
      {isShowBack && (
        <Button icon={<ArrowLeftOutlined />} size={size} onClick={onClickBack}>
          {textBack}
        </Button>
      )}
    </div>
  );
};

export default SubmitBack;
