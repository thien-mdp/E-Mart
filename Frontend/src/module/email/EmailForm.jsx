import {Button, Form, Input} from "antd";
import {child, getDatabase, ref, update} from "firebase/database";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import Swal from "sweetalert2";
import TextEditor from "../../components/texteditor/TextEditor";
import {sendEmail} from "./helper/sendEmail";

const EmailFormStyles = styled(Form)``;
const EmailForm = ({currentId, currentDoc, closeModal}) => {
  const [form] = Form.useForm();
  const {orders} = useSelector((state) => state.orderReducer);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (currentId) {
      const data = orders.find((item) => item.id === currentId);

      const getContent = JSON.parse(data?.listItems);
      const content = getContent
        .map((item) => `<i> - ${item.title} (x${item.amount})</i> <br/>`)
        .join("");
      console.log(content);
      const total = getContent.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
      const infoBank = `
        <br/>
        Name : <b>Nguyen Van A</b> <br/>
        Bank : <b>Vietcombank</b> <br/>
        Account number : <b>123456789</b> <br/>
        Branch : <b>Ho Chi Minh</b> <br/>

      `;
      const text = `Dear <b>${data?.fullname}</b>, your order has been confirmed.<br/>Your order is:<br/>${content} <br/>Total price: <b>${total}$</b>.<br/> Please transfer the money to the following account: ${infoBank} <br/> Thank you for choosing our products!`;
      form.setFieldsValue({
        emailUser: data?.email,
        subject: `Order ${data?.id} has been confirmed`,
        content: text,
      });
    }
  }, [currentId]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await sendEmail(values);
      if (res.success) {
        const dbRef = ref(getDatabase());
        await update(child(dbRef, `orders/${currentDoc}`), {
          status: "confirmed",
        }).then(() => {
          console.log("update Success");
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Send email successfully!",
        }).then(() => {
          closeModal();
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <EmailFormStyles form={form} onFinish={onFinish}>
      <Form.Item name="emailUser" label="To Email" rules={[{required: true}]}>
        <Input disabled />
      </Form.Item>
      <Form.Item name="subject" label="Subject" rules={[{required: true}]}>
        <Input disabled />
      </Form.Item>
      <Form.Item rules={[{required: true}]} label="Content" name="content">
        <TextEditor />
      </Form.Item>

      <div className="w-full flex items-center justify-end">
        <Button
          className="bg-blue-500  text-white"
          type="primary"
          loading={loading}
          disabled={loading}
          htmlType="submit"
        >
          Send
        </Button>
      </div>
    </EmailFormStyles>
  );
};

export default EmailForm;
