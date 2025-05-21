# Rapport sur les Choix Techniques du Projet Weeb
***
Dans ce projet, nous aurons pour mission de développer les premières interfaces du site internet de l’entreprise Weeb. Celle-ci souhaite créer un site en incluant une partie vitrine, un blog ainsi qu’un espace d’authentification. Nous nous focaliserons sur la partie vitrine durant la première semaine. En effet, l’objectif est de développer les pages Home, Contact, Log in. Vous aurez une maquette, à dispotion, que le client(Weeb) à réaliser avec ses designers en interne. 
Dans les prochaines rubriques nous allons voir l'ensemble de technologies package framework et librairies choisies pour developper ce projet 

## **1. Introduction**

### **Objectif du projet**

Le projet **Weeb Front** vise à fournir une interface utilisateur moderne et réactive, en utilisant les dernières technologies web pour garantir performance, maintenabilité et évolutivité.

### **Contexte et technologies utilisées**

Le projet repose sur **React** en tant que framework principal pour le développement du frontend. Il est structuré avec **React Router** pour la navigation, **Framer Motion** pour les animations, **TailwindCSS** pour le styling, et **Web Vitals** pour optimiser la performance. 

## **2. Choix technologiques**


  ### **Frontend : React**

-   Version utilisée : **React 18.3.1**
    
-   Avantages :
    
    -   Performance et mise à jour optimisée avec React 18.
        
    -   Facilité de gestion du state et des hooks.
        
    -   Large écosystème et communauté active.
    -   Version stable
   
   ### **Gestion de la Navigation : React Router**

-   Version : **6.29.0**
    
-   Pourquoi ?
    
    -   Gestion avancée des routes et de la navigation dynamique.
        
    -   Support des routes imbriquées et de la navigation basée sur les paramètres.
        
    -   Facilité d'intégration avec d'autres bibliothèques.
    - ### **Animations : Framer Motion**

-   Version : **12.4.2**
    
-   Utilisation :
    
    -   Ajout d'animations fluides pour améliorer l'expérience utilisateur.
        
    -   Gestion avancée des transitions et animations interactives.
        
    -   Performance optimisée grâce à son intégration avec React.
        

### **Styling : TailwindCSS**

-   Version : **3.x.x**
    
-   Avantages :
    
    -   Écriture rapide et efficace du CSS en utilisant des classes utilitaires.
        
    -   Haute personnalisation sans besoin de fichiers CSS volumineux.
        
    -   Optimisation de la taille du bundle avec `purgecss`.
        

### **Gestion des performances : Web Vitals**

-   Version : **4.2.4**
    
-   Utilisation :
    
    -   Suivi des performances du site en temps réel.
        
    -   Optimisation des métriques **Core Web Vitals** (LCP, FID, CLS).
        
    -   Intégration avec des outils de monitoring et d'analyse.
   ### **Icônes : React Icons**

-   Version : **5.4.0**
    
-   Utilisation :
    
    -   Fournit une large bibliothèque d'icônes vectorielles facilement intégrables.
        
    -   Optimisation des performances grâce à un import sélectif des icônes.
    
   ## **3. Outils et Développement**

### **Création et gestion du projet avec Create React App (CRA)**

-   Utilisation de **cra-template 1.2.0** comme base de projet.
    
-   Permet un setup rapide et prêt à l’emploi avec une configuration préétablie.
    

### **Utilisation de ESLint et configuration**

-   Vérification du code avec **React App ESLint + Jest**.
    
-   Suivi des bonnes pratiques et détection des erreurs potentielles.
    

### **Scripts disponibles et leur utilité**

-   `**start**` : Démarre le projet en mode développement.
    
-   `**build**` : Génère la version optimisée pour la production.
    
-   `**test**` : Exécute les tests unitaires.
    
-   `**eject**` : Permet d’accéder aux configurations internes de React.
    

### **Gestion des dépendances et mise à jour**

-   Utilisation de **npm** pour la gestion des packages.
    
-   Suivi des mises à jour des dépendances critiques.
    
## **4. Architecture du Code**

### **Structure des dossiers**

weeb_front/
│── src/
│   │── assets/
│   │   │── images/           # Contient les images et icônes du projet
│   │   │   ├── testimonials/  # Images spécifiques aux témoignages
│   │   │   ├── animated-squares.png
│   │   │   ├── Desktop.png
│   │── components/       # Composants réutilisables
│   │── pages/            # Pages principales du site
│   │── App.js            # Composant principal
│   │── App.css           # Styles globaux de l'application
│   │── App.test.js       # Tests unitaires pour App
│   │── index.js          # Point d'entrée de l'application
│   │── index.css         # Styles globaux supplémentaires
│   │── logo.svg          # Logo du projet
│   │── reportWebVitals.js # Suivi des performances
│   │── setupTests.js      # Configuration des tests
│   │── tailwind.css       # Fichier de configuration TailwindCSS
└── package.json
└── package-lock.json
└── postcss.config.js
└── tailwind.config.js
└── .gitignore
└── README.md 
### **Organisation des composants**

-   Le dossier `**components/**` contient tous les composants réutilisables.
    
-   Le dossier `**pages/**` stocke les différentes pages de l’application.
    
-   Les images et icônes sont centralisées dans `**assets/images/**`.
    
-   Les fichiers globaux (`App.js`, `index.js`, `tailwind.css`) sont placés dans `**src/**`.
- 
### **Organisation des composants**

-   Chaque composant est dans un dossier avec son fichier `.jsx`,  et son fichier css en cas de besoin, 
- Les styles communs entre tous les composants sont stockés au niveau du fichier tailwind .css 
- ### **Utilisation des hooks React**

-   **useState, useEffect** : Gestion de l’état et des effets.
    
-   **useContext** : Gestion du contexte global (si applicable).
    
-   **useRef** : Références persistantes pour manipuler des éléments DOM.
    

### **Gestion de l’état**

-   Pour l’instant, le projet ne semble pas utiliser un gestionnaire d’état global (comme Redux ou Zustand).
    
-   React **useState** et **useContext** suffisent pour la plupart des cas d’usage.
-
- ## **Conclusion**

### **Récapitulatif des choix et avantages**

-   **React 18.3.1** : Moderne et performant.
    
-   **React Router 6.29.0** : Gestion avancée de la navigation.
    
-   **Framer Motion 12.4.2** : Animations fluides et performantes.
    
-   **TailwindCSS 3.x.x** : Styling efficace et rapide.
    
-   **Web Vitals 4.2.4** : Suivi des performances.
    

### **Perspectives d’amélioration**

-   Ajouter un **gestionnaire d’état global** (Redux, Zustand ou Context API avancé).
-   Ajouter une librairie d egestion et d'automatiqation de la documentation des composants comme Jsdoc StooryBook
-
**

## Quelques captures


<iframe src="https://www.behance.net/embed/project/219274011?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
    
