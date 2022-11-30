import "antd/dist/antd.css";
import { Button, Input, Table } from "antd";
import {
  SearchOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const UserTable = (props) => {
  const data = [
    {
      username: 'thienmai',
      fullName: 'Mai Đức Phong Thiên',
      birthday: '13/12/2000',
      address: 'New York No. 1 Lake Park',
      email: 'thienmai1312@gmail.com',
      gender: 'male',
      role: 'customer'
    },
    {
      username: 'thienmai13',
      fullName: 'Mai Thiên',
      birthday: '25/11/2000',
      address: 'Ho Chi Minh No. 1 Lake Park',
      email: 'abcdthien@gmail.com',
      gender: 'male',
      role: 'customer'
    },
    {
      username: 'thienmai13',
      fullName: 'Mai Thiên',
      birthday: '25/11/2000',
      address: 'New York No. 1 Lake Park',
      email: 'abcdthien@gmail.com',
      gender: 'male',
      role: 'customer'
    },
    {
      username: 'dophanduong',
      fullName: 'Phan Duong Ngoc Do',
      birthday: '15/07/2000',
      address: 'New York No. 2 Lake Park',
      email: 'dodev2k@gmail.com',
      gender: 'male',
      role: 'customer'
    },
    {
      username: 'dophanduong',
      fullName: 'Phan Duong Ngoc Do',
      birthday: '15/07/2000',
      address: 'BangKok No. 2 Lake Park',
      email: 'dodev2k@gmail.com',
      gender: 'male',
      role: 'customer'
    },
    {
      username: 'dophanduong',
      fullName: 'Phan Duong Ngoc Do',
      birthday: '15/07/2000',
      address: 'Ha Noi No. 1 Lake Park',
      email: 'dodev2k@gmail.com',
      gender: 'male',
      role: 'customer'
    },
  ]
  const columns = [
    {
      title: "User Name",
      dataIndex: "username",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type here to Search"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
              type="danger"
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.username.toLowerCase().includes(value.toLowerCase());
      },
      sorter: (record1, record2) => {
        return record1.username > record2.username;
      },
    },
    
    {
      title: "Full Name",
      dataIndex: "fullName",
      sorter: (record1, record2) => {
        return record1.fullName > record2.fullName;
      },
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      sorter: (record1, record2) => {
        return record1.birthday > record2.birthday;
      },
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              style={{ color: "red", marginLeft: "1rem" }}
              onClick={() => {props.onDelete(record)}}
            />
          </>
        );
      },
    },
  ];

  return (
    <Table
      size="small"
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: "10",
      }}
    ></Table>
  );
};

export default UserTable;
