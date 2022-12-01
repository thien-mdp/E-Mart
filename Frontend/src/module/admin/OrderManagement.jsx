import {Button, Modal, Table} from "antd";
import React, {useCallback, useEffect, useMemo} from "react";
import {MailOutlined} from "@ant-design/icons";
import {child, get, getDatabase, onValue, ref} from "firebase/database";
import styled from "styled-components";
import {useSelector} from "react-redux";
import EmailForm from "../email/EmailForm";
import {db} from "../../firebase";
import {collection, getDocs} from "firebase/firestore";

const OrderManagementStyles = styled.div`
  .ant-table-content > table > tbody > tr.pending {
    background-color: rgba(0, 122, 255, 0.4);
  }
`;
const OrderManagement = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [allItems, setAllItems] = React.useState([]);
  const [openForm, setOpenForm] = React.useState(false);
  const {orders, loading: isloading} = useSelector(
    (state) => state.orderReducer
  );

  const [selectedOrder, setSelectedOrder] = React.useState(null);
  const [currentId, setCurrentId] = React.useState(null);
  const handleOpenForm = (id) => {
    setOpenForm(true);
    setCurrentId(id);
    setSelectedOrder(
      orders.find((item) => (item.id === id ? item : null))?.key
    );
  };
  useEffect(() => {
    const getAllProduct = async () => {
      const productsCol = collection(db, "products");
      const snapshot = await getDocs(productsCol);
      const list = await snapshot.docs.map((doc) => doc.data());

      setAllItems(list);
    };
    getAllProduct();
  }, []);
  useEffect(() => {
    if (orders.length > 0 && !isloading) {
      const handleScrollPending = () => {
        const pending = document.querySelector("#pending");
        if (pending) {
          pending.scrollIntoView({behavior: "smooth", block: "center"});
        }
      };
      handleScrollPending();
    }
  }, []);
  const handleResetOpenForm = useCallback(() => {
    setOpenForm((prev) => !prev);
    setCurrentId(null);
    setSelectedOrder(null);
  }, []);
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
              <div
                id={record?.status === "pending" ? "pending" : null}
                className="flex items-center flex-1 flex-wrap gap-3 mb-3  "
              >
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
      render: (text, record) => {
        const {listItems} = record;
        const dataCart = JSON.parse(listItems);
        const total = dataCart.reduce((acc, item) => {
          return acc + item.amount;
        }, 0);
        return <span className="text-sm font-medium">{total}</span>;
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (text, record) => {
        const {listItems} = record;
        const dataCart = JSON.parse(listItems);
        const total = dataCart.reduce((acc, item) => {
          return acc + item.price * item.amount;
        }, 0);
        return <span className="text-sm font-medium">${total}</span>;
      },
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
        <Button
          className="flex items-center bg-green-500 text-white font-bold"
          icon={<MailOutlined />}
          disabled={record?.status === "confirmed"}
          onClick={() => handleOpenForm(record.id)}
        >
          {record?.status === "confirmed" ? "Sent" : "Send "}
        </Button>
      ),
    },
  ];

  const getProductAvailable = useMemo(() => {
    const data = allItems.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
    return data;
  }, []);

  return (
    <OrderManagementStyles>
      <div className="bg-no-repeat bg-cover bg-center flex w-full justify-between">
        <div className="flex justify-around items-center bg-amber-400 rounded-xl !w-1/3 lg:w-80 p-8 pt-9 my-3 mr-2 h-44">
          <div className="text-center">
            <p className="font-bold text-black text-[16px]">Tổng số đơn hàng</p>
            <p className="text-2xl hover:text-white cursor-pointer">
              {orders.length}
            </p>
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
            <p className="text-2xl hover:text-white cursor-pointer">
              {getProductAvailable}
            </p>
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
        dataSource={orders && orders.map((item) => ({...item, key: item.id}))}
        columns={columns}
      />
      <Modal
        footer={[]}
        title="Send Email"
        open={openForm}
        onCancel={handleResetOpenForm}
      >
        <EmailForm
          currentId={currentId}
          currentDoc={selectedOrder}
          closeModal={handleResetOpenForm}
        />
      </Modal>
    </OrderManagementStyles>
  );
};

export default OrderManagement;
