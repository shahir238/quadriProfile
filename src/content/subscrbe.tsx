import { Button } from "antd";
import { useState } from "react";
import "./subscribeBtn.css";
import { CheckOutlined } from "@ant-design/icons";

const Subscrbe = () => {
  const [subscribeType, setSubscribeType] = useState(false);
  return (
    <Button
      onClick={() => setSubscribeType(!subscribeType)}
      type="primary"
      danger
    >
      {subscribeType === true ? "Subscribed" : "Subscribe"}
      <CheckOutlined
        className={subscribeType === true ? "subscribed" : "subscribe"}
      />
    </Button>
  );
};
export default Subscrbe;
