import {collection, getDocs, query, where} from "firebase/firestore";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {db} from "../firebase";

const useUserInfo = () => {
  const [userInfo, setUserInfo] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const {user} = useSelector((state) => state.authReducer);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        if (user.uid) {
          const colRef = collection(db, "users");
          const documentSnapshots = await getDocs(
            query(colRef, where("uid", "==", user.uid))
          );
          const getData = documentSnapshots.docs.map((doc) => doc.data());

          setUserInfo(getData);
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {userInfo, loading};
};

export default useUserInfo;
