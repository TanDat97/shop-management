import React from "react";
import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const CreateSearch = (props) => {
  const {
    isShowKeyword = true,
    isShowCreate = true,
    size = "medium",
    textCreate = "Create",
    onClickCreate = () => {},
    onSearch = () => {},
  } = props;

  return (
    <div className="portal">
      {isShowKeyword && (
        <Input.Search
          placeholder='Keyword'
          allowClear
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      )}
      &nbsp;
      {isShowCreate && (
        <Button
          icon={<PlusOutlined />}
          type="primary"
          size={size}
          onClick={onClickCreate}
        >
          {textCreate}
        </Button>
      )}
    </div>
  );
};

export default CreateSearch;
