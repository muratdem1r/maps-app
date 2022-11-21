import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HexColorPicker } from "react-colorful";

import { Select, Divider, Row, Col, Space, Popover } from "antd";
import { DownOutlined } from "@ant-design/icons";

// Actions
import {
  changeMarker,
  changeLayer,
  changeMarkerColor,
} from "store/actions/mapActions";

// Components
import MapWrapper from "components/MapWrapper";
import { mapLayerList } from "constants/mapLayerList";
import { icons } from "constants/icons";

function Map() {
  const dispatch = useDispatch();
  const { marker, markerColor, layer } = useSelector(
    (state) => state.mapReducer
  );

  const selectMarkerHandler = (value) => {
    dispatch(changeMarker(value));
  };
  const selectLayerHandler = (value) => {
    dispatch(changeLayer(value));
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: "flex" }}>
      <div>
        <MapWrapper />
      </div>
      <Divider />

      <Row gutter={[0, 20]} style={{ marginBottom: "2rem" }}>
        <Col xs={24} md={8} lg={6} xxl={4}>
          <Space direction="vertical">
            <h4>Marker's Icon</h4>
            <Select
              placement="topRight"
              defaultValue={marker}
              style={{ width: 200 }}
              onChange={selectMarkerHandler}
              options={icons}
            />
          </Space>
        </Col>
        <Col xs={24} md={8} lg={6} xxl={4}>
          <Space direction="vertical">
            <h4>Map's Style</h4>
            <Select
              placement="topRight"
              defaultValue={layer}
              style={{ width: 200 }}
              onChange={selectLayerHandler}
              options={mapLayerList}
            />
          </Space>
        </Col>
        <Col xs={24} md={8} lg={6} xxl={4}>
          <Space direction="vertical">
            <h4>Color</h4>
            <Popover
              content={
                <HexColorPicker
                  color={markerColor}
                  onChange={(value) => {
                    dispatch(changeMarkerColor(value));
                  }}
                />
              }
              trigger="click"
            >
              <Space style={{ cursor: "pointer" }}>
                <div
                  style={{
                    backgroundColor: markerColor,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
                <DownOutlined style={{ color: markerColor }} />
              </Space>
            </Popover>
          </Space>
        </Col>
      </Row>
    </Space>
  );
}

export default Map;
