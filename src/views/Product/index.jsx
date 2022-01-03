import React, { useState, useEffect } from 'react';

import Notification from '@/components/utils/Notification';
import Pagination from '@/components/base/Pagination';
import Table from './components/list/table';
import Filter from './components/list/filter';

import { fetchList, deleteProduct } from '@/api/product';

const listQuery = {
  category_id: undefined,
  page: 1,
  limit: 10,
  keyword: undefined,
  sort_by: 'product_id',
  sort_dir: 'ASC',
};

const ListProduct = () => {
  const [query, setQuery] = useState(listQuery);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData(listQuery);
  }, []);

  const getData = async (q = query) => {
    setLoading(true);
    const response = await fetchList(q);
    setList(response.data.items);
    setTotal(response.data.total);
    setLoading(false);
  };

  const handleChange = (key, value, resetPage = false) => {
    console.log(key, value, )
    const newQuery = JSON.parse(JSON.stringify(query));
    newQuery[key] = value;
    if (resetPage) newQuery.page = 1;
    setQuery(newQuery);
    getData(newQuery);
  };

  const handleSort = (sort_by, sort_dir) => {
    const newQuery = JSON.parse(JSON.stringify(query));
    newQuery.sort_by = sort_by;
    newQuery.sort_dir = sort_dir;
    newQuery.page = 1;
    setQuery(newQuery);
    getData(newQuery);
  };

  const onDelete = async (data) => {
    try {
      setLoading(true);
      const result = await deleteProduct(data.id);
      if (result.code === 200) {
        Notification({ message: 'Delete Success', type: 'success' });
        await getData();
      }
    } catch (err) {
      console.log(err);
      Notification({ message: 'Some thing went wrong!', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='page-box'>
      <Filter query={query} onChange={handleChange} />
      <br />
      <Table loading={loading} data={list} onChange={handleChange} onSort={handleSort} onDelete={onDelete} />
      <br />
      <Pagination current={query.page} total={total} onChange={handleChange} />
    </div>
  );
};

export default ListProduct;
