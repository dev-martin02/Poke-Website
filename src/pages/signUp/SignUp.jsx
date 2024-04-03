import { useNavigate } from "react-router-dom";
import Form from "../../components/form/Form";

export default function SignUp() {
    const navigate = useNavigate()
  return (
    <>
      <h1>Hello, I'm SignUp Page</h1>

      <Form>
        <label htmlFor="Name">Name: </label>
        <input type="text" id="name" placeholder="name" />

        <label htmlFor="password">password: </label>
        <input type="password" id="password" placeholder="Password" />

        <label htmlFor="confiPass">Confirm password: </label>
        <input type="password" id="confiPass" placeholder="Confirm Password"/>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder="Write your email"/>

        <button onClick={() => navigate('/login')}>Submit</button>
      </Form>   
    </>
  );
}
