import React from "react";
import { Data } from "../../data/Data";
import ProductTile from "../../components/ProductTile/ProductTile";
import "./Product.css";

const Products = () => {

    return (
        <>
            <div className="products">
                {
                    Object.keys(Data).map((item) => {
                        return (
                            <ProductTile key={item} item={item}/>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Products;