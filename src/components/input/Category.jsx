import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
const { Option } = Select;

import { fetchListCommonCategory } from '@/api/category';

const Category = (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    getBaseData();
  }, []);

  const getBaseData = async () => {
    setLoading(true);
    const response = await fetchListCommonCategory();
    setData(response.data);
    setLoading(false);
  };

  const {
    className = '',
    label = 'Category',
    keyValue = 'category_id',
    show = 'name',
    mode,
    value,
    onChange,
    optionFilterProp = 'children',
    placeholder = '',
  } = props;

  return (
    <div className={className}>
      <Select
        loading={loading}
        mode={mode}
        value={value}
        onChange={onChange}
        showSearch
        allowClear
        style={{ width: '100%', minWidth: '120px' }}
        placeholder={placeholder || label}
        optionFilterProp={optionFilterProp}
        filterOption={(input, option) => option[optionFilterProp].toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {data.map((e, index) => (
          <Option value={e[keyValue]} key={e[keyValue]} label={e[show]}>
            {e[show]}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default Category;
