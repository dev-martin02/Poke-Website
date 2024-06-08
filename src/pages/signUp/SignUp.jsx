import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";
import { useState } from "react";

// Todo: add more complex functionality and improve UI

export default function SignUp() {
  const [userPassword, setUserPassword] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setUserPassword({
      ...userPassword,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userPassword.password !== userPassword.confirmPassword) {
      return alert("The password doesn't match");
    }
    navigate("/login");
  }

  return (
    <>
      <h1>Hello, I'm SignUp Page</h1>

      <Form submit={handleSubmit}>
        <label htmlFor="Name">Name: </label>
        <input type="text" id="name" placeholder="name" />

        <label htmlFor="password">password: </label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
        />

        <label htmlFor="confiPass">Confirm password: </label>
        <input
          type="password"
          id="confiPass"
          placeholder="Confirm Password"
          onChange={handleChange}
          name="confirmPassword"
        />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder="Write your email" />

        <button type="submit">Submit</button>
      </Form>
    </>
  );
}
