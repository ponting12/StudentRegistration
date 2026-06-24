import Navbar from "../Components/Navbar";
import LoginForm from "../Components/LoginForm";
import { useRef } from "react";

const LoginPage = () => {

  return (
    <div>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row row-cols-lg-2 row-cols-1">
          <img
            className="img-fluid"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggnEznnjFIzRgmtlKAphAp4bFP2YBuO3Wz0xlqUzegg&s=10"
            alt="register image"
          ></img>
          <div className="p-5">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;