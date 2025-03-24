import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Form/Input/Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    passWord: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-white">
        Se connecter
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mt-12 md:w-[40vw] lg:w-[30vw]  flex flex-col gap-y-6 items-center "
      >
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password "
          type="password"
          name="passWord"
          value={formData.passWord}
          onChange={handleChange}
        />
        <Button
          text="Se connecter"
          type="submit"
          className="!max-w-max !mx-auto"
        />
      </form>
      <div className="px-6 flex flex-col items-center gap-y-4 mt-10 text-white">
        <p className="text-md font-bold">Mot de passe oublié ?</p>
        <p className="text-center">
          Vous n’avez pas de compte ? Vous pouvez en{" "}
          <Link to="/signup" className="underline">
            créer un
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
