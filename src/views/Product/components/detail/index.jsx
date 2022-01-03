import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import slug from 'slug';

import { Form, Input, Row, Col, Skeleton, Spin } from 'antd';
import SubmitBack from '@/components/action/SubmitBack';
import Notification from '@/components/utils/Notification';
import Category from '@/components/input/Category';

import { fetchDetail, create } from '@/api/product';

const defaultForm = {
  id: undefined,
  name: '',
  slug: '',
  description: '',
  type: '',
  price: '',
  category_id: '',
};

const DetailProduct = (props) => {
  const { isEdit } = props;
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(defaultForm);
  const location = useLocation();
  const history = useHistory();
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEdit) {
      const queryParams = new URLSearchParams(location.search);
      const product_id = queryParams.get('product_id');
      if (product_id) {
        getData(product_id);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const getData = async (product_id) => {
    try {
      setLoading(true);
      const response = await fetchDetail(product_id);
      const detail = { ...defaultForm, ...response.data };
      setFormData(detail);
    } catch (err) {
      Notification({ message: err, type: 'error' });
      history.push('/product/list');
    } finally {
      setLoading(false);
    }
  };

  const onFinish = async (value) => {
    try {
      setLoading(true);
      const data = { ...formData, ...value };
      data.slug = slug(data.name);
      const result = await create(isEdit, data);
      Notification({ message: 'Success', type: 'success' });
      history.push('/product/list');
    } catch (err) {
      Notification({ message: 'Some thing went wrong!', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      {!loading ? (
        <Form form={form} layout='vertical' initialValues={formData} onFinish={onFinish}>
          <SubmitBack onClickBack={() => history.push('/product/list')} />
          <div className='form-container'>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label='Name' name='name' rules={[{ required: true, message: 'Please input product name!' }]}>
                  <Input placeholder='Name' allowClear={true} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='Price' name='price' rules={[{ required: true, message: 'Please input product price!' }]}>
                  <Input type='number' placeholder='Price' allowClear={true} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='Category' name='category_id'>
                  <Category placeholder='Category' />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label='Description' name='description'>
                  <Input placeholder='Description' allowClear={true} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Form>
      ) : (
        <>
          <Skeleton active />
        </>
      )}
    </Spin>
  );
};

export default DetailProduct;
