const QuestionData={
    react: [
      { question: "Qu'est-ce que React ?", options: [
        { text: "Un langage de programmation", correct: false },
        { text: "Un framework CSS", correct: false },
        { text: "Une bibliothèque JavaScript", correct: true },
        { text: "Un éditeur de texte", correct: false },
      ]},
      { question: "Qui a développé React ?", options: [
        { text: "Google", correct: false },
        { text: "Facebook", correct: true },
        { text: "Twitter", correct: false },
        { text: "Microsoft", correct: false },
      ]},
      { question: "Que signifie JSX ?", options: [
        { text: "JavaScript Syntax Extension", correct: true },
        { text: "JavaScript eXtended", correct: false },
        { text: "JavaScript XML", correct: false },
        { text: "JavaScript and XAML", correct: false },
      ]},
      { question: "Quelle commande est utilisée pour créer une nouvelle application React ?", options: [
        { text: "npx create-react-app", correct: true },
        { text: "npm install react", correct: false },
        { text: "npm init react", correct: false },
        { text: "react-new-app", correct: false },
      ]},
      { question: "Quelle méthode de cycle de vie est utilisée pour mettre à jour un composant ?", options: [
        { text: "componentWillMount", correct: false },
        { text: "componentDidUpdate", correct: true },
        { text: "componentDidMount", correct: false },
        { text: "render", correct: false },
      ]},
      { question: "Comment créer un composant fonctionnel en React ?", options: [
        { text: "class MyComponent extends React.Component", correct: false },
        { text: "function MyComponent()", correct: true },
        { text: "const MyComponent = React.createComponent", correct: false },
        { text: "React.createClass()", correct: false },
      ]},
      { question: "Quel hook est utilisé pour gérer l'état dans un composant fonctionnel ?", options: [
        { text: "useEffect", correct: false },
        { text: "useState", correct: true },
        { text: "useContext", correct: false },
        { text: "useReducer", correct: false },
      ]},
      { question: "React est-il un framework ou une bibliothèque ?", options: [
        { text: "Framework", correct: false },
        { text: "Bibliothèque", correct: true },
        { text: "Langage", correct: false },
        { text: "IDE", correct: false },
      ]},
      { question: "Qu'est-ce que le Virtual DOM ?", options: [
        { text: "Un DOM virtuel stocké dans le navigateur", correct: false },
        { text: "Une représentation en mémoire du DOM réel", correct: true },
        { text: "Une copie exacte du DOM réel", correct: false },
        { text: "Une API pour manipuler le DOM", correct: false },
      ]},
      { question: "Comment mettre à jour un composant enfant à partir du parent ?", options: [
        { text: "Passer une prop avec une fonction de rappel", correct: true },
        { text: "Utiliser l'objet DOM", correct: false },
        { text: "Utiliser une variable globale", correct: false },
        { text: "Aucune de ces réponses", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour rendre les éléments dans React ?", options: [
        { text: "render()", correct: true },
        { text: "display()", correct: false },
        { text: "show()", correct: false },
        { text: "view()", correct: false },
      ]},
      { question: "Comment passer des données à un composant enfant ?", options: [
        { text: "En utilisant des événements", correct: false },
        { text: "En utilisant des props", correct: true },
        { text: "En utilisant des états", correct: false },
        { text: "En utilisant des références", correct: false },
      ]},
      { question: "Quelle méthode permet de forcer le re-rendu d'un composant ?", options: [
        { text: "this.forceUpdate()", correct: true },
        { text: "this.renderAgain()", correct: false },
        { text: "this.reloadComponent()", correct: false },
        { text: "this.setState()", correct: false },
      ]},
      { question: "Qu'est-ce que React Router ?", options: [
        { text: "Un gestionnaire d'état", correct: false },
        { text: "Un outil de routage pour les applications React", correct: true },
        { text: "Un plugin pour gérer les animations", correct: false },
        { text: "Une bibliothèque pour les tests", correct: false },
      ]},
      { question: "Quel hook est utilisé pour gérer les effets de bord dans un composant ?", options: [
        { text: "useState", correct: false },
        { text: "useEffect", correct: true },
        { text: "useContext", correct: false },
        { text: "useReducer", correct: false },
      ]},
      { question: "Que signifie SPA en termes de développement web ?", options: [
        { text: "Single Page Application", correct: true },
        { text: "Simple Product App", correct: false },
        { text: "Single Process Application", correct: false },
        { text: "Service Provider Application", correct: false },
      ]},
      { question: "Quel package manager est souvent utilisé avec React ?", options: [
        { text: "Composer", correct: false },
        { text: "npm", correct: true },
        { text: "pip", correct: false },
        { text: "gem", correct: false },
      ]},
      { question: "Qu'est-ce que Redux ?", options: [
        { text: "Un gestionnaire d'état pour JavaScript", correct: true },
        { text: "Une méthode de mise en page CSS", correct: false },
        { text: "Une extension de React", correct: false },
        { text: "Un moteur de rendu", correct: false },
      ]},
      { question: "Quel outil est utilisé pour transpirer le code JSX ?", options: [
        { text: "Babel", correct: true },
        { text: "Webpack", correct: false },
        { text: "Node.js", correct: false },
        { text: "TypeScript", correct: false },
      ]}
    ],
    mysql: [
      { question: "Que signifie SQL ?", options: [
        { text: "Structured Query Language", correct: true },
        { text: "Simple Query Language", correct: false },
        { text: "Sorted Query Language", correct: false },
        { text: "Symbolic Query Language", correct: false },
      ]},
      {
        question: "Qu'est-ce que MySQL ?",
        options: [
          { text: "Un système de gestion de base de données relationnelle", correct: true },
          { text: "Un langage de programmation", correct: false },
          { text: "Une bibliothèque JavaScript", correct: false },
          { text: "Un système de fichiers", correct: false },
        ],
      },
      {
        question: "Quelle est la commande pour afficher toutes les bases de données dans MySQL ?",
        options: [
          { text: "SHOW DATABASES;", correct: true },
          { text: "SHOW TABLES;", correct: false },
          { text: "SELECT DATABASES;", correct: false },
          { text: "LIST DATABASES;", correct: false },
        ],
      },
      {
        question: "Quelle est la commande pour créer une nouvelle base de données ?",
        options: [
          { text: "CREATE DATABASE nom_de_la_base;", correct: true },
          { text: "NEW DATABASE nom_de_la_base;", correct: false },
          { text: "ADD DATABASE nom_de_la_base;", correct: false },
          { text: "INIT DATABASE nom_de_la_base;", correct: false },
        ],
      },
      {
        question: "Quelle commande permet de sélectionner une base de données dans MySQL ?",
        options: [
          { text: "USE nom_de_la_base;", correct: true },
          { text: "SELECT nom_de_la_base;", correct: false },
          { text: "OPEN nom_de_la_base;", correct: false },
          { text: "CONNECT nom_de_la_base;", correct: false },
        ],
      },
      {
        question: "Quelle commande permet de supprimer une base de données dans MySQL ?",
        options: [
          { text: "DROP DATABASE nom_de_la_base;", correct: true },
          { text: "DELETE DATABASE nom_de_la_base;", correct: false },
          { text: "REMOVE DATABASE nom_de_la_base;", correct: false },
          { text: "DESTROY DATABASE nom_de_la_base;", correct: false },
        ],
      },
      {
        question: "Comment insérer une nouvelle ligne dans une table MySQL ?",
        options: [
          { text: "INSERT INTO nom_de_la_table VALUES (...);", correct: true },
          { text: "ADD INTO nom_de_la_table VALUES (...);", correct: false },
          { text: "PUT INTO nom_de_la_table VALUES (...);", correct: false },
          { text: "SAVE INTO nom_de_la_table VALUES (...);", correct: false },
        ],
      },
      {
        question: "Comment récupérer toutes les lignes d'une table MySQL ?",
        options: [
          { text: "SELECT * FROM nom_de_la_table;", correct: true },
          { text: "FETCH ALL FROM nom_de_la_table;", correct: false },
          { text: "RETRIEVE * FROM nom_de_la_table;", correct: false },
          { text: "GET * FROM nom_de_la_table;", correct: false },
        ],
      },
      {
        question: "Quelle commande est utilisée pour modifier une table existante ?",
        options: [
          { text: "ALTER TABLE nom_de_la_table;", correct: true },
          { text: "MODIFY TABLE nom_de_la_table;", correct: false },
          { text: "CHANGE TABLE nom_de_la_table;", correct: false },
          { text: "UPDATE TABLE nom_de_la_table;", correct: false },
        ],
      },
      {
        question: "Comment ajouter une colonne dans une table MySQL ?",
        options: [
          { text: "ALTER TABLE nom_de_la_table ADD COLUMN nom_de_la_colonne TYPE;", correct: true },
          { text: "INSERT COLUMN nom_de_la_colonne INTO nom_de_la_table;", correct: false },
          { text: "ADD nom_de_la_colonne TO nom_de_la_table;", correct: false },
          { text: "UPDATE nom_de_la_table SET nom_de_la_colonne TYPE;", correct: false },
        ],
      },
      {
        question: "Quel type de données MySQL est utilisé pour stocker du texte court ?",
        options: [
          { text: "VARCHAR", correct: true },
          { text: "TEXT", correct: false },
          { text: "CHAR", correct: false },
          { text: "STRING", correct: false },
        ],
      },
      {
        question: "Quel mot-clé est utilisé pour éviter les doublons dans une requête SELECT ?",
        options: [
          { text: "DISTINCT", correct: true },
          { text: "UNIQUE", correct: false },
          { text: "FILTER", correct: false },
          { text: "ONLY", correct: false },
        ],
      },
      {
        question: "Comment limiter le nombre de résultats dans une requête SELECT ?",
        options: [
          { text: "LIMIT", correct: true },
          { text: "TOP", correct: false },
          { text: "MAX", correct: false },
          { text: "RANGE", correct: false },
        ],
      },
      {
        question: "Quel est le type de jointure qui retourne toutes les lignes communes entre deux tables ?",
        options: [
          { text: "INNER JOIN", correct: true },
          { text: "LEFT JOIN", correct: false },
          { text: "RIGHT JOIN", correct: false },
          { text: "OUTER JOIN", correct: false },
        ],
      },
      {
        question: "Comment supprimer une table dans MySQL ?",
        options: [
          { text: "DROP TABLE nom_de_la_table;", correct: true },
          { text: "DELETE TABLE nom_de_la_table;", correct: false },
          { text: "REMOVE TABLE nom_de_la_table;", correct: false },
          { text: "DESTROY TABLE nom_de_la_table;", correct: false },
        ],
      },
      {
        question: "Quel mot-clé est utilisé pour mettre à jour une ligne dans une table MySQL ?",
        options: [
          { text: "UPDATE", correct: true },
          { text: "MODIFY", correct: false },
          { text: "CHANGE", correct: false },
          { text: "SET", correct: false },
        ],
      },
      {
        question: "Quelle commande permet de supprimer des données dans une table MySQL ?",
        options: [
          { text: "DELETE FROM nom_de_la_table WHERE condition;", correct: true },
          { text: "REMOVE FROM nom_de_la_table WHERE condition;", correct: false },
          { text: "DROP FROM nom_de_la_table WHERE condition;", correct: false },
          { text: "ERASE FROM nom_de_la_table WHERE condition;", correct: false },
        ],
      },
      {
        question: "Quelle est la commande pour créer un nouvel utilisateur dans MySQL ?",
        options: [
          { text: "CREATE USER 'nom_utilisateur'@'hôte' IDENTIFIED BY 'mot_de_passe';", correct: true },
          { text: "ADD USER 'nom_utilisateur'@'hôte' WITH 'mot_de_passe';", correct: false },
          { text: "NEW USER 'nom_utilisateur'@'hôte' IDENTIFIED BY 'mot_de_passe';", correct: false },
          { text: "INSERT USER 'nom_utilisateur'@'hôte' PASSWORD 'mot_de_passe';", correct: false },
        ],
      },
      {
        question: "Comment donner des privilèges à un utilisateur MySQL ?",
        options: [
          { text: "GRANT ALL PRIVILEGES ON base_de_donnees.* TO 'nom_utilisateur'@'hôte';", correct: true },
          { text: "GIVE ALL ON base_de_donnees TO 'nom_utilisateur'@'hôte';", correct: false },
          { text: "ALLOW PRIVILEGES ON base_de_donnees TO 'nom_utilisateur'@'hôte';", correct: false },
          { text: "PERMIT ALL PRIVILEGES ON base_de_donnees TO 'nom_utilisateur'@'hôte';", correct: false },
        ],
      },
      {
        question: "Comment sauvegarder une base de données MySQL en ligne de commande ?",
        options: [
          { text: "mysqldump -u utilisateur -p base_de_donnees > sauvegarde.sql", correct: true },
          { text: "mysqlbackup -u utilisateur -p base_de_donnees > sauvegarde.sql", correct: false },
          { text: "mysqldump --save base_de_donnees > sauvegarde.sql", correct: false },
          { text: "mysqlbackup --dump base_de_donnees > sauvegarde.sql", correct: false },
        ],
      },
      {
        question: "Quelle commande permet de restaurer une base de données MySQL à partir d'une sauvegarde ?",
        options: [
          { text: "mysql -u utilisateur -p base_de_donnees < sauvegarde.sql", correct: true },
          { text: "mysqlrestore -u utilisateur -p base_de_donnees < sauvegarde.sql", correct: false },
          { text: "mysqldump --restore base_de_donnees < sauvegarde.sql", correct: false },
          { text: "mysql --load base_de_donnees < sauvegarde.sql", correct: false },
        ],
      },
    ],
    agile: [
      { question: "Qu'est-ce que Agile ?", options: [
        { text: "Une méthode de gestion de projet", correct: true },
        { text: "Un langage de programmation", correct: false },
        { text: "Un framework CSS", correct: false },
        { text: "Un éditeur de texte", correct: false },
      ]},
      {
        question: "Qu'est-ce que la méthodologie Agile ?",
        options: [
          { text: "Un cadre de développement itératif et collaboratif", correct: true },
          { text: "Un modèle en cascade pour les projets", correct: false },
          { text: "Une méthode de gestion des ressources humaines", correct: false },
          { text: "Un langage de programmation", correct: false },
        ],
      },
      {
        question: "Quel est l'un des principes clés du Manifeste Agile ?",
        options: [
          { text: "La collaboration avec le client plutôt que la négociation de contrat", correct: true },
          { text: "Le respect rigide du plan de projet", correct: false },
          { text: "Les processus et les outils avant les individus", correct: false },
          { text: "Le travail en solo plutôt qu'en équipe", correct: false },
        ],
      },
      {
        question: "Quelle est la durée typique d'un sprint dans Scrum, un cadre Agile ?",
        options: [
          { text: "2 à 4 semaines", correct: true },
          { text: "1 mois", correct: false },
          { text: "6 mois", correct: false },
          { text: "1 semaine", correct: false },
        ],
      },
      {
        question: "Quel rôle est responsable de la maximisation de la valeur du produit dans Scrum ?",
        options: [
          { text: "Product Owner", correct: true },
          { text: "Scrum Master", correct: false },
          { text: "Développeur", correct: false },
          { text: "Stakeholder", correct: false },
        ],
      },
      {
        question: "Comment s'appelle la réunion quotidienne dans Scrum ?",
        options: [
          { text: "Daily Scrum (ou Daily Stand-up)", correct: true },
          { text: "Sprint Review", correct: false },
          { text: "Sprint Retrospective", correct: false },
          { text: "Planning Poker", correct: false },
        ],
      },
      {
        question: "Quel artefact Scrum contient la liste des fonctionnalités à développer ?",
        options: [
          { text: "Product Backlog", correct: true },
          { text: "Sprint Backlog", correct: false },
          { text: "Release Backlog", correct: false },
          { text: "Feature List", correct: false },
        ],
      },
      {
        question: "Quel est le rôle du Scrum Master ?",
        options: [
          { text: "Faciliter le processus Scrum et supprimer les obstacles", correct: true },
          { text: "Définir la stratégie produit", correct: false },
          { text: "Coder les fonctionnalités principales", correct: false },
          { text: "Assigner des tâches aux développeurs", correct: false },
        ],
      },
      {
        question: "Quel est l'objectif principal d'une rétrospective de sprint ?",
        options: [
          { text: "Améliorer le processus de l'équipe", correct: true },
          { text: "Ajouter de nouvelles fonctionnalités", correct: false },
          { text: "Évaluer la performance individuelle", correct: false },
          { text: "Approuver la version finale", correct: false },
        ],
      },
      {
        question: "Quel outil est souvent utilisé pour estimer l'effort des tâches dans Scrum ?",
        options: [
          { text: "Planning Poker", correct: true },
          { text: "Gantt Chart", correct: false },
          { text: "Critical Path", correct: false },
          { text: "Kanban Board", correct: false },
        ],
      },
      {
        question: "Quel terme décrit un incrément livrable et potentiellement utilisable d'un produit dans Agile ?",
        options: [
          { text: "Incrément", correct: true },
          { text: "Épic", correct: false },
          { text: "User Story", correct: false },
          { text: "Sprint Goal", correct: false },
        ],
      },
      {
        question: "Quelle est la priorité absolue selon le Manifeste Agile ?",
        options: [
          { text: "Satisfaire le client en livrant rapidement et régulièrement des fonctionnalités de valeur", correct: true },
          { text: "Compléter le projet dans les délais et le budget prévus", correct: false },
          { text: "S'assurer que le produit est documenté", correct: false },
          { text: "Minimiser les changements tout au long du développement", correct: false },
        ],
      },
      {
        question: "Que signifie MVP dans le contexte Agile ?",
        options: [
          { text: "Minimum Viable Product", correct: true },
          { text: "Most Valuable Player", correct: false },
          { text: "Maximum Value Proposition", correct: false },
          { text: "Market Validation Plan", correct: false },
        ],
      },
      {
        question: "Dans quel cadre Agile visualise-t-on le flux de travail à l'aide de colonnes telles que 'À faire', 'En cours', et 'Terminé' ?",
        options: [
          { text: "Kanban", correct: true },
          { text: "Scrum", correct: false },
          { text: "Lean", correct: false },
          { text: "XP", correct: false },
        ],
      },
      {
        question: "Quel rôle est responsable du Product Backlog dans Scrum ?",
        options: [
          { text: "Product Owner", correct: true },
          { text: "Scrum Master", correct: false },
          { text: "Développeur", correct: false },
          { text: "Stakeholder", correct: false },
        ],
      },
      {
        question: "Quel terme désigne un gros élément de travail qui peut être décomposé en plusieurs user stories ?",
        options: [
          { text: "Épic", correct: true },
          { text: "Feature", correct: false },
          { text: "Task", correct: false },
          { text: "Sprint Goal", correct: false },
        ],
      },
      {
        question: "Quelle est l'une des valeurs fondamentales de l'Agilité ?",
        options: [
          { text: "Les individus et leurs interactions plus que les processus et les outils", correct: true },
          { text: "Un contrat de projet complet plus que la collaboration", correct: false },
          { text: "La documentation complète avant tout développement", correct: false },
          { text: "Une planification détaillée et figée", correct: false },
        ],
      },
      {
        question: "Quel événement dans Scrum se tient à la fin d'un sprint pour démontrer le travail accompli ?",
        options: [
          { text: "Sprint Review", correct: true },
          { text: "Daily Scrum", correct: false },
          { text: "Sprint Retrospective", correct: false },
          { text: "Backlog Refinement", correct: false },
        ],
      },
      {
        question: "Qu'est-ce qu'une user story dans Agile ?",
        options: [
          { text: "Une description simple de ce que l'utilisateur veut accomplir", correct: true },
          { text: "Un plan de projet", correct: false },
          { text: "Une documentation technique", correct: false },
          { text: "Un rapport de bug", correct: false },
        ],
      },
      {
        question: "Quel est le principal objectif d'un sprint ?",
        options: [
          { text: "Livrer un incrément fonctionnel du produit", correct: true },
          { text: "Documenter le produit", correct: false },
          { text: "Terminer toutes les tâches du backlog", correct: false },
          { text: "Améliorer les compétences de l'équipe", correct: false },
        ],
      },
    ],
    laravel: [
      { question: "Qu'est-ce que Laravel ?", options: [
        { text: "Un framework PHP", correct: true },
        { text: "Un langage de programmation", correct: false },
        { text: "Une bibliothèque JavaScript", correct: false },
        { text: "Un éditeur de texte", correct: false },
      ]},
      {
        question: "Qu'est-ce que Laravel ?",
        options: [
          { text: "Un framework PHP", correct: true },
          { text: "Un langage de programmation", correct: false },
          { text: "Une bibliothèque JavaScript", correct: false },
          { text: "Un éditeur de texte", correct: false },
        ],
      },
      {
        question: "Quel outil Laravel utilise-t-il pour interagir avec les bases de données ?",
        options: [
          { text: "Eloquent", correct: true },
          { text: "Doctrine", correct: false },
          { text: "SQLAlchemy", correct: false },
          { text: "ActiveRecord", correct: false },
        ],
      },
      {
        question: "Quelle commande Artisan permet de créer un nouveau contrôleur ?",
        options: [
          { text: "php artisan make:controller", correct: true },
          { text: "php artisan create:controller", correct: false },
          { text: "php artisan new:controller", correct: false },
          { text: "php artisan generate:controller", correct: false },
        ],
      },
      {
        question: "Quel fichier est utilisé pour la configuration des routes dans Laravel ?",
        options: [
          { text: "web.php", correct: true },
          { text: "routes.php", correct: false },
          { text: "config.php", correct: false },
          { text: "app.php", correct: false },
        ],
      },
      {
        question: "Laravel utilise quel moteur de templates ?",
        options: [
          { text: "Blade", correct: true },
          { text: "Twig", correct: false },
          { text: "Smarty", correct: false },
          { text: "Mustache", correct: false },
        ],
      },
      {
        question: "Comment s'appelle le système de migration de base de données dans Laravel ?",
        options: [
          { text: "Migrations", correct: true },
          { text: "Blueprint", correct: false },
          { text: "Schema", correct: false },
          { text: "DatabaseSync", correct: false },
        ],
      },
      {
        question: "Quel est le fichier de configuration principal de Laravel ?",
        options: [
          { text: ".env", correct: true },
          { text: "config.php", correct: false },
          { text: "settings.php", correct: false },
          { text: "app.yaml", correct: false },
        ],
      },
      {
        question: "Quelle méthode HTTP est utilisée pour envoyer des données dans un formulaire ?",
        options: [
          { text: "POST", correct: true },
          { text: "GET", correct: false },
          { text: "PUT", correct: false },
          { text: "DELETE", correct: false },
        ],
      },
      {
        question: "Quelle est la commande Artisan pour lancer le serveur de développement ?",
        options: [
          { text: "php artisan serve", correct: true },
          { text: "php artisan start", correct: false },
          { text: "php artisan run", correct: false },
          { text: "php artisan begin", correct: false },
        ],
      },
      {
        question: "Comment appelle-t-on le système d'injection de dépendances dans Laravel ?",
        options: [
          { text: "Service Container", correct: true },
          { text: "Dependency Injector", correct: false },
          { text: "Service Provider", correct: false },
          { text: "DI Manager", correct: false },
        ],
      },
      {
        question: "Quel est le nom du système d'événements dans Laravel ?",
        options: [
          { text: "Event Dispatcher", correct: true },
          { text: "Event Emitter", correct: false },
          { text: "Event Manager", correct: false },
          { text: "Event Handler", correct: false },
        ],
      },
      {
        question: "Comment nomme-t-on les classes qui gèrent la logique métier dans Laravel ?",
        options: [
          { text: "Controllers", correct: true },
          { text: "Models", correct: false },
          { text: "Views", correct: false },
          { text: "Services", correct: false },
        ],
      },
      {
        question: "Quelle commande Artisan permet de créer une migration ?",
        options: [
          { text: "php artisan make:migration", correct: true },
          { text: "php artisan create:migration", correct: false },
          { text: "php artisan generate:migration", correct: false },
          { text: "php artisan new:migration", correct: false },
        ],
      },
      {
        question: "Quel est l'espace de noms principal de Laravel ?",
        options: [
          { text: "App\\", correct: true },
          { text: "Laravel\\", correct: false },
          { text: "System\\", correct: false },
          { text: "Core\\", correct: false },
        ],
      },
      {
        question: "Quelle méthode permet de rediriger un utilisateur vers une autre page ?",
        options: [
          { text: "redirect()", correct: true },
          { text: "route()", correct: false },
          { text: "goTo()", correct: false },
          { text: "moveTo()", correct: false },
        ],
      },
      {
        question: "Comment appelle-t-on la méthode permettant de récupérer toutes les lignes d'une table dans un modèle Laravel ?",
        options: [
          { text: "all()", correct: true },
          { text: "get()", correct: false },
          { text: "findAll()", correct: false },
          { text: "retrieve()", correct: false },
        ],
      },
      {
        question: "Quel est le nom du système d'authentification fourni par Laravel ?",
        options: [
          { text: "Laravel Sanctum", correct: true },
          { text: "Laravel Passport", correct: false },
          { text: "Laravel Auth", correct: false },
          { text: "Laravel Guard", correct: false },
        ],
      },
      {
        question: "Quelle méthode est utilisée pour valider les données dans un contrôleur Laravel ?",
        options: [
          { text: "validate()", correct: true },
          { text: "check()", correct: false },
          { text: "verify()", correct: false },
          { text: "sanitize()", correct: false },
        ],
      },
      {
        question: "Quel est le format par défaut des fichiers de migration dans Laravel ?",
        options: [
          { text: "PHP", correct: true },
          { text: "YAML", correct: false },
          { text: "JSON", correct: false },
          { text: "XML", correct: false },
        ],
      },
      {
        question: "Quelle méthode Eloquent est utilisée pour récupérer une seule ligne en fonction de l'ID ?",
        options: [
          { text: "find()", correct: true },
          { text: "get()", correct: false },
          { text: "findById()", correct: false },
          { text: "fetch()", correct: false },
        ],
      },
    ]
  };
  export default QuestionData;