import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Space, Table, Button } from "antd";

// Actions
import { deleteFeature } from "../../store/actions";

function FeaturesTable() {
  const dispatch = useDispatch();
  const { tableData } = useSelector((state) => state.mapReducer);

  const deleteClickHandler = (id) => {
    dispatch(deleteFeature(id));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Coordinates",
      dataIndex: "coords",
      key: "coords",
      render: (value) => `[ ${value[0].toFixed(2)} , ${value[1].toFixed(2)} ]`,
    },
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (value, record) => {
        return (
          <div
            style={{
              WebkitMaskBoxImage: `url(${value})`,
              backgroundColor: `rgb(${record.color[0]},${record.color[1]},${record.color[2]})`,
              width: "40px",
              height: "40px",
            }}
          ></div>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => {
              deleteClickHandler(record.id);
            }}
            type="primary"
            danger
          >
            DELETE
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={tableData}
      pagination={false}
    />
  );
}

export default FeaturesTable;
