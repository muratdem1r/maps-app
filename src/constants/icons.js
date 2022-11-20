import { Col, Row } from "antd";

export const icons = [
  {
    value: "location.png",
    label: (
      <Row>
        <Col span={8} style={{ fontSize: "1.2rem" }}>
          Location
        </Col>
        <Col offset={8} span={8}>
          <img src="marker/black/location.png" alt="location" width={25} />
        </Col>
      </Row>
    ),
  },
  {
    value: "pin.png",
    label: (
      <Row>
        <Col span={8} style={{ fontSize: "1.2rem" }}>
          Pin
        </Col>
        <Col offset={8} span={8}>
          <img src="marker/black/pin.png" alt="pin" width={25} />
        </Col>
      </Row>
    ),
  },
  {
    value: "point.png",
    label: (
      <Row>
        <Col span={8} style={{ fontSize: "1.2rem" }}>
          Point
        </Col>
        <Col offset={8} span={8}>
          <img src="marker/black/point.png" alt="point" width={25} />
        </Col>
      </Row>
    ),
  },
  {
    value: "info.png",
    label: (
      <Row>
        <Col span={8} style={{ fontSize: "1.2rem" }}>
          Info
        </Col>
        <Col offset={8} span={8}>
          <img src="marker/black/info.png" alt="info" width={25} />
        </Col>
      </Row>
    ),
  },
];
