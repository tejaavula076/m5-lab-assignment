function FinalShoppingCart({ cartInfo }) {
  console.log(cartInfo);
  let checkCartEntirely = cartInfo.filter((el) => el && el.value > 0);
  console.log(checkCartEntirely);
  return (
    <>
      <div>
        <h1>Your Cart Items</h1>
        {checkCartEntirely.length === 0 ? (
          <>
            <h3>No Items in the cart , Please add the items in the cart</h3>
          </>
        ) : (
          checkCartEntirely.map((el, index) => {
            return (
              <div key={el.desc}>
                <div>
                  <h1>Hello</h1>
                  <img
                    src={el.image}
                    style={{ height: "5rem", width: "5rem" }}
                  />
                  {el.desc}
                </div>
                <div>
                  <p>
                    <span>Quantity: </span>
                    {el.value}
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
