import "./App.css";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./LoginForm";

function SignInScreen({ onLogin }) {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);

    if (response.picture && response.picture.data) {
      setPicture(response.picture.data.url);
    }

    if (response.accessToken) {
      setLogin(true);
      onLogin(response.name, response.picture?.data?.url || "");
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="container">
      <Card style={{ width: "800px" }} className="mx-auto mt-5">
        <Card.Header className="pb-4">
          <h1>Sign In</h1>
          <Card.Body>
            <Card.Text>
              {!login && (
                <React.Fragment>
                  <h3>Please login using one of the following:</h3>

                  <LoginForm onLogin={onLogin} />

                  <FacebookLogin
                    appId="903553842656805"
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,user_friends"
                    callback={responseFacebook}
                    icon="fa-facebook"
                  />
                </React.Fragment>
              )}

              {login && <Home fbpic={picture} fbdata={data} />}
            </Card.Text>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
}

function Home({ fbpic, fbdata }) {
  return (
    <React.Fragment>
      {fbpic && <img src={fbpic} alt={fbdata.name} />}

      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>

      <p className="my-5">You are successfully logged in.</p>
    </React.Fragment>
  );
}

export default SignInScreen;