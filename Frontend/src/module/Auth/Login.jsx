import {Button, Form} from "antd";
import {signInWithEmailAndPassword} from "firebase/auth";
import React, {useEffect} from "react";

import styled from "styled-components";
import {auth} from "../../firebase";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import {useModal} from "../../context/ModalContext";

const LoginStyles = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 100%;
`;
const Login = ({title}) => {
  const [form] = Form.useForm();
  const {closeModal} = useModal();
  const [loading, setLoading] = React.useState(false);
  const {user} = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      closeModal();
      navigate("/");
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
  useEffect(() => {
    document.title = "Login";
    if (!pathname === "/cart" && user?.email) {
      navigate("/");
    }
  }, [user]);
  return (
    <LoginStyles>
      <div className="login__container w-full h-full flex items-center justify-center p-3 ms:p-0 ">
        <Form
          onFinish={onFinish}
          form={form}
          autoComplete="off"
          className="shadow-xl p-3 w-[450px] flex flex-col border-2 border-solid border-gray-300 rounded-[10px]"
        >
          <h3 className="text-center mb-5 font-medium text-lg">{title}</h3>
          <Form.Item name="email">
            <input
              className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
              type="email"
              placeholder="email"
            />
          </Form.Item>
          <Form.Item name="password">
            <input
              className="w-full h-[40px] px-2 py-1 bg-gray-100 border-none outline-none"
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div className="mb-3 text-[16px] text-center">
            If you don't have an account, please{" "}
            <a href="/register" className="text-blue-700" target="_blank">
              Register
            </a>
          </div>
          <div className="w-full h-[40px] flex justify-center">
            <Button
              loading={loading}
              disabled={loading}
              htmlType="submit"
              className="text-white text-[12px] h-[40px] w-1/2 bg-blue-700 hover:bg-white rounded-[10px]"
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </LoginStyles>
  );
};

export default Login;
