import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ShoppingCart({ productData }) {


  let [quantity, setQuantity] = useState([0, 0, 0, 0]);

  let changedAmount = (e, idx) => {
    let copy = [...quantity];
    copy[idx] = e.target.value;
    setQuantity(copy);
  };

    let totalNoOfItems = quantity.reduce((sum,curr)=>{
      return sum=sum+Number(curr)
    },0);
  return (
    <>
      <div className="m-2">
        <div className="d-flex flex-row justify-content-between  p-2 bg-info align-items-center">
          <h1>Shop to React</h1>
          <div className="d-flex flex-row  p-2">
            <div style={{ paddingRight: "1rem" }}>
              {" "}
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ fontSize: "1.5rem" }}
              />
            </div>
            <p>{totalNoOfItems} items</p>
          </div>
        </div>

        {productData.map((el, index) => (
          <div
            key={el.desc}
            style={{ border: "1px solid #bbb5b5" }}
            className="p-3 d-flex flex-row"
          >
            <div className="d-flex flex-column  align-items-center" style={{width:"15rem"}}>
              <h4>{el.desc}</h4>
              <div>
                {" "}
                <img src={el.image} style={{ height: "5rem", width: "5rem" }} />
              </div>
            </div>
            <div
              className="d-flex flex-row  align-items-center"
              style={{ marginTop: "3rem", marginLeft: "1rem" }}
            >
              <div>
                <label>
                  <input
                  autoComplete="off"
                    name="myInput"
                    value={quantity[index]}
                    onChange={(e) => changedAmount(e, index)}
                    style={{width:"2rem",border:"3px solid #bbb5b5",height:"3rem",textAlign:"center"}}
                  />
                </label>{" "}
                {/* {totalNoOfItems} */}
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p>Quantity</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default ShoppingCart;
