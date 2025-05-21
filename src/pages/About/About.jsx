// src/pages/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Pourquoi utiliser Weeb ?</h1>
      <p className="mb-4">
        Weeb est une plateforme dédiée aux professionnels et aux passionnés du
        web, offrant une gamme de services et de ressources pour améliorer votre
        expérience en ligne.
      </p>
      <ul className="list-disc list-inside mb-8">
        <li>Articles de qualité</li>
        <li>Communauté interactive</li>
        <li>Outils et ressources</li>
        <li>Tendances et innovations</li>
      </ul>

      <h2 className="text-3xl font-semibold mb-4">Notre Mission</h2>
      <p className="mb-8">
        Weeb a pour objectif de fournir une plateforme de qualité pour les
        développeurs, designers et passionnés du digital, offrant des
        ressources, formations et un espace de collaboration.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Notre Histoire</h2>
      <p className="mb-8">
        Fondée en 2025, Weeb est née d’une volonté de créer un espace où les
        professionnels du web peuvent apprendre et évoluer ensemble.
      </p>

      <h2 className="text-3xl font-semibold mb-4">Notre Équipe</h2>
      <p className="mb-8">
        Une équipe passionnée de développeurs, designers et créateurs de contenu
        qui partagent leur savoir et expertise pour enrichir notre communauté.
      </p>

      <div className="bg-blue-100 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-2">Rejoignez-nous !</h3>
        <p className="mb-4">
          Inscrivez-vous dès aujourd’hui pour accéder à du contenu exclusif et
          intégrer une communauté dynamique.
        </p>
        <Button
          text="S'inscrire maintenant"
          variant="accent"
          className="w-max"
          onClick={() => navigate("/register")}
        />
      </div>
    </div>
  );
}
