import React from "react";

function CheckoutScreen({ loggedInUser, loggedInPicture }) {
  return (
    <div className="container mt-5">
      <div
        style={{
          border: "1px solid lightgray",
          padding: "20px",
          width: "700px",
          margin: "0 auto",
          backgroundColor: "white",
        }}
      >
        <h2>Check Out</h2>

        {loggedInPicture && (
          <img
            src={loggedInPicture}
            alt={loggedInUser}
            style={{ width: "100px", borderRadius: "50%", marginBottom: "20px" }}
          />
        )}

        <h4 style={{ color: "green" }}>Welcome Back {loggedInUser}!</h4>
        <p>Time to check out?</p>
      </div>
    </div>
  );
}

export default CheckoutScreen;