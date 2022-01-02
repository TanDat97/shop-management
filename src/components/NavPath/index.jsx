import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

import './index.scss';

const defaultProps = {
  data: [],
};

const propTypes = {
  data: PropTypes.array,
};

const NavPath = (props) => {
  const { data } = props;
  const bread = data.map((item) => {
    return <Breadcrumb.Item key={'bc-' + item.key}>{item.name}</Breadcrumb.Item>;
  });
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      <Breadcrumb.Item key='bc-0'>Home</Breadcrumb.Item>
      {bread}
    </Breadcrumb>
  );
};

NavPath.propTypes = propTypes;
NavPath.defaultProps = defaultProps;

export default NavPath;
