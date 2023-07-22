import React from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";

import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div className="login-component">
      <div>
        <img src="./images/cad.png" alt="logo" className="login-image" />
      </div>
      <div className="log">
        <FaUser className="user-icon" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue=""
            {...register("usuario")}
            placeholder="Usuário"
          />

          <input
            {...register("senha", { required: true })}
            placeholder="Senha"
          />
          {errors.senha && <p>O campo de senha é obrigatório!!! </p>}
          <br />
          <Link className="btn-submit" to={"/"}>Entrar</Link>
          
        </form>

        <p>
          ainda não é usuario ? <Link to={"/register"}>crie uma conta</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
