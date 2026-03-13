function FinalShoppingCart({ cartInfo }) {
  console.log(cartInfo);
  let checkCartEntirely = cartInfo.filter((el) => el && el.value > 0);
  console.log(checkCartEntirely);
  return (
    <>
      <div className="p-4" style={{ width: "50rem" }}>
        {checkCartEntirely.length === 0 ? (
          <>
            <h3>No Items in the cart , Please add the items in the cart</h3>
          </>
        ) : (
          checkCartEntirely.map((el, index) => {
            return (
              <div
                key={el.desc}
                style={{ border: "1px solid lightgray" }}
                className="d-flex flex-row p-3"
              >
                <div className="d-flex flex-column">
                  <h3>Your Cart Items</h3>
                  <img
                    src={el.image}
                    style={{ height: "6rem", width: "6rem" }}
                  />
                  {el.desc}
                </div>
                <div
                  className="d-flex flex-row "
                  style={{ marginTop: "2.5rem", marginLeft: "3rem" }}
                >
                  <p>
                    <span className="fw-bold">Quantity: {el.value}</span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
export default FinalShoppingCart;
