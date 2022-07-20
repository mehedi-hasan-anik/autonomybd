import React from "react";
import ProductTypeTable from "../../components/ProductTypeTable";
import SideBar from "../../components/SideBar";

const ProductType = () => {
  return (
    <div>
      <div>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <SideBar />
            </div>
            <div className="col py-3">
              <ProductTypeTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductType;
