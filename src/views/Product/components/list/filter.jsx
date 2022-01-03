import React from 'react';
import { useHistory } from 'react-router-dom';

import Category from '@/components/input/Category';
import CreateSearch from '@/components/action/CreateSearch';

const Filter = (props) => {
  const history = useHistory();
  const { query, onChange } = props;

  const clickCreate = () => {
    history.push('/product/create');
  };

  return (
    <div className='filter-container'>
      <div className='filter'>
        <Category value={query.category_id} onChange={onChange} />
      </div>
      <div className='create'>
        <CreateSearch onSearch={(value) => onChange('keyword', value, true)} onClickCreate={clickCreate} />
      </div>
    </div>
  );
};

export default Filter;
