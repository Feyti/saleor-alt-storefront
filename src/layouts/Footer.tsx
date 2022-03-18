import React from "react";
import { Typography, Row, Col } from "antd";
import { useIntl } from "umi";

const Footer: React.FC = () => {
  const intl = useIntl();
  return (
    <Row justify="center">
      <Col>
        <Typography.Text className="text-center">
          Feyit Drug Shop @ 2022
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default Footer;
