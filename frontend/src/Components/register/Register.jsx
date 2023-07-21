import React from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";

import "./Register.scss";
import { Link } from "react-router-dom";

const Register = () => {
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
            type="text"
            {...register("usuario")}
            placeholder="Usuário"
          />
          <input
            defaultValue=""
            type="email"
            {...register("email")}
            placeholder="Email"
          />

          <input type="date" defaultValue="" {...register("niver")} />

          <input
            {...register("senha", { required: true })}
            placeholder="Senha"
          />
          {errors.senha && <p>O campo de senha é obrigatório!!! </p>}
          <br />
          <Link className="btn-submit" to={"/"}>Cadastrar</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
