import React from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

const Service = ({ service, handleCart }) => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            <ul>
              <li>
                <strong>Language:</strong> {service.language}
              </li>
              <li>
                <strong>Price:</strong> {service.price}
              </li>
              <li>
                <strong>Coder:</strong> {service.coder}
              </li>
            </ul>
            <button
              onClick={() => {
                handleCart(service);
              }}
              data-id={service._id}
            >
              Add to Cart
            </button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Service;