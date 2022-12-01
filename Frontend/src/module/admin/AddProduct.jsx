import {Button, Col, Form, Row, Modal, Upload, Select, InputNumber} from "antd";
import {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import {PlusOutlined, UploadOutlined} from "@ant-design/icons";
import _ from "lodash";
import Swal from "sweetalert2";

import {addDoc, collection, getDocs} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {db} from "../../firebase";
import TextEditor from "../../components/texteditor/TextEditor";

const ProductFormStyles = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px;
  .group-input {
    label {
      font-weight: 600;
    }
    .ant-input-number {
      width: 100% !important;
      border: none;
    }
  }
  .group-input.upload-image {
    .ant-upload.ant-upload-select-picture-card,
    .ant-upload-list-picture-card-container {
      width: 100%;
      height: 300px;
    }
  }
  .ant-select-selector {
    border: none !important;
    outline: none !important;
    &:focus {
      border: none !important;
    }
  }
  .ant-row {
    display: block;
    input,
    .ant-select {
      width: 100%;
      height: 50px;
      padding: 0.5rem 15px !important;
      border-radius: 10px;
      border: 1px solid #eee;
      outline: none;
    }
  }
`;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const AddProduct = () => {
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgSlide, setImgSlide] = useState([]);
  const storage = getStorage();
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const beforeUpload = (file) => {
    handleUploadImage(file);
    return false;
  };
  const onSelectImage = (file) => {
    setImage(file);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  useEffect(() => {
    form.setFieldsValue({
      image,
    });
  }, [form, image]);

  const handleUploadImage = async (file) => {
    setLoading(true);
    try {
      if (file) {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask?.on(
          "state_changed",
          (snapshot) => {},
          (error) => {},
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setImage(downloadURL);
            });
          }
        );
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const cloneValues = {...values};

      const colRef = collection(db, "products");
      await addDoc(colRef, {
        id: new Date().getTime(),
        ...cloneValues,
      });
      form.resetFields();
      window.scrollTo(0, 0);
      Swal.fire({
        icon: "success",
        title: "Thêm sản phẩm thành công",
      });
      setImage(null);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  //   get categories
  useEffect(() => {
    const getCategories = async () => {
      const productsCol = collection(db, "categories");
      const snapshot = await getDocs(productsCol);
      const list = await snapshot.docs.map((doc) => doc.data());
      const categoriesList = list.map((item) => ({
        label: item.name,
        value: item.name,
      }));
      console.log(list);
      setCategories(categoriesList);
    };
    getCategories();
  }, []);

  const handleDeleteImage = async (file) => {
    const desertRef = ref(storage, `images/${file.name}`);
    deleteObject(desertRef)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setImage(null));
  };

  return (
    <ProductFormStyles>
      <Form form={form} onFinish={onFinish}>
        <div className="group-input">
          <Form.Item label="title" name="title">
            <input placeholder="tilte" disabled={loading} />
          </Form.Item>
        </div>
        <div className="group-input upload-image">
          <Form.Item name="image" label="Image" valuePropName="image">
            <Upload
              listType="picture-card"
              disabled={loading}
              onRemove={(file) => handleDeleteImage(file)}
              beforeUpload={beforeUpload}
              onPreview={handlePreview}
              onChange={onSelectImage}
            >
              {image ? null : uploadButton}
            </Upload>
          </Form.Item>
        </div>

        <div className="group-input">
          <Form.Item label="Category" name="category">
            <Select
              disabled={loading}
              options={categories}
              placeholder="Please select one"
            />
          </Form.Item>
        </div>

        <div className="group-input">
          <Form.Item label="Description" name="description">
            <TextEditor />
          </Form.Item>
        </div>

        <div className="group-input">
          <Form.Item label="Price" name="price">
            <InputNumber disabled={loading} placeholder="price" />
          </Form.Item>

          <Form.Item label="Amount" name="amount">
            <InputNumber disabled={loading} placeholder="amount" />
          </Form.Item>
        </div>

        <Button
          disabled={loading}
          loading={loading}
          type="primary"
          className="w-full bg-blue-700 border-none outline-none"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </ProductFormStyles>
  );
};
export default AddProduct;
