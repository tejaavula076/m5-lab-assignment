import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./ShoppingCart.css";
import FinalShoppingCart from "./FinalShoppingCart.jsx";
import SignInScreen from "./SignInScreen.jsx";
import CheckoutScreen from "./CheckoutScreen.jsx";

function ShoppingCart({ productData }) {
  let [quantity, setQuantity] = useState([0, 0, 0, 0]);
  let [openPopUp, setopenPopUp] = useState(false);
  let [selectedProduct, setSelectedProduct] = useState(null);
  let [trackCartItems, setTrackCartItems] = useState([]);

  let [showFinalCart, setShowFinalCart] = useState(false);
  let [showSignIn, setShowSignIn] = useState(false);
  let [showCheckout, setShowCheckout] = useState(false);

  let [loggedInUser, setLoggedInUser] = useState("");
  let [loggedInPicture, setLoggedInPicture] = useState("");

  let homePage = () => {
    setShowFinalCart(false);
    setShowSignIn(false);
    setShowCheckout(false);
    setQuantity([0, 0, 0, 0]);
    setTrackCartItems([]);
    setLoggedInUser("");
    setLoggedInPicture("");
  };

  let changedAmount = (e, idx, el) => {
    let copy = [...quantity];
    let newValue = Number(e.target.value);

    if (isNaN(newValue) || newValue < 0) {
      newValue = 0;
    }

    copy[idx] = newValue;
    setQuantity(copy);

    let copyOfCartItems = [...trackCartItems];
    copyOfCartItems[idx] = {
      ...el,
      value: newValue,
    };
    setTrackCartItems(copyOfCartItems);
  };

  let totalNoOfItems = quantity.reduce((sum, curr) => {
    return sum + Number(curr);
  }, 0);

  let addToCart = (e, idx, el) => {
    let copyOfQty = [...quantity];
    copyOfQty[idx] = Number(copyOfQty[idx]) + 1;
    setQuantity(copyOfQty);

    let copyOfCartItems = [...trackCartItems];
    copyOfCartItems[idx] = {
      ...el,
      value: copyOfQty[idx],
    };
    setTrackCartItems(copyOfCartItems);
  };

  let deleteFromCart = (e, idx, el) => {
    let copyOfQty = [...quantity];
    copyOfQty[idx] = Number(copyOfQty[idx]) - 1;

    if (copyOfQty[idx] < 0) {
      copyOfQty[idx] = 0;
    }

    setQuantity(copyOfQty);

    let copyOfCartItems = [...trackCartItems];
    copyOfCartItems[idx] = {
      ...el,
      value: copyOfQty[idx],
    };
    setTrackCartItems(copyOfCartItems);
  };

  let showPopUp = (e) => {
    setSelectedProduct(e);
    setopenPopUp(true);
  };

  let closePopUp = () => {
    setopenPopUp(false);
    setSelectedProduct(null);
  };

  let finalCart = () => {
    setShowFinalCart(true);
    setShowSignIn(false);
    setShowCheckout(false);
  };

  let goToSignIn = () => {
    setShowFinalCart(false);
    setShowSignIn(true);
    setShowCheckout(false);
  };

  let handleLogin = (userName, userPicture = "") => {
    setLoggedInUser(userName);
    setLoggedInPicture(userPicture);
    setShowFinalCart(false);
    setShowSignIn(false);
    setShowCheckout(true);
  };

  return (
    <>
      <div className="m-2">
        <div className="d-flex flex-row justify-content-between p-2 bg-info align-items-center">
          <h1 onClick={() => homePage()} style={{ cursor: "pointer" }}>
            Shop to React
          </h1>

          <div className="d-flex flex-row p-2">
            <div style={{ paddingRight: "1rem" }}>
              <button
                onClick={() => finalCart()}
                style={{ border: "none", background: "none" }}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{ fontSize: "1.5rem" }}
                />
              </button>
            </div>
            <p>{totalNoOfItems} items</p>
          </div>
        </div>

        {!showFinalCart &&
          !showSignIn &&
          !showCheckout &&
          productData.map((el, index) => (
            <div
              key={el.desc}
              style={{ border: "1px solid #bbb5b5" }}
              className="p-3 d-flex flex-row"
            >
              <div
                className="d-flex flex-column align-items-center"
                style={{ width: "15rem" }}
              >
                <h4>{el.desc}</h4>
                <div onClick={() => showPopUp(el)}>
                  <img
                    src={el.image}
                    alt={el.desc}
                    style={{ height: "5rem", width: "5rem" }}
                  />
                </div>
              </div>

              <div
                className="d-flex flex-row align-items-center"
                style={{ marginTop: "3rem", marginLeft: "1rem" }}
              >
                <div className="d-flex flex-row">
                  <div className="m-2 addBtnDiv">
                    <button
                      className="addBtn"
                      onClick={(e) => addToCart(e, index, el)}
                    >
                      +
                    </button>
                  </div>
                  <div className="m-2 addBtnDiv">
                    <button
                      className="addBtn"
                      onClick={(e) => deleteFromCart(e, index, el)}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div
                  className="d-flex flex-column"
                  style={{ marginTop: "-2rem", marginLeft: "1rem" }}
                >
                  <p style={{ marginBottom: "9px" }}>Quantity</p>
                  <label>
                    <input
                      autoComplete="off"
                      name="myInput"
                      value={quantity[index]}
                      onChange={(e) => changedAmount(e, index, el)}
                      style={{
                        width: "3rem",
                        border: "3px solid #bbb5b5",
                        height: "2.5rem",
                        textAlign: "center",
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          ))}

        {showFinalCart && (
          <FinalShoppingCart
            cartInfo={trackCartItems}
            totalNoOfItems={totalNoOfItems}
            goToSignIn={goToSignIn}
            goToShop={homePage}
          />
        )}

        {showSignIn && <SignInScreen onLogin={handleLogin} />}

        {showCheckout && (
          <CheckoutScreen
            loggedInUser={loggedInUser}
            loggedInPicture={loggedInPicture}
          />
        )}

        {openPopUp && selectedProduct && (
          <div className="popupOverlay" onClick={closePopUp}>
            <div className="popupBox" onClick={(e) => e.stopPropagation()}>
              <button className="closeBtn" onClick={closePopUp}>
                X
              </button>

              <h3 className="p-3">{selectedProduct.desc}</h3>
              <hr />
              <div style={{ textAlign: "center" }}>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.desc}
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                />
              </div>
              <p className="p-3">Ratings: 3.5/5</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;