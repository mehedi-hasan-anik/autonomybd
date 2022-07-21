import React, { useEffect, useState } from "react";

function ProductTypeTable() {
  const [token, setToken] = useState(null);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token !== null) {
      fetch(`http://51.195.148.112/api/admin/product-type/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setTableData(res?.data));
    }
  }, [token]);

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
            {tableData?.map((item, index) => (
              <tr key={index}>
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
