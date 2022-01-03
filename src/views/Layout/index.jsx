import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Route, Redirect } from 'react-router-dom';

import { childRoutes } from '@/route';

import NavPath from '@/components/common/NavPath';
import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';
import Footer from '@/components/common/Footer';

import './index.scss';

const { Content } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navpath } = this.props;

    return (
      <Layout className='ant-layout-has-sider'>
        <Sidebar />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <NavPath data={navpath} />
            <div style={{ minHeight: 360 }}>
              {childRoutes.map((route, index) => (
                <Route key={index} path={route.path} component={route.component} exactly={route.exactly} />
              ))}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  navpath: PropTypes.array,
};

const mapStateToProps = (state) => {
  const { menu } = state;
  return {
    navpath: menu.navpath,
  };
};

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
