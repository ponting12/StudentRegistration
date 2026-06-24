import Navbar from "../Components/Navbar";
import RegisterForm from "../Components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row row-cols-lg-2 row-cols-1">
          <img
            className="img-fluid"
            src="https://plus.unsplash.com/premium_vector-1682298458922-eda05df74b33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
            alt="register image"
          ></img>
          <div className="p-5">
            <RegisterForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
