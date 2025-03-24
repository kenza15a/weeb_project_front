import React, { useState } from "react";
import Input from "../../Form/Input/Input";
import TextArea from "../../Form/TextArea/TextArea";
import Button from "../../Button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="w-full max-w-[90%] md:max-w-[60%] lg:max-w-[50%] mx-auto p-8 md:p-3 border border-headings rounded-lg shadow-md bg-[rgba(192,132,252,0.1)]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  gap-y-8 py-2 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
          <Input
            label="Prénom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {" "}
          <Input
            label="Numero de téléphone"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />{" "}
          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <TextArea
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button text="Contact" type="submit" className="!max-w-max !mx-auto" />
      </form>
    </section>
  );
};

export default ContactForm;
