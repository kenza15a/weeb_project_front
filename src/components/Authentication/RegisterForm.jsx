import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Form/Input/Input";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
        Créer un compte
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mt-12 md:w-[40vw] lg:w-[30vw]  flex flex-col gap-y-6 items-center "
      >
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          label="Password "
          type="password"
          name="passWord"
          placeholder="Mot de passe"
          onChange={handleChange}
        />
        <Input
          label="Confirmer le mot de passe"
          type="password"
          name="confirmPassWord"
          placeholder="Confirmer le mot de passe"
          onChange={handleChange}
        />
        <Button
          className="!max-w-max !mx-auto"
          text="Créer mon compte"
          type="submit"
        />
      </form>
    </section>
  );
};

export default RegisterForm;
