import React from "react";
import { Pagination } from "antd";

const PaginationCommon = (props) => {
  const { current = 1, total = 0, size = "default", onChange } = props;

  const handleChange = (page, pageSize) => {
    if (current != page) {
      onChange('page', page, false)
    } else {
      onChange('limit', pageSize, true)
    }
  }

  return (
    <div className="pagination-common">
      <Pagination current={current} total={total} size={size} onChange={handleChange} />
    </div>
  );
};

export default PaginationCommon;
