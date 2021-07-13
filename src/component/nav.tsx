import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined, EditOutlined } from "@ant-design/icons";

const Nav = () => {
  return (
    <Breadcrumb
      style={{ marginLeft: "40px", marginTop: "20px" }}
      className="navItem"
    >
      <Breadcrumb.Item className="navItem">
        <Link to="/">
          <HomeOutlined style={{ color: "#326fa8" }} className="navItem" />
          <span> Profile </span>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="navItem">
        <Link to="./edit">
          <EditOutlined style={{ color: "#326fa8" }} className="navItem" />
          <span>Profile Edit</span>
        </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default Nav;
