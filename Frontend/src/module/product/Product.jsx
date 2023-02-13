import React, {useEffect, useState} from "react";
import styled from "styled-components";
import "react-quill/dist/quill.bubble.css";

import {Button} from "antd";
import {BiCreditCard} from "react-icons/bi";
import {BsBoxSeam, BsShieldFillCheck} from "react-icons/bs";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import ImageMagnifier from "../../components/ImageMagnifier";
import TitleImage from "../../components/TitleImage/TitleImage";
import Card from "../../components/card";
import Related from "../../components/related";
import {Link, useParams} from "react-router-dom";
import {db} from "../../firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import {useDispatch} from "react-redux";
import {addToCart} from "../../stores/Cart/cartSlice";
import Footer from "../../components/footer";

const ProductStyles = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 999;
`;
const Product = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [image, setImage] = React.useState("");
  const {id} = useParams();
  const [amount, setAmount] = React.useState(1);
  const dispatch = useDispatch();

  const handleSelectItem = () => {
    const dataCart = {...data};
    dataCart.amount = amount;
    dispatch(addToCart(dataCart));
  };
  const handleChangeImage = (url) => {
    setImage(url);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, "products");
        const documentSnapshots = await getDocs(
          query(colRef, where("id", "==", Number(id)))
        );
        const getData = documentSnapshots.docs.map((doc) => doc.data());
        if (getData?.length > 0) {
          setData(getData[0]);
          setImage(getData[0].image);
          window.scrollTo(0, 0);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);
  return (
    <ProductStyles>
      <div className="container-product h-fit flex flex-1 flex-col sm:flex-row sm:justify-between sm:gap-3 p-5 mb-5">
        <div className="product-col-1 md:basis-[60%] md:max-h-[550px]  ">
          <div className="product-image p-2 w-full overflow-hidden mb-3">
            <div className="box-image mx-auto animate-slideright  w-auto sm:max-w-[450px] sm:w-[300px] md:w-auto md:max-w-[600px] overflow-hidden pointer-events-auto">
              <ImageMagnifier
                style={"object-cover mx-auto max-w-full h-auto max-h-[400px]"}
                src={image}
              />
            </div>
            <div className="slide-image  flex items-center justify-center  my-2 animate-slideright">
              <div className=" grid grid-cols-4 place-content-center justify-center mx-auto gap-3  md:gap-4  ">
                <div
                  className="image-item flex items-center justify-center relative p-1   "
                  onClick={() =>
                    handleChangeImage(
                      "https://cdn.shopify.com/s/files/1/1619/4791/products/A4_125x.jpg?v=1654850532"
                    )
                  }
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A4_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
                <div className="image-item flex items-center justify-center relative p-1   ">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A6_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
                <div className="image-item flex items-center justify-center relative p-1  ">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A4_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
                <div className="image-item flex items-center justify-center relative p-1">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1619/4791/products/A5_125x.jpg?v=1654850532"
                    alt="img"
                    className="object-cover mx-auto max-h-full w-full max-w-[125px]  aspect-auto cursor-pointer "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-col-2 basis-[40%]">
          <div className="info-product animate-slideleft ">
            <div className="title-product mb-2 md:mb-4">
              <h1 className="text-xl font-bold md:text-2xl lg:text-3xl leading-5">
                {data?.title}
              </h1>
            </div>
            <div className="id-product mb-2 md:mb-4">
              <span className="text-sm md:text-base">SKU:{data?.id}</span>
            </div>
            <div className="price-product mb-2 md:mb-4">
              <span className="text-base font-light md:text-lg">{`$${data?.price}`}</span>
              <p className="text-sm md:text-base">
                <small>
                  <strong>
                    <a href="#" className="underline mr-1">
                      Shipping
                    </a>
                    calculated at checkout
                  </strong>
                </small>
              </p>
            </div>
            <div className="action-user-product mb-2 md:mb-4">
              <div>
                <div className="amount-input h-[30px] md:h-[35px]  flex items-center gap-1  mb-2 md:mb-4">
                  <Button
                    onClick={() =>
                      setAmount((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                    htmlType="button"
                    className="text-white text-center flex items-center justify-center bg-blue-700 rounded-full"
                    icon={<AiOutlineMinusCircle />}
                  />
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="outline-none px-[8px] h-full p-1 w-10"
                  />
                  <Button
                    onClick={() => setAmount((prev) => prev + 1)}
                    htmlType="button"
                    className="  text-white text-center flex items-center justify-center bg-blue-700 rounded-full"
                    icon={<AiOutlinePlusCircle />}
                  />
                </div>
                <div className="flex my-4 flex-row items-center  gap-2 w-full mb-3 md:mb-5">
                  <button
                    onClick={handleSelectItem}
                    type="button"
                    class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 mr-2 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                    </svg>
                    Add to Cart
                  </button>
                  <Link to={`/cart`}>
                    <button
                      onClick={handleSelectItem}
                      type="button"
                      class="text-white  w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 mr-2 -ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                      </svg>
                      Buy it now
                    </button>
                  </Link>
                </div>
                <div className="block-paypal flex flex-col gap-3 mb-3">
                  <div className="bottom-quarter">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1619/4791/files/2022-09-06T114842.852_480x.png?v=1662436142"
                      alt="img"
                      className="max-w-[600px] w-full object-cover aspect-auto"
                    />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
                    <div className="icon-text flex flex-1 items-center leading-3 gap-x-1 whitespace-normal border border-blue-700 w-fit text-blue-700 p-1 px-2 rounded-lg">
                      <BsBoxSeam className="text-2xl " />
                      <p className="text-[10px] sm:text-[12px] font-normal">
                        <span>Global shipping</span>
                      </p>
                    </div>
                    <div className="icon-text flex flex-1 items-center leading-3 gap-x-1 whitespace-normal border border-blue-700 bg-blue-700 w-fit text-white p-1 px-2 rounded-lg">
                      <BsShieldFillCheck className="text-2xl" />
                      <p className="text-[10px] sm:text-[12px] font-normal">
                        <span>Global shipping</span>
                      </p>
                    </div>
                    <div className="icon-text flex flex-1 items-center leading-3 whitespace-normal gap-x-1 border border-blue-700 w-fit text-blue-700 p-1 px-2 rounded-lg">
                      <BiCreditCard className="text-2xl" />
                      <p className="text-[10px] sm:text-[12px] font-normal">
                        <span>Global shipping</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-desc relative">
        <div className="">
          <div className="product-col-desc-1   ">
            <TitleImage margin="mx-0 my-3" img="bg-3d-printer">
              DESCRIPTION
            </TitleImage>
          </div>
          <div
            className="desc-main mx-3"
            dangerouslySetInnerHTML={{__html: data?.description}}
          ></div>
        </div>
      </div>
      <Related
        style="mx-0 my-3"
        currentCategory={data?.category}
        currentId={id}
      />
    </ProductStyles>
  );
};

export default Product;
