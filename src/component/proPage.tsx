import { Card, Row, Col, Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "./proPage.css";
import Subscrbe from "../content/subscrbe";
import Nav from "./nav";

interface Iprops {
  id: number;
  email: string;
  phone: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  firstName: string;
  lastName?: string;
  companyName: string;
  address?: string;
  subscription?: boolean;
  isMember?: boolean;
  member?: string;
}

const ProPage = (props: Iprops) => {
  return (
    <div className="nav">
      <Nav />

      <Card style={{ width: "100%", height: "100%" }}>
        <Row>
          <Col span={9}>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />
            <span
              className="userName"
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              {props.companyName}
            </span>
          </Col>
          <Col span={12}>
            <h1>User Info</h1>
            <p style={{ fontSize: "18px" }}>
              <label>User:</label>
              <span style={{ padding: "10px" }}>{props.firstName}</span>
              <span>{props.lastName}</span>
            </p>

            <p style={{ fontSize: "18px" }}>
              <label>User id:</label>
              <span style={{ padding: "10px" }}>{props.id}</span>
            </p>
            <p style={{ fontSize: "18px" }}>
              <label>Contact:</label>
              <span style={{ padding: "10px" }}>{props.phone}</span>
            </p>
            <p style={{ fontSize: "18px" }}>
              <label>Email:</label>
              <span style={{ padding: "10px" }}>{props.email}</span>
            </p>

            <p style={{ fontSize: "18px" }}>
              <label>Address:</label>
              <span style={{ padding: "10px" }}>{props.address}</span>
            </p>

            {
              // subscribe Button
            }
            <Subscrbe />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default ProPage;
