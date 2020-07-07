import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const FormInput = styled.input`
  height: 20px;
  margin: 5px;
`;

const DivForm = styled.div`
  display: flex;
  justify-content: center;
`;

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem("user", JSON.stringify(login));
    history.push("/pokemons");
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <form onSubmit={handleSubmit}>
        <DivForm>
          <FormInput
            type="text"
            name="email"
            id="email"
            value={login.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </DivForm>
        <DivForm>
          <FormInput
            type="password"
            name="password"
            id="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </DivForm>
        <DivForm>
          <input type="submit" value="Login" />
        </DivForm>
      </form>
    </div>
  );
}

export default Login;
