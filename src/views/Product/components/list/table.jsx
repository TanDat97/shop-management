import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const { Column } = Table;

const TableCommon = (props) => {
  const { data = [], loading = false, onChange, onSort, size = 'medium', onDelete } = props;

  const handleChange = (pagination, filters, sorter, extra) => {
    if (sorter) {
      if (sorter.order === 'ascend') {
        onSort(sorter.field, 'ASC');
      } else if (sorter.order === 'descend') {
        onSort(sorter.field, 'DESC');
      } else {
        onSort('product_id', 'ASC');
      }
    }
  };

  const onClickDelete = (data) => {
    const onOk = () => onDelete(data);
    const content = 'Are you sure want to delete?';
    Confirm({ content, onOk });
  };

  const Confirm = (props) => {
    const { title = 'Warning', content, okText = 'Confirm', cancelText = 'Cancel', onCancel, onOk } = props;
    Modal.confirm({
      title,
      icon: <ExclamationCircleOutlined />,
      content,
      okText,
      cancelText,
      onOk,
      onCancel,
    });
  };

  return (
    <Table rowKey={(record) => record.product_id} dataSource={data} loading={loading} onChange={handleChange} pagination={false}>
      <Column title='ID' dataIndex='product_id' key='product_id' sorter width='50px' render={(text, record) => text} />
      <Column title='Product name' dataIndex='name' key='name' sorter render={(text, record) => text} />
      <Column title='Price' dataIndex='price' key='price' sorter width='200px' render={(text, record) => text} />

      <Column
        title='Actions'
        key='action'
        width='150px'
        fixed='right'
        align='center'
        render={(text, record) => (
          <Space size='middle'>
            <Button className='ant-custom-btn' type='primary' size={size}>
              <Link className='custom-btn primary ant-custom-btn ' size={size} to={'/product/edit?uuid=' + record.uuid}>
                <EditOutlined />
              </Link>
            </Button>
            <Button className='ant-custom-btn' type='danger' size={size} onClick={() => onClickDelete(record)}>
              <DeleteOutlined />
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default TableCommon;
