import {Button, Table} from "antd";
import React from "react";
import {MailOutlined} from "@ant-design/icons";
import {child, get, getDatabase, onValue, ref} from "firebase/database";
const OrderManagement = () => {
  const [data, setData] = React.useState([]);
  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => <Button icon={<MailOutlined />}>Send</Button>,
    },
  ];
  React.useEffect(() => {
    const dbRef = ref(getDatabase());

    onValue(child(dbRef, `orders/`), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
      } else {
        setData([]);
      }
    });
  }, []);
  console.log(data);
  return (
    <Table
      dataSource={
        data.length >= 0 &&
        data.map((item) => ({...item, key: new Date().getTime()}))
      }
      columns={columns}
    />
  );
};

export default OrderManagement;
