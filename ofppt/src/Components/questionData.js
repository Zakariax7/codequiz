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
        { text: "Twitter", correct: false },
        { text: "Microsoft", correct: false },
        { text: "Facebook", correct: true },
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
        { text: "componentDidMount", correct: false },
        { text: "componentDidUpdate", correct: true },
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
        { text: "Bibliothèque", correct: true },
        { text: "Framework", correct: false },
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
        { text: "Utiliser l'objet DOM", correct: false },
        { text: "Utiliser une variable globale", correct: false },
        { text: "Aucune de ces réponses", correct: false },
        { text: "Passer une prop avec une fonction de rappel", correct: true },
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
        { text: "this.renderAgain()", correct: false },
        { text: "this.forceUpdate()", correct: true },
        { text: "this.reloadComponent()", correct: false },
        { text: "this.setState()", correct: false },
      ]},
      { question: "Qu'est-ce que React Router ?", options: [
        { text: "Un gestionnaire d'état", correct: false },
        { text: "Un plugin pour gérer les animations", correct: false },
        { text: "Une bibliothèque pour les tests", correct: false },
        { text: "Un outil de routage pour les applications React", correct: true },
      ]},
      { question: "Quel hook est utilisé pour gérer les effets de bord dans un composant ?", options: [
        { text: "useEffect", correct: true },
        { text: "useState", correct: false },
        { text: "useContext", correct: false },
        { text: "useReducer", correct: false },
      ]},
      { question: "Que signifie SPA en termes de développement web ?", options: [
        { text: "Simple Product App", correct: false },
        { text: "Single Page Application", correct: true },
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
        { text: "Webpack", correct: false },
        { text: "Node.js", correct: false },
        { text: "TypeScript", correct: false },
        { text: "Babel", correct: true },
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
          { text: "SHOW TABLES;", correct: false },
          { text: "SELECT DATABASES;", correct: false },
          { text: "SHOW DATABASES;", correct: true },
          { text: "LIST DATABASES;", correct: false },
        ],
      },
      {
        question: "Quelle est la commande pour créer une nouvelle base de données ?",
        options: [
          { text: "NEW DATABASE nom_de_la_base;", correct: false },
          { text: "ADD DATABASE nom_de_la_base;", correct: false },
          { text: "CREATE DATABASE nom_de_la_base;", correct: true },
          { text: "INIT DATABASE nom_de_la_base;", correct: false },
        ],
      },
      {
        question: "Quelle commande permet de sélectionner une base de données dans MySQL ?",
        options: [
          { text: "SELECT nom_de_la_base;", correct: false },
          { text: "OPEN nom_de_la_base;", correct: false },
          { text: "CONNECT nom_de_la_base;", correct: false },
          { text: "USE nom_de_la_base;", correct: true },
        ],
      },
      {
        question: "Quelle commande permet de supprimer une base de données dans MySQL ?",
        options: [
          { text: "DELETE DATABASE nom_de_la_base;", correct: false },
          { text: "DROP DATABASE nom_de_la_base;", correct: true },
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
          { text: "MODIFY TABLE nom_de_la_table;", correct: false },
          { text: "CHANGE TABLE nom_de_la_table;", correct: false },
          { text: "ALTER TABLE nom_de_la_table;", correct: true },
          { text: "UPDATE TABLE nom_de_la_table;", correct: false },
        ],
      },
      {
        question: "Comment ajouter une colonne dans une table MySQL ?",
        options: [
          { text: "INSERT COLUMN nom_de_la_colonne INTO nom_de_la_table;", correct: false },
          { text: "ALTER TABLE nom_de_la_table ADD COLUMN nom_de_la_colonne TYPE;", correct: true },
          { text: "ADD nom_de_la_colonne TO nom_de_la_table;", correct: false },
          { text: "UPDATE nom_de_la_table SET nom_de_la_colonne TYPE;", correct: false },
        ],
      },
      {
        question: "Quel type de données MySQL est utilisé pour stocker du texte court ?",
        options: [
          { text: "TEXT", correct: false },
          { text: "CHAR", correct: false },
          { text: "STRING", correct: false },
          { text: "VARCHAR", correct: true },
        ],
      },
      {
        question: "Quel mot-clé est utilisé pour éviter les doublons dans une requête SELECT ?",
        options: [
          { text: "UNIQUE", correct: false },
          { text: "DISTINCT", correct: true },
          { text: "FILTER", correct: false },
          { text: "ONLY", correct: false },
        ],
      },
      {
        question: "Comment limiter le nombre de résultats dans une requête SELECT ?",
        options: [
          { text: "TOP", correct: false },
          { text: "LIMIT", correct: true },
          { text: "MAX", correct: false },
          { text: "RANGE", correct: false },
        ],
      },
      {
        question: "Quel est le type de jointure qui retourne toutes les lignes communes entre deux tables ?",
        options: [
          { text: "LEFT JOIN", correct: false },
          { text: "RIGHT JOIN", correct: false },
          { text: "INNER JOIN", correct: true },
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
          { text: "MODIFY", correct: false },
          { text: "UPDATE", correct: true },
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
          { text: "GIVE ALL ON base_de_donnees TO 'nom_utilisateur'@'hôte';", correct: false },
          { text: "ALLOW PRIVILEGES ON base_de_donnees TO 'nom_utilisateur'@'hôte';", correct: false },
          { text: "GRANT ALL PRIVILEGES ON base_de_donnees.* TO 'nom_utilisateur'@'hôte';", correct: true },
          { text: "PERMIT ALL PRIVILEGES ON base_de_donnees TO 'nom_utilisateur'@'hôte';", correct: false },
        ],
      },
      {
        question: "Comment sauvegarder une base de données MySQL en ligne de commande ?",
        options: [
          { text: "mysqlbackup -u utilisateur -p base_de_donnees > sauvegarde.sql", correct: false },
          { text: "mysqldump --save base_de_donnees > sauvegarde.sql", correct: false },
          { text: "mysqldump -u utilisateur -p base_de_donnees > sauvegarde.sql", correct: true },
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
        { text: "Un langage de programmation", correct: false },
        { text: "Une méthode de gestion de projet", correct: true },
        { text: "Un framework CSS", correct: false },
        { text: "Un éditeur de texte", correct: false },
      ]},
      {
        question: "Qu'est-ce que la méthodologie Agile ?",
        options: [
          { text: "Un modèle en cascade pour les projets", correct: false },
          { text: "Une méthode de gestion des ressources humaines", correct: false },
          { text: "Un cadre de développement itératif et collaboratif", correct: true },
          { text: "Un langage de programmation", correct: false },
        ],
      },
      {
        question: "Quel est l'un des principes clés du Manifeste Agile ?",
        options: [
          { text: "Le respect rigide du plan de projet", correct: false },
          { text: "La collaboration avec le client plutôt que la négociation de contrat", correct: true },
          { text: "Les processus et les outils avant les individus", correct: false },
          { text: "Le travail en solo plutôt qu'en équipe", correct: false },
        ],
      },
      {
        question: "Quelle est la durée typique d'un sprint dans Scrum, un cadre Agile ?",
        options: [
          { text: "1 mois", correct: false },
          { text: "6 mois", correct: false },
          { text: "2 à 4 semaines", correct: true },
          { text: "1 semaine", correct: false },
        ],
      },
      {
        question: "Quel rôle est responsable de la maximisation de la valeur du produit dans Scrum ?",
        options: [
          { text: "Scrum Master", correct: false },
          { text: "Product Owner", correct: true },
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
          { text: "Définir la stratégie produit", correct: false },
          { text: "Coder les fonctionnalités principales", correct: false },
          { text: "Assigner des tâches aux développeurs", correct: false },
          { text: "Faciliter le processus Scrum et supprimer les obstacles", correct: true },
        ],
      },
      {
        question: "Quel est l'objectif principal d'une rétrospective de sprint ?",
        options: [
          { text: "Ajouter de nouvelles fonctionnalités", correct: false },
          { text: "Améliorer le processus de l'équipe", correct: true },
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
          { text: "Épic", correct: false },
          { text: "Incrément", correct: true },
          { text: "User Story", correct: false },
          { text: "Sprint Goal", correct: false },
        ],
      },
      {
        question: "Quelle est la priorité absolue selon le Manifeste Agile ?",
        options: [
          { text: "Compléter le projet dans les délais et le budget prévus", correct: false },
          { text: "S'assurer que le produit est documenté", correct: false },
          { text: "Satisfaire le client en livrant rapidement et régulièrement des fonctionnalités de valeur", correct: true },
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
          { text: "Scrum", correct: false },
          { text: "Kanban", correct: true },
          { text: "Lean", correct: false },
          { text: "XP", correct: false },
        ],
      },
      {
        question: "Quel rôle est responsable du Product Backlog dans Scrum ?",
        options: [
          { text: "Scrum Master", correct: false },
          { text: "Product Owner", correct: true },
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
          { text: "Un contrat de projet complet plus que la collaboration", correct: false },
          { text: "La documentation complète avant tout développement", correct: false },
          { text: "Les individus et leurs interactions plus que les processus et les outils", correct: true },
          { text: "Une planification détaillée et figée", correct: false },
        ],
      },
      {
        question: "Quel événement dans Scrum se tient à la fin d'un sprint pour démontrer le travail accompli ?",
        options: [
          { text: "Daily Scrum", correct: false },
          { text: "Sprint Retrospective", correct: false },
          { text: "Backlog Refinement", correct: false },
          { text: "Sprint Review", correct: true },
        ],
      },
      {
        question: "Qu'est-ce qu'une user story dans Agile ?",
        options: [
          { text: "Un plan de projet", correct: false },
          { text: "Une documentation technique", correct: false },
          { text: "Un rapport de bug", correct: false },
          { text: "Une description simple de ce que l'utilisateur veut accomplir", correct: true },
        ],
      },
      {
        question: "Quel est le principal objectif d'un sprint ?",
        options: [
          { text: "Documenter le produit", correct: false },
          { text: "Terminer toutes les tâches du backlog", correct: false },
          { text: "Améliorer les compétences de l'équipe", correct: false },
          { text: "Livrer un incrément fonctionnel du produit", correct: true },
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
          { text: "Un langage de programmation", correct: false },
          { text: "Une bibliothèque JavaScript", correct: false },
          { text: "Un framework PHP", correct: true },
          { text: "Un éditeur de texte", correct: false },
        ],
      },
      {
        question: "Quel outil Laravel utilise-t-il pour interagir avec les bases de données ?",
        options: [
          { text: "Doctrine", correct: false },
          { text: "SQLAlchemy", correct: false },
          { text: "Eloquent", correct: true },
          { text: "ActiveRecord", correct: false },
        ],
      },
      {
        question: "Quelle commande Artisan permet de créer un nouveau contrôleur ?",
        options: [
          { text: "php artisan create:controller", correct: false },
          { text: "php artisan new:controller", correct: false },
          { text: "php artisan generate:controller", correct: false },
          { text: "php artisan make:controller", correct: true },
        ],
      },
      {
        question: "Quel fichier est utilisé pour la configuration des routes dans Laravel ?",
        options: [
          { text: "routes.php", correct: false },
          { text: "config.php", correct: false },
          { text: "app.php", correct: false },
          { text: "web.php", correct: true },
        ],
      },
      {
        question: "Laravel utilise quel moteur de templates ?",
        options: [
          { text: "Twig", correct: false },
          { text: "Smarty", correct: false },
          { text: "Blade", correct: true },
          { text: "Mustache", correct: false },
        ],
      },
      {
        question: "Comment s'appelle le système de migration de base de données dans Laravel ?",
        options: [
          { text: "Blueprint", correct: false },
          { text: "Schema", correct: false },
          { text: "DatabaseSync", correct: false },
          { text: "Migrations", correct: true },
        ],
      },
      {
        question: "Quel est le fichier de configuration principal de Laravel ?",
        options: [
          { text: "config.php", correct: false },
          { text: "settings.php", correct: false },
          { text: "app.yaml", correct: false },
          { text: ".env", correct: true },
        ],
      },
      {
        question: "Quelle méthode HTTP est utilisée pour envoyer des données dans un formulaire ?",
        options: [
          { text: "GET", correct: false },
          { text: "PUT", correct: false },
          { text: "POST", correct: true },
          { text: "DELETE", correct: false },
        ],
      },
      {
        question: "Quelle est la commande Artisan pour lancer le serveur de développement ?",
        options: [
          { text: "php artisan start", correct: false },
          { text: "php artisan serve", correct: true },
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
          { text: "Event Emitter", correct: false },
          { text: "Event Manager", correct: false },
          { text: "Event Dispatcher", correct: true },
          { text: "Event Handler", correct: false },
        ],
      },
      {
        question: "Comment nomme-t-on les classes qui gèrent la logique métier dans Laravel ?",
        options: [
          { text: "Models", correct: false },
          { text: "Views", correct: false },
          { text: "Services", correct: false },
          { text: "Controllers", correct: true },
        ],
      },
      {
        question: "Quelle commande Artisan permet de créer une migration ?",
        options: [
          { text: "php artisan create:migration", correct: false },
          { text: "php artisan generate:migration", correct: false },
          { text: "php artisan new:migration", correct: false },
          { text: "php artisan make:migration", correct: true },
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
          { text: "route()", correct: false },
          { text: "goTo()", correct: false },
          { text: "redirect()", correct: true },
          { text: "moveTo()", correct: false },
        ],
      },
      {
        question: "Comment appelle-t-on la méthode permettant de récupérer toutes les lignes d'une table dans un modèle Laravel ?",
        options: [
          { text: "get()", correct: false },
          { text: "all()", correct: true },
          { text: "findAll()", correct: false },
          { text: "retrieve()", correct: false },
        ],
      },
      {
        question: "Quel est le nom du système d'authentification fourni par Laravel ?",
        options: [
          { text: "Laravel Passport", correct: false },
          { text: "Laravel Auth", correct: false },
          { text: "Laravel Sanctum", correct: true },
          { text: "Laravel Guard", correct: false },
        ],
      },
      {
        question: "Quelle méthode est utilisée pour valider les données dans un contrôleur Laravel ?",
        options: [
          { text: "check()", correct: false },
          { text: "verify()", correct: false },
          { text: "sanitize()", correct: false },
          { text: "validate()", correct: true },
        ],
      },
      {
        question: "Quel est le format par défaut des fichiers de migration dans Laravel ?",
        options: [
          { text: "YAML", correct: false },
          { text: "PHP", correct: true },
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
    ],
    htmlcss: [
      { question: "Que signifie HTML ?", options: [
        { text: "HyperText Markup Language", correct: true },
        { text: "HyperText Machine Language", correct: false },
        { text: "Hyperlink Text Markup Language", correct: false },
        { text: "Hyperlink and Text Markup Language", correct: false },
      ]},
      { question: "Quelle balise est utilisée pour insérer une image ?", options: [
        { text: "<image>", correct: false },
        { text: "<picture>", correct: false },
        { text: "<img>", correct: true },
        { text: "<src>", correct: false },
      ]},
      { question: "Que signifie CSS ?", options: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
        { text: "Computer Style Sheets", correct: false },
      ]},
      { question: "Quel attribut est utilisé pour définir un identifiant unique ?", options: [
        { text: "id", correct: true },
        { text: "class", correct: false },
        { text: "name", correct: false },
        { text: "key", correct: false },
      ]},
      { question: "Comment insérer une feuille de style CSS externe ?", options: [
        
        { text: "<style src='style.css'>", correct: false },
        { text: "<link rel='stylesheet' href='style.css'>", correct: true },
        { text: "<stylesheet>style.css</stylesheet>", correct: false },
        { text: "<css href='style.css'>", correct: false },
      ]},
      { question: "Quelle propriété CSS est utilisée pour changer la couleur du texte ?", options: [
        
        { text: "font-color", correct: false },
        { text: "text-color", correct: false },
        { text: "color", correct: true },
        { text: "background-color", correct: false },
      ]},
      { question: "Quelle balise est utilisée pour les liens hypertexte ?", options: [
        { text: "<link>", correct: false },
        { text: "<href>", correct: false },
        { text: "<url>", correct: false },
        { text: "<a>", correct: true },
      ]},
      { question: "Comment créer une liste non ordonnée ?", options: [
        
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<ul>", correct: true },
        { text: "<list>", correct: false },
      ]},
      { question: "Quelle propriété CSS est utilisée pour changer la police ?", options: [
        { text: "font-family", correct: true },
        { text: "font-type", correct: false },
        { text: "text-font", correct: false },
        { text: "font-style", correct: false },
      ]},
      { question: "Quelle balise définit une cellule dans un tableau ?", options: [
        { text: "<td>", correct: true },
        { text: "<th>", correct: false },
        { text: "<tr>", correct: false },
        { text: "<table>", correct: false },
      ]},
      { question: "Comment faire en sorte qu'un lien s'ouvre dans une nouvelle fenêtre ?", options: [
        
        { text: "new='window'", correct: false },
        { text: "target='_blank'", correct: true },
        { text: "target='new'", correct: false },
        { text: "open='new'", correct: false },
      ]},
      { question: "Quel attribut est utilisé pour définir une image de fond ?", options: [
        
        { text: "background", correct: false },
        { text: "img-src", correct: false },
        { text: "src", correct: false },
        { text: "background-image", correct: true },
      ]},
      { question: "Quel est le bon doctype pour HTML5 ?", options: [
       
        { text: "<!DOCTYPE HTML5>", correct: false },
        { text: "<!DOCTYPE html>", correct: true },
        { text: "<!DOCTYPE document>", correct: false },
        { text: "<!DOCTYPE>", correct: false },
      ]},
      { question: "Comment centrer un élément horizontalement avec CSS ?", options: [
        { text: "text-align: center;", correct: false },
        { text: "margin: auto;", correct: true },
        { text: "align: center;", correct: false },
        { text: "padding: auto;", correct: false },
      ]},
      { question: "Quelle unité CSS représente une taille relative à la taille du parent ?", options: [
        { text: "px", correct: false },
        { text: "%", correct: false },
        { text: "em", correct: true },
        { text: "rem", correct: false },
      ]},
      { question: "Quelle balise est utilisée pour les titres principaux ?", options: [
        { text: "<h1>", correct: true },
        { text: "<header>", correct: false },
        { text: "<head>", correct: false },
        { text: "<title>", correct: false },
      ]},
      { question: "Quel attribut est utilisé pour insérer une description pour les moteurs de recherche ?", options: [
        { text: "description", correct: false },
        { text: "seo", correct: false },
        { text: "meta", correct: true },
        { text: "search", correct: false },
      ]},
      { question: "Quel pseudo-élément sélectionne la première lettre d'un élément ?", options: [
        { text: "::first-letter", correct: true },
        { text: "::letter", correct: false },
        { text: "::first-char", correct: false },
        { text: "::char", correct: false },
      ]},
      { question: "Quelle balise est utilisée pour insérer un formulaire ?", options: [
        { text: "<input>", correct: false },
        { text: "<form>", correct: true },
        { text: "<submit>", correct: false },
        { text: "<fieldset>", correct: false },
      ]},
      { question: "Comment insérer un commentaire en HTML ?", options: [
        { text: "// Commentaire", correct: false },
        { text: "# Commentaire", correct: false },
        { text: "<comment>Commentaire</comment>", correct: false },
        { text: "<!-- Commentaire -->", correct: true },
      ]},
    ],
    cloudnative: [
      { question: "Que signifie Cloud Native ?", options: [
        
        { text: "Serveurs hébergés localement", correct: false },
        { text: "Systèmes hors ligne uniquement", correct: false },
        { text: "Machines virtuelles locales", correct: false },
        { text: "Applications conçues pour fonctionner dans le cloud", correct: true },
      ]},
      { question: "Quelle technologie est essentielle au Cloud Native ?", options: [
        { text: "Conteneurs", correct: true },
        { text: "Disques durs", correct: false },
        { text: "Réseaux locaux", correct: false },
        { text: "Cartes graphiques", correct: false },
      ]},
      { question: "Que permet Kubernetes ?", options: [
        { text: "Le stockage de données", correct: false },
        { text: "L'orchestration de conteneurs", correct: true },
        { text: "La virtualisation matérielle", correct: false },
        { text: "La mise en cache", correct: false },
      ]},
      { question: "Que signifie SaaS ?", options: [
        { text: "Storage as a Service", correct: false },
        { text: "Software as a Service", correct: true },
        { text: "Security as a Service", correct: false },
        { text: "Server as a Service", correct: false },
      ]},
      { question: "Quel service cloud est utilisé pour l'infrastructure ?", options: [
        { text: "PaaS", correct: false },
        { text: "IaaS", correct: true },
        { text: "SaaS", correct: false },
        { text: "FaaS", correct: false },
      ]},
      { question: "Qu'est-ce que Docker ?", options: [
        { text: "Un outil de gestion de bases de données", correct: false },
        { text: "Un système d'exploitation", correct: false },
        { text: "Une plateforme pour créer et exécuter des conteneurs", correct: true },
        { text: "Un serveur de messagerie", correct: false },
      ]},
      { question: "Que signifie PaaS ?", options: [
        
        { text: "Processor as a Service", correct: false },
        { text: "Project as a Service", correct: false },
        { text: "Program as a Service", correct: false },
        { text: "Platform as a Service", correct: true },
      ]},
      { question: "Quel est un exemple d'outil CI/CD ?", options: [
        
        { text: "MongoDB", correct: false },
        { text: "Photoshop", correct: false },
        { text: "Kubernetes", correct: false },
        { text: "Jenkins", correct: true },
      ]},
      { question: "Quelle est la principale caractéristique du cloud public ?", options: [
        { text: "Ressources partagées entre plusieurs utilisateurs", correct: true },
        { text: "Serveurs privés pour une seule entreprise", correct: false },
        { text: "Exécution hors ligne uniquement", correct: false },
        { text: "Pas de virtualisation", correct: false },
      ]},
      { question: "Quel est l'objectif principal de DevOps ?", options: [
        { text: "Améliorer la collaboration entre développement et opérations", correct: true },
        { text: "Réduire les coûts matériels", correct: false },
        { text: "Créer des applications mobiles", correct: false },
        { text: "Remplacer les serveurs physiques", correct: false },
      ]},
      { question: "Qu'est-ce que Helm dans Kubernetes ?", options: [
        { text: "Une base de données", correct: false },
        { text: "Un langage de programmation", correct: false },
        { text: "Un gestionnaire de paquets pour Kubernetes", correct: true },
        { text: "Un service cloud", correct: false },
      ]},
      { question: "Que signifie FaaS ?", options: [
        { text: "File as a Service", correct: false },
        { text: "Framework as a Service", correct: false },
        { text: "Folder as a Service", correct: false },
        { text: "Function as a Service", correct: true },
      ]},
      { question: "Quel est l'avantage principal des microservices ?", options: [
        { text: "Scalabilité et modularité", correct: true },
        { text: "Utilisation de gros serveurs", correct: false },
        { text: "Pas besoin de réseaux", correct: false },
        { text: "Fonctionne uniquement en local", correct: false },
      ]},
      { question: "Quelle est une plateforme cloud majeure ?", options: [
        { text: "Windows XP", correct: false },
        { text: "Amazon Web Services (AWS)", correct: true },
        { text: "Microsoft Office", correct: false },
        { text: "Visual Studio", correct: false },
      ]},
      { question: "Quelle commande est utilisée pour lister les pods dans Kubernetes ?", options: [
        { text: "kubectl list pods", correct: false },
        { text: "k8s show pods", correct: false },
        { text: "kubectl get pods", correct: true },
        { text: "kube pods", correct: false },
      ]},
      { question: "Que signifie 'cloud hybride' ?", options: [
        { text: "Un cloud pour les applications locales uniquement", correct: false },
        { text: "Une technologie sans virtualisation", correct: false },
        { text: "Une combinaison de cloud public et privé", correct: true },
        { text: "Un serveur physique pour plusieurs clients", correct: false },
      ]},
      { question: "Quelle est une caractéristique clé du cloud natif ?", options: [
        { text: "Applications uniquement hors ligne", correct: false },
        { text: "Pas de dépendance au réseau", correct: false },
        { text: "Applications basées sur des conteneurs", correct: true },
        { text: "Applications sans API", correct: false },
      ]},
      { question: "Qu'est-ce que 'Infrastructure as Code' (IaC) ?", options: [
        { text: "Définir l'infrastructure via du code", correct: true },
        { text: "Un outil de visualisation de l'infrastructure", correct: false },
        { text: "Un langage pour coder des applications", correct: false },
        { text: "Un service pour héberger du code", correct: false },
      ]},
      { question: "Que signifie CNCF ?", options: [
        { text: "Cloud Network Configuration Framework", correct: false },
        { text: "Computing Network and Cloud Foundation", correct: false },
        { text: "Cloud Native Configuration Framework", correct: false },
        { text: "Cloud Native Computing Foundation", correct: true },
      ]},
      { question: "Quelle commande Docker affiche les conteneurs actifs ?", options: [
        { text: "docker run", correct: false },
        { text: "docker images", correct: false },
        { text: "docker list", correct: false },
        { text: "docker ps", correct: true },
      ]},
    ],
    nosql: [
      { question: "Qu'est-ce que NoSQL ?", options: [
        { text: "Une base de données relationnelle", correct: false },
        { text: "Un langage de programmation", correct: false },
        { text: "Un protocole réseau", correct: false },
        { text: "Une base de données non relationnelle", correct: true },
      ]},
      { question: "Quelle base de données est un exemple de NoSQL ?", options: [
        { text: "MySQL", correct: false },
        { text: "PostgreSQL", correct: false },
        { text: "OracleDB", correct: false },
        { text: "MongoDB", correct: true },
      ]},
      { question: "Quel type de données est stocké dans une base NoSQL orientée documents ?", options: [
        { text: "JSON ou BSON", correct: true },
        { text: "Tables", correct: false },
        { text: "Colonnes", correct: false },
        { text: "Graphes", correct: false },
      ]},
      { question: "Qu'est-ce qu'une base de données clé-valeur ?", options: [
        { text: "Une base qui utilise uniquement SQL", correct: false },
        { text: "Une base qui stocke des paires clé-valeur", correct: true },
        { text: "Une base qui ne supporte pas les index", correct: false },
        { text: "Une base pour données temporelles uniquement", correct: false },
      ]},
      { question: "Quel avantage majeur offre NoSQL ?", options: [
        { text: "Une structure rigide des données", correct: false },
        { text: "Des transactions complexes", correct: false },
        { text: "Une grande scalabilité horizontale", correct: true },
        { text: "Un support limité pour les big data", correct: false },
      ]},
      { question: "Quelle commande est utilisée pour insérer des données dans MongoDB ?", options: [
        { text: "addRow()", correct: false },
        { text: "insertRow()", correct: false },
        { text: "insertOne()", correct: true },
        { text: "putData()", correct: false },
      ]},
      { question: "Quel langage est souvent utilisé pour interagir avec MongoDB ?", options: [
        { text: "SQL", correct: false },
        { text: "JavaScript", correct: true },
        { text: "Python uniquement", correct: false },
        { text: "C++ uniquement", correct: false },
      ]},
      { question: "CouchDB utilise quel format pour ses documents ?", options: [
        { text: "JSON", correct: true },
        { text: "XML", correct: false },
        { text: "CSV", correct: false },
        { text: "YAML", correct: false },
      ]},
      { question: "Qu'est-ce qu'une base orientée colonnes ?", options: [
        
        { text: "Une base qui ne supporte pas les colonnes", correct: false },
        { text: "Une base qui stocke les données par colonnes", correct: true },
        { text: "Une base pour données hiérarchiques", correct: false },
        { text: "Une base pour documents JSON", correct: false },
      ]},
      { question: "Quelle est une base NoSQL orientée graphes ?", options: [
        
        { text: "SQLite", correct: false },
        { text: "Neo4j", correct: true },
        { text: "MariaDB", correct: false },
        { text: "MongoDB", correct: false },
      ]},
      { question: "Qu'est-ce que Cassandra ?", options: [
        { text: "Une base de données NoSQL orientée colonnes", correct: true },
        { text: "Un langage de programmation", correct: false },
        { text: "Un outil de visualisation", correct: false },
        { text: "Un moteur de recherche", correct: false },
      ]},
      { question: "Quelle structure de données est utilisée dans Redis ?", options: [
        
        { text: "Tables relationnelles", correct: false },
        { text: "Graphes uniquement", correct: false },
        { text: "Colonnes fixes", correct: false },
        { text: "Clé-valeur", correct: true },
      ]},
      { question: "Quelle base NoSQL est connue pour sa capacité à travailler en mémoire ?", options: [
        
        { text: "OracleDB", correct: false },
        { text: "Redis", correct: true },
        { text: "PostgreSQL", correct: false },
        { text: "MariaDB", correct: false },
      ]},
      { question: "Quel est l'inconvénient principal des bases NoSQL ?", options: [
        { text: "Un support limité pour les transactions complexes", correct: true },
        { text: "Une faible scalabilité", correct: false },
        { text: "Une structure rigide des données", correct: false },
        { text: "Un support limité pour JSON", correct: false },
      ]},
      { question: "Quel outil est utilisé pour requêter ElasticSearch ?", options: [
        
        { text: "SQL", correct: false },
        { text: "BSON", correct: false },
        { text: "DSL de requête ElasticSearch", correct: true },
        { text: "NoSQL Query Language", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour récupérer des documents dans MongoDB ?", options: [
        
        { text: "query()", correct: false },
        { text: "find()", correct: true },
        { text: "select()", correct: false },
        { text: "get()", correct: false },
      ]},
      { question: "Quel est un cas d'utilisation courant des bases NoSQL ?", options: [
        
        { text: "Petites bases de données locales", correct: false },
        { text: "Applications ne nécessitant pas d'évolutivité", correct: false },
        { text: "Big Data et analyses", correct: true },
        { text: "Bases de données pour traitements complexes uniquement", correct: false },
      ]},
      { question: "Quelle base NoSQL supporte des transactions ACID complètes ?", options: [
        
        { text: "Redis", correct: false },
        { text: "CouchDB", correct: false },
        { text: "Neo4j", correct: false },
        { text: "MongoDB", correct: true },
      ]},
      { question: "Comment s'appelle le moteur de recherche souvent utilisé avec des bases NoSQL ?", options: [
        
        { text: "SQLSearch", correct: false },
        { text: "BSONFinder", correct: false },
        { text: "CloudQuery", correct: false },
        { text: "ElasticSearch", correct: true },
      ]},
      { question: "Quel outil peut être utilisé pour visualiser des données MongoDB ?", options: [
        
        { text: "SQL Studio", correct: false },
        { text: "Postman", correct: false },
        { text: "MongoDB Compass", correct: true },
        { text: "Tableau", correct: false },
      ]},
    ],
    python: [
      { question: "Qu'est-ce que Python ?", options: [
        
        { text: "Un système d'exploitation", correct: false },
        { text: "Un langage de programmation interprété", correct: true },
        { text: "Un éditeur de texte", correct: false },
        { text: "Une base de données", correct: false },
      ]},
      { question: "Qui a développé Python ?", options: [
        
        { text: "Dennis Ritchie", correct: false },
        { text: "James Gosling", correct: false },
        { text: "Guido van Rossum", correct: true },
        { text: "Bjarne Stroustrup", correct: false },
      ]},
      { question: "Quelle extension est utilisée pour les fichiers Python ?", options: [
       
        { text: ".java", correct: false },
        { text: ".cpp", correct: false },
        { text: ".py", correct: true },
        { text: ".cs", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour afficher du texte en Python ?", options: [
        
        { text: "echo()", correct: false },
        { text: "console.log()", correct: false },
        { text: "write()", correct: false },
        { text: "print()", correct: true },
      ]},
      { question: "Quel est le type de données pour un nombre décimal en Python ?", options: [
        
        { text: "int", correct: false },
        { text: "float", correct: true },
        { text: "double", correct: false },
        { text: "decimal", correct: false },
      ]},
      { question: "Quelle commande est utilisée pour installer des bibliothèques Python ?", options: [
        
        { text: "npm install", correct: false },
        { text: "python setup", correct: false },
        { text: "pip install", correct: true },
        { text: "install-py", correct: false },
      ]},
      { question: "Quel mot-clé est utilisé pour créer une fonction en Python ?", options: [
        
        { text: "function", correct: false },
        { text: "func", correct: false },
        { text: "lambda", correct: false },
        { text: "def", correct: true },
      ]},
      { question: "Quelle bibliothèque est utilisée pour manipuler les données en Python ?", options: [
        { text: "pandas", correct: true },
        { text: "numpy", correct: false },
        { text: "matplotlib", correct: false },
        { text: "sklearn", correct: false },
      ]},
      { question: "Quelle est la sortie de print(3 * 'abc') ?", options: [
        { text: "abcabcabc", correct: true },
        { text: "abc * 3", correct: false },
        { text: "abcabc", correct: false },
        { text: "Erreur", correct: false },
      ]},
      { question: "Quelle est la méthode pour ajouter un élément à une liste ?", options: [
        
        { text: "push()", correct: false },
        { text: "add()", correct: false },
        { text: "append()", correct: true },
        { text: "insert()", correct: false },
      ]},
      { question: "Quelle bibliothèque est utilisée pour créer des graphiques ?", options: [
        
        { text: "flask", correct: false },
        { text: "django", correct: false },
        { text: "matplotlib", correct: true },
        { text: "pandas", correct: false },
      ]},
      { question: "Quel opérateur est utilisé pour les puissances ?", options: [
       
        { text: "^", correct: false },
        { text: "^^", correct: false },
        { text: "**", correct: true },
        { text: "pow", correct: false },
      ]},
      { question: "Comment convertir une chaîne en entier ?", options: [
        
        { text: "toInt()", correct: false },
        { text: "parseInt()", correct: false },
        { text: "convert()", correct: false },
        { text: "int()", correct: true },
      ]},
      { question: "Quel type est renvoyé par la fonction input() ?", options: [
        { text: "string", correct: true },
        { text: "int", correct: false },
        { text: "bool", correct: false },
        { text: "float", correct: false },
      ]},
      { question: "Comment itérer sur les éléments d'une liste ?", options: [
        
        { text: "Avec une boucle while uniquement", correct: false },
        { text: "Avec une boucle for", correct: true },
        { text: "Avec map() uniquement", correct: false },
        { text: "Avec des dictionnaires", correct: false },
      ]},
      { question: "Comment vérifier si une clé existe dans un dictionnaire ?", options: [
        { text: "Avec in", correct: true },
        { text: "Avec hasKey()", correct: false },
        { text: "Avec checkKey()", correct: false },
        { text: "Avec contains()", correct: false },
      ]},
      { question: "Quelle bibliothèque est utilisée pour le machine learning ?", options: [
        
        { text: "numpy", correct: false },
        { text: "matplotlib", correct: false },
        { text: "flask", correct: false },
        { text: "scikit-learn", correct: true },
      ]},
      { question: "Quel est l'équivalent de else pour gérer les exceptions ?", options: [
        
        { text: "catch", correct: false },
        { text: "except", correct: false },
        { text: "finally", correct: true },
        { text: "end", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour supprimer un élément d'une liste ?", options: [
        
        { text: "delete()", correct: false },
        { text: "pop()", correct: false },
        { text: "clear()", correct: false },
        { text: "remove()", correct: true },
      ]},
      { question: "Quel mot-clé est utilisé pour importer un module ?", options: [
        { text: "import", correct: true },
        { text: "include", correct: false },
        { text: "require", correct: false },
        { text: "use", correct: false },
      ]},
    ],
    poo: [
      { question: "Qu'est-ce que la programmation orientée objet (POO) ?", options: [
        
        { text: "Un langage de programmation", correct: false },
        { text: "Un outil pour le développement web", correct: false },
        { text: "Un paradigme basé sur des objets", correct: true },
        { text: "Une méthode pour organiser des bases de données", correct: false },
      ]},
      { question: "Quel concept POO permet de cacher les détails d'implémentation ?", options: [
        
        { text: "Héritage", correct: false },
        { text: "Polymorphisme", correct: false },
        { text: "Abstraction", correct: false },
        { text: "Encapsulation", correct: true },
      ]},
      { question: "Qu'est-ce qu'une classe ?", options: [
        
        { text: "Une instance d'un objet", correct: false },
        { text: "Un langage spécifique", correct: false },
        { text: "Un modèle pour créer des objets", correct: true },
        { text: "Un type de base de données", correct: false },
      ]},
      { question: "Quel mot-clé est utilisé pour créer une classe en Python ?", options: [
        
        { text: "def", correct: false },
        { text: "function", correct: false },
        { text: "class", correct: true },
        { text: "object", correct: false },
      ]},
      { question: "Qu'est-ce qu'un constructeur ?", options: [
        
        { text: "Une fonction pour supprimer un objet", correct: false },
        { text: "Une méthode pour ajouter des méthodes à une classe", correct: false },
        { text: "Un module externe", correct: false },
        { text: "Une méthode spéciale pour initialiser un objet", correct: true },
      ]},
      { question: "Quel est un exemple d'héritage en POO ?", options: [
        
        { text: "Une fonction hérite d'une autre fonction", correct: false },
        { text: "Une classe enfant hérite des propriétés et méthodes d'une classe parent", correct: true },
        { text: "Une variable globale est partagée entre fonctions", correct: false },
        { text: "Une bibliothèque importée automatiquement", correct: false },
      ]},
      { question: "Quel concept POO permet d'utiliser une même méthode avec différents types ?", options: [
        
        { text: "Encapsulation", correct: false },
        { text: "Héritage", correct: false },
        { text: "Abstraction", correct: false },
        { text: "Polymorphisme", correct: true },
      ]},
      { question: "Que signifie 'self' en Python ?", options: [
        
        { text: "Référence à la classe actuelle", correct: false },
        { text: "Référence à un module", correct: false },
        { text: "Référence à l'objet actuel", correct: true },
        { text: "Une méthode spéciale", correct: false },
      ]},
      { question: "Quel mot-clé permet d'accéder à la classe parent en Python ?", options: [
        
        { text: "this", correct: false },
        { text: "super", correct: true },
        { text: "parent", correct: false },
        { text: "base", correct: false },
      ]},
      { question: "Qu'est-ce qu'une méthode en POO ?", options: [
        
        { text: "Un module Python", correct: false },
        { text: "Un constructeur", correct: false },
        { text: "Un fichier externe", correct: false },
        { text: "Une fonction définie dans une classe", correct: true },
      ]},
      { question: "Qu'est-ce qu'une interface ?", options: [
        
        { text: "Un module graphique", correct: false },
        { text: "Une classe qui définit des méthodes sans implémentation", correct: true },
        { text: "Une méthode pour charger des bibliothèques", correct: false },
        { text: "Un constructeur pour des objets", correct: false },
      ]},
      { question: "Quel concept POO empêche l'accès direct à certains attributs ?", options: [
        
        { text: "Héritage", correct: false },
        { text: "Encapsulation", correct: true },
        { text: "Polymorphisme", correct: false },
        { text: "Abstraction", correct: false },
      ]},
      { question: "Quelle méthode est appelée automatiquement lors de la création d'un objet ?", options: [
       
        { text: "Destructeur", correct: false },
        { text: "Getter", correct: false },
        { text: "Constructeur", correct: true },
        { text: "Setter", correct: false },
      ]},
      { question: "Que signifie 'abstraction' en POO ?", options: [
        
        { text: "Créer des classes enfant", correct: false },
        { text: "Utiliser des méthodes identiques pour différents types", correct: false },
        { text: "Accéder directement aux attributs d'une classe", correct: false },
        { text: "Cacher les détails complexes tout en exposant l'essentiel", correct: true },
      ]},
      { question: "Quelle méthode est utilisée pour supprimer un objet en Python ?", options: [
        
        { text: "__delete__", correct: false },
        { text: "__remove__", correct: false },
        { text: "__del__", correct: true },
        { text: "__destroy__", correct: false },
      ]},
      { question: "Quelle est une bonne pratique en POO ?", options: [
        
        { text: "Créer des classes énormes avec plusieurs responsabilités", correct: false },
        { text: "Utiliser des noms descriptifs pour les classes et méthodes", correct: true },
        { text: "Éviter l'encapsulation pour simplifier le code", correct: false },
        { text: "Utiliser uniquement des variables globales", correct: false },
      ]},
      { question: "Qu'est-ce qu'un 'getter' en POO ?", options: [
        
        { text: "Une méthode pour initialiser un objet", correct: false },
        { text: "Une méthode pour supprimer un attribut", correct: false },
        { text: "Une méthode pour accéder à la valeur d'un attribut privé", correct: true },
        { text: "Une méthode pour définir la valeur d'un attribut", correct: false },
      ]},
      { question: "Quelle est la différence entre une classe et un objet ?", options: [
        
        { text: "Un objet est un modèle, une classe est une instance", correct: false },
        { text: "Il n'y a pas de différence", correct: false },
        { text: "Une classe est une variable globale", correct: false },
        { text: "Une classe est un modèle, un objet est une instance", correct: true },
      ]},
      { question: "Quel est un des principes fondamentaux de la POO ?", options: [
        { text: "Héritage", correct: true },
        { text: "Boucles", correct: false },
        { text: "Conditions", correct: false },
        { text: "Encodage", correct: false },
      ]},
      { question: "Quel mot-clé est utilisé pour déclarer une classe en Java ?", options: [
        { text: "class", correct: true },
        { text: "def", correct: false },
        { text: "object", correct: false },
        { text: "new", correct: false },
      ]},
    ],
    umlDiagrams: [
      { question: "Qu'est-ce que UML ?", options: [
        
        { text: "Un langage de programmation", correct: false },
        { text: "Un langage de modélisation visuelle pour les systèmes", correct: true },
        { text: "Un outil de gestion de base de données", correct: false },
        { text: "Un type de diagramme", correct: false },
      ]},
      { question: "Quel diagramme UML est utilisé pour représenter la structure statique d'un système ?", options: [
        
        { text: "Diagramme de séquence", correct: false },
        { text: "Diagramme de cas d'utilisation", correct: false },
        { text: "Diagramme de classes", correct: true },
        { text: "Diagramme de communication", correct: false },
      ]},
      { question: "Quel diagramme UML est utilisé pour décrire l'interaction entre objets ?", options: [
        { text: "Diagramme de séquence", correct: true },
        { text: "Diagramme d'activité", correct: false },
        { text: "Diagramme de classes", correct: false },
        { text: "Diagramme de déploiement", correct: false },
      ]},
      { question: "Que représente un acteur dans un diagramme de cas d'utilisation ?", options: [
        
        { text: "Un objet qui contient des données", correct: false },
        { text: "Une classe d'objets", correct: false },
        { text: "Un processus du système", correct: false },
        { text: "Un utilisateur ou un autre système qui interagit avec le système", correct: true },
      ]},
      { question: "Quel diagramme UML est utilisé pour décrire la dynamique d'un système ?", options: [
        
        { text: "Diagramme de classes", correct: false },
        { text: "Diagramme de cas d'utilisation", correct: false },
        { text: "Diagramme d'activité", correct: true },
        { text: "Diagramme de déploiement", correct: false },
      ]},
      { question: "Quel diagramme UML permet de modéliser les relations entre les objets ?", options: [
        
        { text: "Diagramme d'activités", correct: false },
        { text: "Diagramme de communication", correct: true },
        { text: "Diagramme de déploiement", correct: false },
        { text: "Diagramme de classes", correct: false },
      ]},
      { question: "Quel est l'objectif principal d'un diagramme de composants ?", options: [
        
        { text: "Montrer l'interaction entre les objets", correct: false },
        { text: "Modéliser les relations entre les processus", correct: false },
        { text: "Montrer la structure physique d'un système", correct: true },
        { text: "Représenter la hiérarchie des classes", correct: false },
      ]},
      { question: "Quelle notation UML est utilisée pour représenter une relation d'héritage ?", options: [
        
        { text: "Une flèche simple", correct: false },
        { text: "Une ligne avec une barre", correct: false },
        { text: "Une flèche avec un triangle", correct: true },
        { text: "Une flèche double", correct: false },
      ]},
      { question: "Qu'est-ce qu'un diagramme de déploiement ?", options: [
        
        { text: "Un diagramme qui montre les interactions entre les utilisateurs", correct: false },
        { text: "Un diagramme représentant les processus internes du système", correct: false },
        { text: "Un diagramme qui montre la structure de données", correct: false },
        { text: "Un diagramme qui montre comment les composants sont déployés sur le matériel", correct: true },
      ]},
      { question: "Quel diagramme UML est utilisé pour représenter la logique des processus dans un système ?", options: [
        
        { text: "Diagramme de séquence", correct: false },
        { text: "Diagramme de classes", correct: false },
        { text: "Diagramme d'activités", correct: true },
        { text: "Diagramme de cas d'utilisation", correct: false },
      ]},
      { question: "Qu'est-ce qu'une association dans un diagramme de classes ?", options: [
        { text: "Une relation entre deux classes", correct: true },
        { text: "Une méthode d'une classe", correct: false },
        { text: "Une relation entre une classe et un acteur", correct: false },
        { text: "Un processus interne d'une classe", correct: false },
      ]},
      { question: "Que représente un diagramme d'états ?", options: [
        { text: "Les différents états d'un objet et les transitions entre eux", correct: true },
        { text: "Les relations entre les classes", correct: false },
        { text: "Les interactions entre utilisateurs", correct: false },
        { text: "La hiérarchie des processus", correct: false },
      ]},
      { question: "Quel est l'élément de base dans un diagramme de classes UML ?", options: [
        { text: "La classe", correct: true },
        { text: "L'objet", correct: false },
        { text: "L'acteur", correct: false },
        { text: "Le processus", correct: false },
      ]},
      { question: "Qu'est-ce qu'une relation de dépendance dans un diagramme de classes ?", options: [
       
        { text: "Une relation où deux classes sont égales", correct: false },
        { text: "Une relation d'héritage", correct: false },
        { text: "Une relation entre un objet et un acteur", correct: false },
        { text: "Une relation où une classe dépend d'une autre pour fonctionner", correct: true },
      ]},
      { question: "Que permet un diagramme de cas d'utilisation ?", options: [
        
        { text: "De modéliser la structure interne du système", correct: false },
        { text: "De décrire la logique de traitement des données", correct: false },
        { text: "De modéliser les interactions entre acteurs et le système", correct: true },
        { text: "De décrire la relation entre les composants hardware", correct: false },
      ]},
      { question: "Quel diagramme UML est principalement utilisé pour décrire l'architecture logicielle ?", options: [
        
        { text: "Diagramme de déploiement", correct: false },
        { text: "Diagramme de composants", correct: true },
        { text: "Diagramme de classes", correct: false },
        { text: "Diagramme d'états", correct: false },
      ]},
      { question: "Quel type de relation existe entre deux classes dans un diagramme de classes pour montrer une association ?", options: [
        { text: "Ligne simple", correct: true },
        { text: "Flèche avec un triangle", correct: false },
        { text: "Ligne avec un losange", correct: false },
        { text: "Flèche bidirectionnelle", correct: false },
      ]},
      { question: "Quel diagramme est utilisé pour représenter les processus et les flux d'information ?", options: [
        
        { text: "Diagramme de séquence", correct: false },
        { text: "Diagramme de cas d'utilisation", correct: false },
        { text: "Diagramme d'activités", correct: true },
        { text: "Diagramme de classes", correct: false },
      ]},
      { question: "Que signifie 'lifeline' dans un diagramme de séquence ?", options: [
        { text: "Une ligne représentant la durée de vie d'un objet pendant l'interaction", correct: true },
        { text: "Une ligne représentant une classe", correct: false },
        { text: "Une méthode d'un objet", correct: false },
        { text: "Une relation d'héritage", correct: false },
      ]},
    ],
    algorithms: [
      { question: "Qu'est-ce qu'un algorithme ?", options: [
        
        { text: "Un langage de programmation", correct: false },
        { text: "Une série d'instructions permettant de résoudre un problème", correct: true },
        { text: "Un type de base de données", correct: false },
        { text: "Un modèle de programmation orientée objet", correct: false },
      ]},
      { question: "Quel est l'objectif d'un algorithme de recherche ?", options: [
        { text: "Trouver un élément dans une collection", correct: true },
        { text: "Trier une liste d'éléments", correct: false },
        { text: "Analyser la complexité d'un programme", correct: false },
        { text: "Créer une base de données", correct: false },
      ]},
      { question: "Quel est l'algorithme de recherche le plus efficace dans un tableau trié ?", options: [
        
        { text: "Recherche linéaire", correct: false },
        { text: "Recherche par saut", correct: false },
        { text: "Recherche binaire", correct: true },
        { text: "Recherche par interpolation", correct: false },
      ]},
      { question: "Que représente la complexité en temps d'un algorithme ?", options: [
        { text: "Le nombre d'opérations effectuées par l'algorithme en fonction de la taille des données", correct: true },
        { text: "La quantité de mémoire utilisée par l'algorithme", correct: false },
        { text: "La vitesse d'exécution de l'algorithme", correct: false },
        { text: "La complexité des structures de données", correct: false },
      ]},
      { question: "Quel algorithme est utilisé pour trier une liste de nombres ?", options: [
        
        { text: "Recherche binaire", correct: false },
        { text: "Insertion", correct: false },
        { text: "Fusion (Merge Sort)", correct: false },
        { text: "Tri rapide (Quick Sort)", correct: true },
      ]},
      { question: "Qu'est-ce qu'un algorithme récursif ?", options: [
        { text: "Un algorithme qui s'appelle lui-même pour résoudre un sous-problème", correct: true },
        { text: "Un algorithme qui utilise une boucle pour itérer", correct: false },
        { text: "Un algorithme qui ne peut pas résoudre de problèmes complexes", correct: false },
        { text: "Un algorithme qui est exécuté en parallèle", correct: false },
      ]},
      { question: "Dans quel cas un algorithme de recherche linéaire est-il le plus efficace ?", options: [
        
        { text: "Quand les données sont triées", correct: false },
        { text: "Quand les données ne sont pas triées", correct: true },
        { text: "Quand le tableau est de petite taille", correct: false },
        { text: "Quand on connaît l'index de l'élément", correct: false },
      ]},
      { question: "Quel algorithme est utilisé pour résoudre le problème du plus court chemin ?", options: [
        
        { text: "Algorithme de Floyd-Warshall", correct: false },
        { text: "Recherche binaire", correct: false },
        { text: "Tri fusion", correct: false },
        { text: "Algorithme de Dijkstra", correct: true },
      ]},
      { question: "Que fait l'algorithme de tri par insertion ?", options: [
        
        { text: "Divise une liste en deux parties pour les trier séparément", correct: false },
        { text: "Fusionne deux listes triées en une seule liste triée", correct: false },
        { text: "Trie une liste en la partitionnant selon un pivot", correct: false },
        { text: "Insère chaque élément dans sa position correcte dans une liste triée", correct: true },
      ]},
      { question: "Que fait un algorithme de tri par sélection ?", options: [
        { text: "Sélectionne l'élément minimum et le place à la position correcte", correct: true },
        { text: "Insère un élément dans une liste triée", correct: false },
        { text: "Divise une liste en sous-listes puis les fusionne", correct: false },
        { text: "Partionne un tableau selon un pivot", correct: false },
      ]},
      { question: "Quel algorithme est utilisé pour résoudre le problème du voyageur de commerce ?", options: [
        { text: "Algorithme de force brute", correct: true },
        { text: "Algorithme de Dijkstra", correct: false },
        { text: "Recherche binaire", correct: false },
        { text: "Algorithme de Kruskal", correct: false },
      ]},
      { question: "Que fait l'algorithme de tri rapide ?", options: [
        
        { text: "Sélectionne l'élément minimum et le place en début de liste", correct: false },
        { text: "Partitionne les éléments en fonction d'un pivot puis trie chaque sous-liste", correct: true },
        { text: "Fusionne deux listes triées", correct: false },
        { text: "Insère les éléments un par un dans une liste triée", correct: false },
      ]},
      { question: "Dans quel cas l'algorithme de recherche binaire est-il inefficace ?", options: [
        
        { text: "Lorsque les données sont triées", correct: false },
        { text: "Lorsque la liste est trop petite", correct: false },
        { text: "Lorsque les données ne sont pas triées", correct: true },
        { text: "Lorsque les éléments sont des nombres premiers", correct: false },
      ]},
      { question: "Qu'est-ce qu'une structure de données ?", options: [
       
        { text: "Un algorithme de recherche", correct: false },
        { text: "Un type de base de données", correct: false },
        { text: "Une façon d'organiser et de stocker des données", correct: true },
        { text: "Un langage de programmation", correct: false },
      ]},
      { question: "Que représente un arbre binaire ?", options: [
        
        { text: "Une liste d'éléments triés", correct: false },
        { text: "Une structure de données où chaque nœud a deux sous-arbres", correct: true },
        { text: "Une table de hachage", correct: false },
        { text: "Une liste chaînée", correct: false },
      ]},
      { question: "Quelle est la différence entre un tableau et une liste chaînée ?", options: [
        { text: "Un tableau a une taille fixe, une liste chaînée est dynamique", correct: true },
        { text: "Une liste chaînée est plus rapide pour l'accès direct", correct: false },
        { text: "Un tableau est une structure de données dynamique", correct: false },
        { text: "Les deux ont la même structure", correct: false },
      ]},
      { question: "Qu'est-ce qu'un graphe orienté ?", options: [
        
        { text: "Un graphe sans arêtes", correct: false },
        { text: "Un graphe où les arêtes n'ont pas de direction", correct: false },
        { text: "Un type d'arbre binaire", correct: false },
        { text: "Un graphe où les arêtes ont une direction", correct: true },
      ]},
      { question: "Qu'est-ce qu'un algorithme de tri fusion ?", options: [
        
        { text: "Un algorithme qui sélectionne l'élément minimum pour le placer dans la liste triée", correct: false },
        { text: "Un algorithme qui partitionne un tableau selon un pivot", correct: false },
        { text: "Un algorithme qui insère chaque élément dans une liste triée", correct: false },
        { text: "Un algorithme qui divise une liste en sous-listes puis fusionne les sous-listes triées", correct: true },
      ]},
      { question: "Que signifie la complexité en espace d'un algorithme ?", options: [
        { text: "La quantité de mémoire utilisée par l'algorithme", correct: true },
        { text: "Le nombre d'opérations effectuées par l'algorithme", correct: false },
        { text: "Le temps d'exécution de l'algorithme", correct: false },
        { text: "La taille des données d'entrée", correct: false },
      ]},
    ],
    javascript: [
      { question: "Qu'est-ce que JavaScript ?", options: [
        { text: "Un langage de programmation", correct: true },
        { text: "Un framework CSS", correct: false },
        { text: "Une base de données", correct: false },
        { text: "Un système d'exploitation", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour écrire du texte dans la console ?", options: [
        { text: "console.write()", correct: false },
        { text: "console.log()", correct: true },
        { text: "console.print()", correct: false },
        { text: "console.text()", correct: false },
      ]},
      { question: "Quelle est la sortie de 'typeof null' ?", options: [
        
        { text: "'null'", correct: false },
        { text: "'undefined'", correct: false },
        { text: "'object'", correct: true },
        { text: "'string'", correct: false },
      ]},
      { question: "Quel mot-clé est utilisé pour déclarer une variable constante ?", options: [
        { text: "let", correct: false },
        { text: "const", correct: true },
        { text: "var", correct: false },
        
        { text: "final", correct: false },
      ]},
      { question: "Qu'est-ce que 'use strict' ?", options: [
        { text: "Un mode pour exécuter JavaScript de manière stricte", correct: true },
        { text: "Un nouveau framework JavaScript", correct: false },
        { text: "Un type de variable", correct: false },
        { text: "Une bibliothèque", correct: false },
      ]},
      { question: "Quelle méthode transforme un tableau en chaîne de caractères ?", options: [
        
        { text: "concat()", correct: false },
        { text: "toString()", correct: false },
        { text: "slice()", correct: false },
        { text: "join()", correct: true },
      ]},
      { question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau ?", options: [
        { text: "push()", correct: true },
        { text: "pop()", correct: false },
        { text: "shift()", correct: false },
        { text: "unshift()", correct: false },
      ]},
      { question: "Comment vérifier si une valeur est NaN ?", options: [
        { text: "isNaN()", correct: true },
        { text: "typeof()", correct: false },
        { text: "isNumber()", correct: false },
        { text: "parseFloat()", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour arrondir un nombre au plus proche entier ?", options: [
        { text: "Math.floor()", correct: false },
        { text: "Math.ceil()", correct: false },
        { text: "Math.round()", correct: true },
        { text: "Math.random()", correct: false },
      ]},
      { question: "Quel est le résultat de '2' + 2 en JavaScript ?", options: [
        { text: "4", correct: false },
        { text: "'22'", correct: true },
        { text: "NaN", correct: false },
        { text: "undefined", correct: false },
      ]},
      { question: "Comment déclarer une fonction en JavaScript ?", options: [
        { text: "function myFunc() {}", correct: true },
        { text: "def myFunc() {}", correct: false },
        { text: "func myFunc() {}", correct: false },
        { text: "function: myFunc() {}", correct: false },
      ]},
      { question: "Que retourne Array.isArray([]) ?", options: [
        { text: "true", correct: true },
        { text: "false", correct: false },
        { text: "undefined", correct: false },
        { text: "null", correct: false },
      ]},
      { question: "Quelle est la portée d'une variable déclarée avec 'var' ?", options: [
        
        { text: "Bloc", correct: false },
        { text: "Strictement locale", correct: false },
        { text: "Aucune des réponses", correct: false },
        { text: "Globale ou fonction", correct: true },
      ]},
      { question: "Qu'est-ce qu'une IIFE en JavaScript ?", options: [
        
        { text: "Une classe en JavaScript", correct: false },
        { text: "Une méthode de tableau", correct: false },
        { text: "Une erreur de syntaxe", correct: false },
        { text: "Une fonction immédiatement invoquée", correct: true },
      ]},
      { question: "Quelle est la différence entre '==' et '===' ?", options: [
        { text: "Aucune différence", correct: false },
        { text: "'==' compare les valeurs, '===' compare les valeurs et types", correct: true },
        { text: "'==' compare les types, '===' compare les valeurs", correct: false },
        { text: "'==' est strict, '===' est flexible", correct: false },
      ]},
      { question: "Quel objet est utilisé pour manipuler les dates en JavaScript ?", options: [
        { text: "Date", correct: true },
        { text: "Time", correct: false },
        { text: "Clock", correct: false },
        { text: "Calendar", correct: false },
      ]},
      { question: "Quelle méthode est utilisée pour copier une partie d'un tableau ?", options: [
        
        { text: "splice()", correct: false },
        { text: "concat()", correct: false },
        { text: "slice()", correct: true },
        { text: "filter()", correct: false },
      ]},
      { question: "Qu'est-ce que JSON ?", options: [
        
        { text: "JavaScript Online Node", correct: false },
        { text: "Java Syntax Object", correct: false },
        { text: "JavaScript Object Notation", correct: true },
        { text: "Aucune des réponses", correct: false },
      ]},
      { question: "Que retourne 'typeof undefined' ?", options: [
        
        { text: "'null'", correct: false },
        { text: "'object'", correct: false },
        { text: "'undefined'", correct: true },
        { text: "'string'", correct: false },
      ]},
      { question: "Comment convertir une chaîne en nombre ?", options: [
        { text: "parseInt()", correct: true },
        { text: "String()", correct: false },
        { text: "Number()", correct: false },
        { text: "toFixed()", correct: false },
      ]},
    ],
    php: [
      { question: "Qu'est-ce que PHP ?", options: [
        
        { text: "Un système de gestion de bases de données", correct: false },
        { text: "Un langage de style pour le web", correct: false },
        { text: "Un langage de programmation côté serveur", correct: true },
        { text: "Un outil de débogage", correct: false },
      ]},
      { question: "Que signifie PHP ?", options: [
        
        { text: "Programming Hypertext Page", correct: false },
        { text: "Processor for HTML Pages", correct: false },
        { text: "PHP: Hypertext Preprocessor", correct: true },
        { text: "Preprocessor for Hyperlink Pages", correct: false },
      ]},
      { question: "Comment démarre un script PHP ?", options: [
        { text: "<?php", correct: true },
        { text: "<script>", correct: false },
        { text: "<php>", correct: false },
        { text: "<code>", correct: false },
      ]},
      { question: "Quelle extension est utilisée pour les fichiers PHP ?", options: [
        { text: ".php", correct: true },
        { text: ".html", correct: false },
        { text: ".css", correct: false },
        { text: ".js", correct: false },
      ]},
      { question: "Comment déclarer une variable en PHP ?", options: [
        
        { text: "var variable", correct: false },
        { text: "variable$", correct: false },
        { text: "$variable", correct: true },
        { text: "let variable", correct: false },
      ]},
      { question: "Quelle fonction PHP est utilisée pour afficher du contenu ?", options: [
        
        { text: "printHTML", correct: false },
        { text: "output", correct: false },
        { text: "display", correct: false },
        { text: "echo", correct: true },
      ]},
      { question: "Quel est le type de données par défaut en PHP ?", options: [
        { text: "String", correct: false },
        { text: "Integer", correct: false },
        { text: "Mixed", correct: true },
        { text: "Float", correct: false },
      ]},
      { question: "Quelle fonction est utilisée pour compter les éléments dans un tableau ?", options: [
        { text: "count()", correct: true },
        { text: "array_length()", correct: false },
        { text: "sizeof()", correct: false },
        { text: "list_length()", correct: false },
      ]},
      { question: "Comment vérifier si une variable est définie ?", options: [
        
        { text: "defined()", correct: false },
        { text: "is_null()", correct: false },
        { text: "isset()", correct: true },
        { text: "exist()", correct: false },
      ]},
      { question: "Quelle fonction est utilisée pour inclure un fichier PHP ?", options: [
        
        { text: "require_once", correct: false },
        { text: "include", correct: true },
        { text: "addFile", correct: false },
        { text: "append", correct: false },
      ]},
      { question: "Comment vérifier le type d'une variable en PHP ?", options: [
        { text: "gettype()", correct: true },
        { text: "typeof()", correct: false },
        { text: "checkType()", correct: false },
        { text: "verifyType()", correct: false },
      ]},
      { question: "Comment démarrer une session en PHP ?", options: [
        { text: "session_start()", correct: true },
        { text: "start_session()", correct: false },
        { text: "init_session()", correct: false },
        { text: "begin_session()", correct: false },
      ]},
      { question: "Comment se connecte-t-on à une base de données MySQL en PHP ?", options: [
        
        { text: "mysql_connect()", correct: false },
        { text: "connect_mysql()", correct: false },
        { text: "mysqli_connect()", correct: true },
        { text: "db_connect()", correct: false },
      ]},
      { question: "Quel est le mot-clé pour déclarer une classe en PHP ?", options: [
        { text: "class", correct: true },
        { text: "object", correct: false },
        { text: "define", correct: false },
        { text: "declare", correct: false },
      ]},
      { question: "Comment est marquée une fin de ligne en PHP ?", options: [
        
        { text: ":", correct: false },
        { text: ".", correct: false },
        { text: ";", correct: true },
        { text: ",", correct: false },
      ]},
      { question: "Comment définir une constante en PHP ?", options: [
        { text: "define()", correct: true },
        { text: "const()", correct: false },
        { text: "setConstant()", correct: false },
        { text: "constant()", correct: false },
      ]},
      { question: "Comment accéder aux superglobales en PHP ?", options: [
        
        { text: "Utiliser une fonction spéciale", correct: false },
        { text: "Via une bibliothèque externe", correct: false },
        { text: "Utiliser $_GET, $_POST, etc.", correct: true },
        { text: "Utiliser les variables globales", correct: false },
      ]},
      { question: "Quelle est la portée d'une variable définie dans une fonction en PHP ?", options: [
        
        { text: "Globale", correct: false },
        { text: "Dynamique", correct: false },
        { text: "Locale", correct: true },
        { text: "Persistante", correct: false },
      ]},
      { question: "Comment gérer les erreurs en PHP ?", options: [
       
        { text: "Utiliser des if-else", correct: false },
        { text: "Utiliser des boucles", correct: false },
        { text: "Utiliser try...catch", correct: true },
        { text: "Les erreurs ne peuvent pas être gérées", correct: false },
      ]},
      { question: "Quel framework PHP est le plus utilisé ?", options: [
        { text: "Laravel", correct: true },
        { text: "Django", correct: false },
        { text: "React", correct: false },
        { text: "Symfony", correct: false },
      ]},
    ],
  };
  export default QuestionData;