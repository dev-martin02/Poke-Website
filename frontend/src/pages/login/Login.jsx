// Login.jsx
import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

export default function Login() {
  const navigate = useNavigate();

  function signUpPage() {
    navigate("/signUp");
  }

  return (
    <>
      <h1>Hello, I'm Login Page</h1>
      <Form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" placeholder="Username" />
        <label htmlFor="userpassword">Password: </label>
        <input type="password" id="userpassword" placeholder="Password" />
        <button type="submit">Submit</button>
        <button onClick={signUpPage}>Register</button>
      </Form>
    </>
  );
}
