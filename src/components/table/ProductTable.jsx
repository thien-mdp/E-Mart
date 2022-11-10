import { Table} from "antd";
import {DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ProductTable = (props) => {
  const data = [
    {
      key: '1',
      name: 'Iphone 11 Promax',
      quantity: '89',
      des: 'abc'
    },
    {
      key: '2',
      name: 'Nokia 1280',
      quantity: '87',
      des: 'abc'
    },
    {
      key: '3',
      name: 'Iphone 13 Promax',
      quantity: '45',
      des: 'abc'
    },
    {
      key: '4',
      name: 'Iphone 14 Promax',
      quantity: '47',
      des: 'abc'
    },
    {
      key: '5',
      name: 'Samsung S9 Ultra',
      quantity: '2',
      des: 'abc'
    },
    {
      key: '6',
      name: 'Iphone 12 Promax',
      quantity: '33',
      des: 'abc'
    },
    {
      key: '7',
      name: 'Xiaomi Redmi Note 11',
      quantity: '7',
      des: 'abc'
    },
    {
      key: '8',
      name: 'Iphone 12 Promax',
      quantity: '33',
      des: 'abc'
    },
    {
      key: '9',
      name: 'Iphone 12 Promax',
      quantity: '33',
      des: 'abc'
    },
    {
      key: '10',
      name: 'Iphone 12 Promax',
      quantity: '33',
      des: 'abc'
    },
    {
      key: '11',
      name: 'Iphone 12 Promax',
      quantity: '33',
      des: 'abc'
    },
  ]
  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      ellipsis: true,
      width: 10,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      ellipsis: true,
      width: 40,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      ellipsis: true,
      width: 20,
    },
    {
      title: "Descriptions",
      dataIndex: "des",
      ellipsis: true,
      width: 60,
    },
    {
      title: 'Action',
      render:(record)=>{
          return <>
          <div>
              <DeleteOutlined 
                  style={{ color:"red" , marginLeft:"1rem"}}
                  onClick={()=>{
                      props.onDeleteTopic(record)
                  }}
              />
              <EditOutlined 
                style={{ color:"red" , marginLeft:"1rem"}}
                onClick={()=>{
                    console.log("edit")
                }}
              />
          </div>
          </>
      },
      width: 25,
  }
  ];
  return (
    <>
      <Table
        size="small"
        columns={columns}
        dataSource= {data}  
        // props.product
        pagination={{
          pageSize: "10",
        }}
        bordered
      ></Table>
    </>
  );
};
export default ProductTable;
