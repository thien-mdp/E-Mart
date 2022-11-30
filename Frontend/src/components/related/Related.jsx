import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import TitleImage from "../TitleImage/TitleImage";
import Card from "../card";
import {collection, getDocs, limit, query, where} from "firebase/firestore";
import {db} from "../../firebase";
const Related = ({style, currentCategory = "", currentId = null}) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const colRef = collection(db, "products");
        let documentSnapshots;
        if (currentCategory && currentId) {
          documentSnapshots = await getDocs(
            query(
              colRef,
              where("id", "!=", Number(currentId)),
              where("category", "==", currentCategory),
              limit(10)
            )
          );
        } else {
          documentSnapshots = await getDocs(query(colRef, limit(10)));
        }

        const getData = documentSnapshots.docs.map((doc) => doc.data());
        if (getData) {
          getData.sort((a, b) => 0.5 - Math.random());

          setData(getData);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [currentCategory, currentId]);
  return (
    <div className="product-related">
      <TitleImage margin={style}>PRODUCTS OTHER</TitleImage>
      <div className="w-full my-5">
        {!loading && data.length > 0 ? (
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
            }}
            spaceBetween={8}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide>
                <Card key={item.id} data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default Related;
