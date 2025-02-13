import React, { useState } from "react";
import Input from "../../Form/Input/Input";
import TextArea from "../../Form/TextArea/TextArea";
import Button from "../../Button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
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
    <div className="w-full max-w-lg mx-auto p-6 border border-headings rounded-lg shadow-md bg-[rgba(175, 82, 222, 1)]">
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
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
            name="email"
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
        <Button text="Contact" type="submit" className="!max-w-max m-x-auto" />
      </form>
    </div>
  );
};

export default ContactForm;
