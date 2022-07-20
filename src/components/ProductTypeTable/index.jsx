import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";

function ProductTypeTable() {
  const [token] = useContext(userContext);
  const [tableData, setTableData] = useState(null);

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
    setTableData(result?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="table-responsive-lg">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Created_at</th>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Updated_at</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((item) => (
              <tr>
                <td>{item?.created_at}</td>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTypeTable;
