import React, { useContext, useEffect } from "react";
import { userContext } from "../../App";

const ProductType = () => {
  const [token] = useContext(userContext);

  const getData = async () => {
    const response = await fetch(
      `http://51.195.148.112/api/admin/product-type/`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();
    console.log("data", result);
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>ProductType</div>;
};

export default ProductType;
