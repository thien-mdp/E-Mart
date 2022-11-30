import React, {useEffect} from "react";
import styled from "styled-components";
import {CATEGORY_SLIDE} from "./constants";
import Card from "../../components/card";
import TitleImage from "../../components/TitleImage/TitleImage";
import {Select, Spin} from "antd";
import Related from "../../components/related";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../../firebase";
import {Link, useSearchParams} from "react-router-dom";
import slugify from "slugify";
import {AiOutlineDropbox} from "react-icons/ai";
const CategoryStyles = styled.div``;
const Category = () => {
  const [products, setProducts] = React.useState([]);
  const [searchParams] = useSearchParams();
  const nameCategory = searchParams.get("name").split("-").join(" ");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, "products");
        const documentSnapshots = await getDocs(
          query(colRef, where("category", "==", nameCategory))
        );
        const getData = documentSnapshots.docs.map((doc) => doc.data());

        setProducts(getData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [nameCategory]);
  return (
    <CategoryStyles>
      <div className="container-category">
        <div className="row-category my-3">
          <div className="col-category">
            <div className="grid grid-cols-4 gap-3 md:grid-cols-8 place-content-center">
              {CATEGORY_SLIDE.map((item) => (
                <div
                  data-aos="zoom-in"
                  key={item.name}
                  className="p-1 hover:bg-gray-100 flex items-center justify-center group transition-all cursor-pointer"
                >
                  <Link
                    to={`/category?name=${slugify(item.name)}`}
                    className="border-none "
                  >
                    <div className="flex gap-1 flex-col items-center h-auto w-[50px] md:w-[60px] lg:w-[80px] text-center justify-center">
                      <img
                        src={item.img}
                        alt="img"
                        className="max-w-full w-auto h-full object-cover"
                      />
                      <div className="card-name-category">
                        <p className="text-[12px] whitespace-nowrap text-black font-light group-hover:underline">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="title-category my-5 py-3">
          <TitleImage>{nameCategory.toUpperCase()}</TitleImage>
        </div>
        <div className="list-product-category">
          <div className="category-filter  mb-3 mx-2">
            <div className="select-filter flex justify-end">
              <Select
                defaultValue="lucy"
                style={{width: 120}}
                options={[
                  {
                    value: "jack",
                    label: "A->Z",
                  },
                  {
                    value: "lucy",
                    label: "Z->A",
                  },

                  {
                    value: "",
                    label: "",
                  },
                ]}
              />
            </div>
          </div>
          {loading ? (
            <div className="flex items-center justify-center">
              <Spin />
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
              {products.map((item, index) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <div className="py-5">
              <div className="mx-auto text-center">
                <h1 className="text-gray-400">Not Found</h1>
                <AiOutlineDropbox className="w-[70px] h-[70px] mx-auto" />
              </div>
            </div>
          )}
        </div>
        <Related />
      </div>
    </CategoryStyles>
  );
};

export default Category;
