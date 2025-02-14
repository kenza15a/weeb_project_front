---


---

<h1 id="rapport-sur-les-choix-techniques-du-projet-weeb">Rapport sur les Choix Techniques du Projet Weeb</h1>
<p>Dans ce projet, nous aurons pour mission de développer les premières interfaces du site internet de l’entreprise Weeb. Celle-ci souhaite créer un site en incluant une partie vitrine, un blog ainsi qu’un espace d’authentification. Nous nous focaliserons sur la partie vitrine durant la première semaine. En effet, l’objectif est de développer les pages Home, Contact, Log in. Vous aurez une maquette, à dispotion, que le client(Weeb) à réaliser avec ses designers en interne.<br>
Dans les prochaines rubriques nous allons voir l’ensemble de technologies package framework et librairies choisies pour developper ce projet</p>
<h2 id="introduction"><strong>1. Introduction</strong></h2>
<h3 id="objectif-du-projet"><strong>Objectif du projet</strong></h3>
<p>Le projet <strong>Weeb Front</strong> vise à fournir une interface utilisateur moderne et réactive, en utilisant les dernières technologies web pour garantir performance, maintenabilité et évolutivité.</p>
<h3 id="contexte-et-technologies-utilisées"><strong>Contexte et technologies utilisées</strong></h3>
<p>Le projet repose sur <strong>React</strong> en tant que framework principal pour le développement du frontend. Il est structuré avec <strong>React Router</strong> pour la navigation, <strong>Framer Motion</strong> pour les animations, <strong>TailwindCSS</strong> pour le styling, et <strong>Web Vitals</strong> pour optimiser la performance.</p>
<h2 id="choix-technologiques"><strong>2. Choix technologiques</strong></h2>
<h3 id="frontend--react"><strong>Frontend : React</strong></h3>
<ul>
<li>
<p>Version utilisée : <strong>React 18.3.1</strong></p>
</li>
<li>
<p>Avantages :</p>
<ul>
<li>
<p>Performance et mise à jour optimisée avec React 18.</p>
</li>
<li>
<p>Facilité de gestion du state et des hooks.</p>
</li>
<li>
<p>Large écosystème et communauté active.</p>
</li>
<li>
<p>Version stable</p>
</li>
</ul>
</li>
</ul>
<h3 id="gestion-de-la-navigation--react-router"><strong>Gestion de la Navigation : React Router</strong></h3>
<ul>
<li>
<p>Version : <strong>6.29.0</strong></p>
</li>
<li>
<p>Pourquoi ?</p>
<ul>
<li>
<p>Gestion avancée des routes et de la navigation dynamique.</p>
</li>
<li>
<p>Support des routes imbriquées et de la navigation basée sur les paramètres.</p>
</li>
<li>
<p>Facilité d’intégration avec d’autres bibliothèques.</p>
</li>
<li>
<h3 id="animations--framer-motion"><strong>Animations : Framer Motion</strong></h3>
</li>
</ul>
</li>
<li>
<p>Version : <strong>12.4.2</strong></p>
</li>
<li>
<p>Utilisation :</p>
<ul>
<li>
<p>Ajout d’animations fluides pour améliorer l’expérience utilisateur.</p>
</li>
<li>
<p>Gestion avancée des transitions et animations interactives.</p>
</li>
<li>
<p>Performance optimisée grâce à son intégration avec React.</p>
</li>
</ul>
</li>
</ul>
<h3 id="styling--tailwindcss"><strong>Styling : TailwindCSS</strong></h3>
<ul>
<li>
<p>Version : <strong>3.x.x</strong></p>
</li>
<li>
<p>Avantages :</p>
<ul>
<li>
<p>Écriture rapide et efficace du CSS en utilisant des classes utilitaires.</p>
</li>
<li>
<p>Haute personnalisation sans besoin de fichiers CSS volumineux.</p>
</li>
<li>
<p>Optimisation de la taille du bundle avec <code>purgecss</code>.</p>
</li>
</ul>
</li>
</ul>
<h3 id="gestion-des-performances--web-vitals"><strong>Gestion des performances : Web Vitals</strong></h3>
<ul>
<li>
<p>Version : <strong>4.2.4</strong></p>
</li>
<li>
<p>Utilisation :</p>
<ul>
<li>
<p>Suivi des performances du site en temps réel.</p>
</li>
<li>
<p>Optimisation des métriques <strong>Core Web Vitals</strong> (LCP, FID, CLS).</p>
</li>
<li>
<p>Intégration avec des outils de monitoring et d’analyse.</p>
</li>
</ul>
</li>
</ul>
<h3 id="icônes--react-icons"><strong>Icônes : React Icons</strong></h3>
<ul>
<li>
<p>Version : <strong>5.4.0</strong></p>
</li>
<li>
<p>Utilisation :</p>
<ul>
<li>
<p>Fournit une large bibliothèque d’icônes vectorielles facilement intégrables.</p>
</li>
<li>
<p>Optimisation des performances grâce à un import sélectif des icônes.</p>
</li>
</ul>
</li>
</ul>
<h2 id="outils-et-développement"><strong>3. Outils et Développement</strong></h2>
<h3 id="création-et-gestion-du-projet-avec-create-react-app-cra"><strong>Création et gestion du projet avec Create React App (CRA)</strong></h3>
<ul>
<li>
<p>Utilisation de <strong>cra-template 1.2.0</strong> comme base de projet.</p>
</li>
<li>
<p>Permet un setup rapide et prêt à l’emploi avec une configuration préétablie.</p>
</li>
</ul>
<h3 id="utilisation-de-eslint-et-configuration"><strong>Utilisation de ESLint et configuration</strong></h3>
<ul>
<li>
<p>Vérification du code avec <strong>React App ESLint + Jest</strong>.</p>
</li>
<li>
<p>Suivi des bonnes pratiques et détection des erreurs potentielles.</p>
</li>
</ul>
<h3 id="scripts-disponibles-et-leur-utilité"><strong>Scripts disponibles et leur utilité</strong></h3>
<ul>
<li>
<p><code>**start**</code> : Démarre le projet en mode développement.</p>
</li>
<li>
<p><code>**build**</code> : Génère la version optimisée pour la production.</p>
</li>
<li>
<p><code>**test**</code> : Exécute les tests unitaires.</p>
</li>
<li>
<p><code>**eject**</code> : Permet d’accéder aux configurations internes de React.</p>
</li>
</ul>
<h3 id="gestion-des-dépendances-et-mise-à-jour"><strong>Gestion des dépendances et mise à jour</strong></h3>
<ul>
<li>
<p>Utilisation de <strong>npm</strong> pour la gestion des packages.</p>
</li>
<li>
<p>Suivi des mises à jour des dépendances critiques.</p>
</li>
</ul>
<h2 id="architecture-du-code"><strong>4. Architecture du Code</strong></h2>
<h3 id="structure-des-dossiers"><strong>Structure des dossiers</strong></h3>
<p>weeb_front/<br>
│── src/<br>
│   │── assets/<br>
│   │   │── images/           # Contient les images et icônes du projet<br>
│   │   │   ├── testimonials/  # Images spécifiques aux témoignages<br>
│   │   │   ├── animated-squares.png<br>
│   │   │   ├── Desktop.png<br>
│   │── components/       # Composants réutilisables<br>
│   │── pages/            # Pages principales du site<br>
│   │── App.js            # Composant principal<br>
│   │── App.css           # Styles globaux de l’application<br>
│   │── App.test.js       # Tests unitaires pour App<br>
│   │── index.js          # Point d’entrée de l’application<br>
│   │── index.css         # Styles globaux supplémentaires<br>
│   │── logo.svg          # Logo du projet<br>
│   │── reportWebVitals.js # Suivi des performances<br>
│   │── setupTests.js      # Configuration des tests<br>
│   │── tailwind.css       # Fichier de configuration TailwindCSS<br>
└── package.json<br>
└── package-lock.json<br>
└── postcss.config.js<br>
└── tailwind.config.js<br>
└── .gitignore<br>
└── <a href="http://README.md">README.md</a></p>
<h3 id="organisation-des-composants"><strong>Organisation des composants</strong></h3>
<ul>
<li>
<p>Le dossier <code>**components/**</code> contient tous les composants réutilisables.</p>
</li>
<li>
<p>Le dossier <code>**pages/**</code> stocke les différentes pages de l’application.</p>
</li>
<li>
<p>Les images et icônes sont centralisées dans <code>**assets/images/**</code>.</p>
</li>
<li>
<p>Les fichiers globaux (<code>App.js</code>, <code>index.js</code>, <code>tailwind.css</code>) sont placés dans <code>**src/**</code>.</p>
</li>
<li></li>
</ul>
<h3 id="organisation-des-composants-1"><strong>Organisation des composants</strong></h3>
<ul>
<li>
<p>Chaque composant est dans un dossier avec son fichier <code>.jsx</code>,  et son fichier css en cas de besoin,</p>
</li>
<li>
<p>Les styles communs entre tous les composants sont stockés au niveau du fichier tailwind .css</p>
</li>
<li>
<h3 id="utilisation-des-hooks-react"><strong>Utilisation des hooks React</strong></h3>
</li>
<li>
<p><strong>useState, useEffect</strong> : Gestion de l’état et des effets.</p>
</li>
<li>
<p><strong>useContext</strong> : Gestion du contexte global (si applicable).</p>
</li>
<li>
<p><strong>useRef</strong> : Références persistantes pour manipuler des éléments DOM.</p>
</li>
</ul>
<h3 id="gestion-de-l’état"><strong>Gestion de l’état</strong></h3>
<ul>
<li>
<p>Pour l’instant, le projet ne semble pas utiliser un gestionnaire d’état global (comme Redux ou Zustand).</p>
</li>
<li>
<p>React <strong>useState</strong> et <strong>useContext</strong> suffisent pour la plupart des cas d’usage.</p>
</li>
<li></li>
<li>
<h2 id="conclusion"><strong>Conclusion</strong></h2>
</li>
</ul>
<h3 id="récapitulatif-des-choix-et-avantages"><strong>Récapitulatif des choix et avantages</strong></h3>
<ul>
<li>
<p><strong>React 18.3.1</strong> : Moderne et performant.</p>
</li>
<li>
<p><strong>React Router 6.29.0</strong> : Gestion avancée de la navigation.</p>
</li>
<li>
<p><strong>Framer Motion 12.4.2</strong> : Animations fluides et performantes.</p>
</li>
<li>
<p><strong>TailwindCSS 3.x.x</strong> : Styling efficace et rapide.</p>
</li>
<li>
<p><strong>Web Vitals 4.2.4</strong> : Suivi des performances.</p>
</li>
</ul>
<h3 id="perspectives-d’amélioration"><strong>Perspectives d’amélioration</strong></h3>
<ul>
<li>Ajouter un <strong>gestionnaire d’état global</strong> (Redux, Zustand ou Context API avancé).</li>
<li>Ajouter une librairie d egestion et d’automatiqation de la documentation des composants comme Jsdoc StooryBook</li>
<li></li>
</ul>
<p>**</p>
<h2 id="quelques-captures">Quelques captures</h2>
<iframe src="https://www.behance.net/embed/project/219274011?ilo0=1" height="316" width="404" allowfullscreen=""></iframe>
<hr>

