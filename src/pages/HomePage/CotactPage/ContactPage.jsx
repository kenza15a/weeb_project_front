import React from "react";
import ContactForm from "../../../components/Contact/ContactForm/ContactForm";
import Hero from "../../../components/Home/Hero/Hero";

const ContactPage = () => {
  const heroDescription =
    "Votre retour est essentiel pour nous améliorer ! Partagez votre expérience, dites-nous ce que vous aimez\n et ce que nous pourrions améliorer. Vos suggestions nous aident à faire de ce blog une ressource toujours\n plus utile et enrichissante. ";
  return (
    <main className="bg-main flex-grow w-full justify-center items-center pt-4 pb-8 md:py-10 px-4 ">
      <Hero
        className="w-full"
        title=" Votre avis compte"
        description={heroDescription}
        centeredDescription={true} // center the discription in the mobile
      />
      <ContactForm />
    </main>
  );
};

export default ContactPage;
