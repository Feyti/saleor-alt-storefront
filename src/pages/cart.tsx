import React from "react";
import {
  Typography,
  Col,
  Row,
  List,
  Button,
  InputNumber,
  Card,
  Select,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useIntl, Link } from "umi";
import VSpacing from "@/components/VSpacing";
import { sampleProduct, sampleAddress } from "@/sampleData";
import AspectRatio from "@/components/AspectRatio";
import { formatPrice } from "@/utils/utils";
import AddressSelector from "@/components/AddressSelector";

const CartPage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "cart.heading" })}
          </Typography.Title>
          <Row gutter={24}>
            <Col span={16}>
              <List
                dataSource={[
                  { ...sampleProduct, id: 1 },
                  { ...sampleProduct, id: 2 },
                ]}
                renderItem={item => {
                  const currency = item.pricing?.priceRange?.start?.gross
                    .currency as string;
                  const minPrice = item.pricing?.priceRange?.start?.gross
                    .amount as number;
                  return (
                    <List.Item key={item.id}>
                      <div className="full-width">
                        <Card>
                          <Row gutter={24}>
                            <Col span={4}>
                              <Link to={`/products/${item.id}`}>
                                <AspectRatio width={1} height={1}>
                                  <img
                                    className="full-width"
                                    alt={item.thumbnail?.alt as string}
                                    src={item.thumbnail?.url}
                                  />
                                </AspectRatio>
                              </Link>
                            </Col>
                            <Col span={20}>
                              <Link to={`/products/${item.id}`}>
                                <Typography.Title level={4}>
                                  {item.name}
                                </Typography.Title>
                              </Link>
                              <Typography.Title level={4}>
                                {formatPrice(currency, minPrice)}
                              </Typography.Title>
                              <div>
                                <Typography.Text>Qty: </Typography.Text>
                                <InputNumber
                                  defaultValue={1}
                                  min={1}
                                  max={10}
                                />
                              </div>
                              <Row justify="end">
                                <Col>
                                  <Button size="small">
                                    <DeleteOutlined /> Delete
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                    </List.Item>
                  );
                }}
              />
            </Col>
            <Col span={8}>
              <Card title={intl.formatMessage({ id: "cart.summary" })}>
                <Row gutter={16}>
                  <Col span={8}>
                    <Typography.Text>
                      {intl.formatMessage({ id: "cart.subtotal" })}:
                    </Typography.Text>
                  </Col>
                  <Col span={16}>
                    <Typography.Text>$60.00</Typography.Text>
                  </Col>
                </Row>
                <VSpacing height={8} />
                <Row gutter={16}>
                  <Col span={8}>
                    <Typography.Text>
                      {intl.formatMessage({ id: "cart.shippingAddress" })}:
                    </Typography.Text>
                  </Col>
                  <Col span={16}>
                    <AddressSelector block value={sampleAddress} />
                  </Col>
                </Row>
                <VSpacing height={8} />
                <Row gutter={16}>
                  <Col span={8}>
                    <Typography.Text>
                      {intl.formatMessage({ id: "cart.shippingMethod" })}:
                    </Typography.Text>
                  </Col>
                  <Col span={16}>
                    <Select
                      className="full-width"
                      placeholder={intl.formatMessage({
                        id: "misc.pleaseSelect",
                      })}
                    >
                      <Select.Option value="1">Standard Shipping</Select.Option>
                      <Select.Option value="2">Priority Shipping</Select.Option>
                    </Select>
                  </Col>
                </Row>
                <VSpacing height={8} />
                <Row gutter={16}>
                  <Col span={8}>
                    <Typography.Text>
                      {intl.formatMessage({ id: "cart.shippingFee" })}:
                    </Typography.Text>
                  </Col>
                  <Col span={16}>
                    <Typography.Text>--</Typography.Text>
                  </Col>
                </Row>
                <VSpacing height={24} />
                <Row gutter={16}>
                  <Col span={8}>
                    <Typography.Text strong>
                      {intl.formatMessage({ id: "cart.total" })}:
                    </Typography.Text>
                  </Col>
                  <Col span={16}>
                    <Typography.Text strong>$60.00</Typography.Text>
                  </Col>
                </Row>
                <VSpacing height={24} />
                <Button
                  id="checkout-btn"
                  block
                  size="large"
                  shape="round"
                  type="primary"
                >
                  {intl.formatMessage({ id: "cart.checkout" })}
                </Button>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

CartPage.title = "cart.title";
export default CartPage;
