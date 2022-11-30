import {Button, Table} from "antd";
import React from "react";
import {MailOutlined} from "@ant-design/icons";
import {child, get, getDatabase, onValue, ref} from "firebase/database";
import styled from "styled-components";

const OrderManagementStyles = styled.div`
  .ant-table-content > table > tbody > tr.pending {
    background-color: rgba(0, 122, 255, 0.4);
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
        <Button className="flex items-center hover:bg-blue-500 hover:text-white" icon={<MailOutlined />}>
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
      <div className="bg-no-repeat bg-cover bg-center flex w-full justify-between">
        <div className="flex justify-around items-center bg-amber-400 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
            <div className="text-center">
                <p className="font-bold text-black text-[16px]">Tổng số đơn hàng</p>
                <p className="text-2xl hover:text-white cursor-pointer">25</p>
            </div>
            {/* <AiOutlinePayCircle className="w-10 h-10 text-white"/> */}
        </div>
        <div className="flex justify-around items-center bg-green-500 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
            <div className="text-center">
                <p className="font-bold text-white text-[16px]">Tổng doanh thu</p>
                <p className="text-2xl hover:text-white cursor-pointer">$3,448</p>
            </div>
            {/* <AiOutlineShoppingCart className="w-10 h-10 text-white"/> */}
        </div>
        <div className="flex justify-around items-center bg-green-500 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
            <div className="text-center">
                <p className="font-bold text-white text-[16px]">Hàng tồn kho</p>
                <p className="text-2xl hover:text-white cursor-pointer">5,202</p>
            </div>
            {/* <AiOutlineShoppingCart className="w-10 h-10 text-white"/> */}
        </div>
      </div>
      <Table
        className="mt-10"
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
