import React from 'react';
import { notification } from 'antd';

const Notification = (props) => {
  const { message = "Success", description, type = 'success' } = props;
  notification[type]({
    message: message,
    description: description,
  });
};

export default Notification;
