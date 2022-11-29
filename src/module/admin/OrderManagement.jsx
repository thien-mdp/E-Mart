import {Button, Table} from "antd";
import React from "react";
import {MailOutlined} from "@ant-design/icons";
import {child, get, getDatabase, onValue, ref} from "firebase/database";
import styled from "styled-components";

const OrderManagementStyles = styled.div`
  .ant-table-content > table > tbody > tr.pending {
    background-color: orange;
  }
`;
const OrderManagement = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      render: (text, record) => {
        const dataCart = JSON.parse(record?.listItems);
        return (
          dataCart &&
          dataCart.map((item) => {
            return (
              <div className="flex items-center flex-1 flex-wrap gap-3 mb-3  ">
                <img
                  src={item?.image}
                  style={{width: "100px", height: "100px"}}
                  alt="img"
                />
                <div>
                  <p>{`${item?.title} (x${item?.amount})`}</p>
                </div>
              </div>
            );
          })
        );
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text, record) => <span>{record.amount}</span>,
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      render: (text, record) => <span>{record?.fullname}</span>,
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
      render: (text, record) => (
        <Button className="flex items-center" icon={<MailOutlined />}>
          Send
        </Button>
      ),
    },
  ];
  React.useEffect(() => {
    setLoading(true);
    const dbRef = ref(getDatabase());

    onValue(child(dbRef, `orders/`), (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArr = Object.keys(data).map((key) => ({
          ...data[key],
          key: key,
        }));

        setData(dataArr);
      } else {
        setData([]);
      }
      setLoading(false);
    });
  }, []);

  return (
    <OrderManagementStyles>
      <Table
        loading={loading}
        rowClassName={(record, index) =>
          record.status === "pending" ? "pending" : "approved"
        }
        dataSource={data}
        columns={columns}
      />
    </OrderManagementStyles>
  );
};

export default OrderManagement;
