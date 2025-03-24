import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Home/Hero/Hero";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div className="bg-[#0D0D1F] text-white min-h-screen p-8">
      {/* Section Hero - Introduction */}
      <Hero
        title="Bienvenue sur Weeb : 
        La Plateforme des Passionnés du Web"
        description={`Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. 
        Que vous soyez développeur, designer ou passionné du digital, Weeb vous offre du contenu de qualité pour rester à la pointe.\n
       `}

        //displayButton={true}
      />
      <div className="max-w-4xl mx-auto mt-12">
        <motion.h2
          className="text-3xl font-semibold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Pourquoi utiliser Weeb ?
        </motion.h2>
        <p className="text-lg text-gray-300">
          Weeb est une plateforme dédiée aux professionnels et aux passionnés du
          web, offrant une gamme de services et de ressources pour améliorer
          votre expérience en ligne. Voici quelques-unes des raisons de choisir
          Weeb :
        </p>
        <ul>
          <li>Articles de qualité</li>
          <li>Communauté interactive</li>
          <li>Outils et ressources</li>
          <li>Tendances et innovations</li>
        </ul>
      </div>
      {/* Section Mission */}
      <div className="max-w-4xl mx-auto mt-12">
        <motion.h2
          className="text-3xl font-semibold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Notre Mission
        </motion.h2>
        <p className="text-lg text-gray-300">
          Weeb a pour objectif de fournir une plateforme de qualité pour les
          développeurs, designers et passionnés du digital, offrant des
          ressources, formations et un espace de collaboration.
        </p>
      </div>

      {/* Section Histoire */}
      <div className="max-w-4xl mx-auto mt-12">
        <motion.h2
          className="text-3xl font-semibold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Notre Histoire
        </motion.h2>
        <p className="text-lg text-gray-300">
          Fondée en 2025, Weeb est née d’une volonté de créer un espace où les
          professionnels du web peuvent apprendre et évoluer ensemble.
        </p>
      </div>

      {/* Section Équipe */}
      <div className="max-w-4xl mx-auto mt-12">
        <motion.h2
          className="text-3xl font-semibold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Notre Équipe
        </motion.h2>
        <p className="text-lg text-gray-300">
          Une équipe passionnée de développeurs, designers et créateurs de
          contenu qui partagent leur savoir et expertise pour enrichir notre
          communauté.
        </p>
      </div>

      {/* Section Rejoindre la communauté */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <motion.h2
          className="text-3xl font-semibold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Rejoignez-nous !
        </motion.h2>
        <p className="text-lg text-gray-300 mb-6">
          Inscrivez-vous dès aujourd’hui pour accéder à du contenu exclusif et
          intégrer une communauté dynamique.
        </p>
        <Button
          className="bg-[#9B59B6] px-6 py-3 text-white rounded-lg hover:bg-[#8E44AD] transition"
          text=" S'inscrire maintenant"
        />
      </div>
    </div>
  );
};

export default About;
