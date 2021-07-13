import { Card, Form, Input, Button, Upload, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./edit.css";
import { Row, Col } from "antd";
import { FC } from "react";
import Nav from "./nav";

const Edit: FC = () => {
  const onFinish = (values: string) => {
    console.log("user info:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Nav />
      <Card className="editCard">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col span={24} className="editCol">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ message: "Please input your first name!" }]}
              >
                <Input className="editInput" />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ message: "Please input your last name!" }]}
              >
                <Input className="editInput" />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[{ message: "Please input your address!" }]}
              >
                <Input className="editInput" />
              </Form.Item>

              <Form.Item
                label="Company Name"
                name="companyName"
                rules={[{ message: "Please input your company name!" }]}
              >
                <Input className="editInput" />
              </Form.Item>

              <Form.Item
                label="Contact"
                name="contact"
                rules={[{ message: "Please input your contact!" }]}
              >
                <Input className="editInput" type="number" />
              </Form.Item>

              <Form.Item label="Photo" name="photo">
                <Space
                  direction="vertical"
                  style={{ width: "100%" }}
                  size="large"
                >
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                  >
                    <Button icon={<UploadOutlined />}>Upload </Button>
                  </Upload>
                </Space>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button className="editBtn" type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Edit;
