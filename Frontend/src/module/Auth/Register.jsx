import {Button, Form} from "antd";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {addDoc, collection} from "firebase/firestore";
import React from "react";

import styled from "styled-components";
import Swal from "sweetalert2";
import {auth, db} from "../../firebase";

const RegisterStyles = styled.div`
  max-width: 100%;
  height: 100vh;
`;
const Register = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser, {
        displayName: values.fullname,
      });
      const colRef = collection(db, "users");
      await addDoc(colRef, {
        fullname: values.fullname,
        email: values.email,
        uid: user.user.uid,
        password: values.password,
        phoneNumber: Number(values.phoneNumber),
        address: values.address,

        role: 1,
      });
      form.resetFields();
      Swal.fire({
        icon: "success",
        title: "Register success",
      }).then(() => {
        window.location.href = "/";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <RegisterStyles>
      <div className="register__container w-full h-full flex items-center justify-center p-3 ms:p-0">
        <Form
          onFinish={onFinish}
          form={form}
          autoComplete="off"
          className="shadow-xl p-3 w-[450px] flex flex-col"
        >
          <h3 className="text-center mb-5 font-medium text-lg">REGISTER</h3>
          <Form.Item
            rules={[{required: true, message: "Please input your fullname!"}]}
            name="fullname"
          >
            <input
              className="w-full px-2 py-1 bg-gray-100  outline-none"
              type="text"
              placeholder="fullname"
            />
          </Form.Item>
          <Form.Item
            rules={[{required: true, message: "Please input your email!"}]}
            name="email"
          >
            <input
              className="w-full px-2 py-1 bg-gray-100  outline-none"
              type="email"
              placeholder="email"
            />
          </Form.Item>
          <Form.Item
            rules={[{required: true, message: "Please input your address!"}]}
            name="address"
          >
            <input
              className="w-full px-2 py-1 bg-gray-100  outline-none"
              type="type"
              placeholder="address"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {required: true, message: "Please input your phone number!"},
            ]}
            name="phoneNumber"
          >
            <input
              className="w-full px-2 py-1 bg-gray-100  outline-none"
              type="number"
              placeholder="phone number"
            />
          </Form.Item>
          <Form.Item
            rules={[{required: true, message: "Please input your password!"}]}
            name="password"
          >
            <input
              className="w-full px-2 py-1 bg-gray-100  outline-none"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            rules={[{required: true, message: "Please input your password!"}]}
            name="confirmPassword"
          >
            <input
              className="w-full px-2 py-1 bg-gray-100 outline-none"
              type="password"
              placeholder="Confirm password"
            />
          </Form.Item>
          <Button
            loading={loading}
            disabled={loading}
            htmlType="submit"
            className="text-white bg-blue-700 hover:bg-white"
          >
            Register
          </Button>
        </Form>
      </div>
    </RegisterStyles>
  );
};

export default Register;
