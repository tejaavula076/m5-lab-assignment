import React from "react";

function FinalShoppingCart({ cartInfo, totalNoOfItems, goToSignIn, goToShop }) {
  let checkCartEntirely = cartInfo.filter((el) => el && el.value > 0);

  return (
    <>
      <div className="p-4" style={{ width: "50rem" }}>
        <h3>Your Cart Items</h3>

        {checkCartEntirely.length === 0 ? (
          <>
            <p>There are {totalNoOfItems} items in your cart.</p>
            <button className="btn btn-success" onClick={goToShop}>
              Continue Shop
            </button>
          </>
        ) : (
          <>
            {checkCartEntirely.map((el) => {
              return (
                <div
                  key={el.desc}
                  style={{ border: "1px solid lightgray" }}
                  className="d-flex flex-row p-3 mb-3"
                >
                  <div className="d-flex flex-column">
                    <img
                      src={el.image}
                      alt={el.desc}
                      style={{ height: "6rem", width: "6rem" }}
                    />
                    {el.desc}
                  </div>

                  <div
                    className="d-flex flex-row"
                    style={{ marginTop: "2.5rem", marginLeft: "3rem" }}
                  >
                    <p>
                      <span className="fw-bold">Quantity: {el.value}</span>
                    </p>
                  </div>
                </div>
              );
            })}

            <button className="btn btn-primary" onClick={goToSignIn}>
              Check Out
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default FinalShoppingCart;