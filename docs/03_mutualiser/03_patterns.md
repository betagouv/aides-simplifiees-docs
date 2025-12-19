# Patterns architecturaux

Connecter un formulaire utilisateur à un moteur de règles est un choix d'architecture qui détermine la flexibilité du parcours, la maintenabilité du code et la traçabilité juridique des calculs. L'analyse des projets existants révèle trois tensions fondamentales qu'il convient d'arbitrer.

## Tension 1 : La source de vérité de l'interface

La première décision concerne la définition du questionnaire : doit-il être une projection directe des règles ou un artefact autonome ?

**L'approche "Projection des règles"** (ex: *mon-entreprise*) consiste à générer l'interface directement depuis les métadonnées du modèle. Si une règle nécessite la variable `revenu_fiscal`, le champ apparaît. Cette méthode garantit une cohérence absolue : il est impossible de demander une donnée inutile ou d'oublier un paramètre. En contrepartie, elle contraint le design du parcours à la structure logique du calcul, limitant les possibilités d'optimisation UX pure.

**L'approche "Artefact autonome"** (ex: *aides-simplifiées*) sépare la définition du formulaire (souvent un JSON ou YAML) de celle des règles. Cela offre une liberté totale pour concevoir des parcours pédagogiques, reformuler les questions ou changer l'ordre sans toucher au moteur. Le coût est la maintenance d'une couche de mapping et le risque de désynchronisation entre ce qui est demandé et ce qui est calculé.

**L'approche "Filtre d'ordonnancement"** (ex: *mes-aides-reno*) tente un compromis : le moteur définit les questions possibles, mais un fichier de configuration externe pilote leur ordre et leur affichage, permettant d'ajuster l'expérience sans rompre le lien avec le modèle.

## Tension 2 : Le lieu d'exécution (client vs serveur)

Le choix du moteur dicte souvent l'architecture d'exécution, avec des conséquences directes sur la performance et la confidentialité.

**L'exécution côté client** (Publicodes) déporte la logique dans le navigateur de l'usager. L'interaction est instantanée (zéro latence réseau), ce qui est crucial pour les simulateurs exploratoires où l'utilisateur ajuste des curseurs en temps réel. Cependant, cela impose de charger l'intégralité du modèle au démarrage, ce qui peut peser sur les performances pour les bases de règles très volumineuses.

**L'exécution côté serveur** (OpenFisca) centralise le calcul via une API. C'est indispensable pour les modèles nécessitant une puissance de calcul importante ou l'accès à des données protégées qui ne doivent pas être exposées au client. Cette architecture introduit une latence réseau à chaque interaction et exige une vigilance accrue sur la sécurité des données personnelles qui transitent par le serveur.

## Tension 3 : La complexité de la couche de mapping

Le "mapping" est la traduction entre la réponse de l'utilisateur ("Je suis en alternance") et la variable du moteur (`contrat_travail = "apprentissage" | "professionnalisation"`).

Dans une **architecture couplée**, ce mapping est souvent implicite ou direct : le champ de formulaire porte le nom de la variable. La traçabilité est maximale, le code est simple.

Dans une **architecture découplée**, une couche de transformation (dispatchers, formatters) est nécessaire. Elle permet de gérer des cas complexes, comme déduire plusieurs variables techniques d'une seule réponse simple, ou gérer des notions temporelles (convertir un revenu annuel saisi en 12 revenus mensuels). Cette flexibilité a un prix : la "boîte noire" du mapping devient un lieu critique où peuvent s'introduire des erreurs d'interprétation difficiles à auditer.

## Synthèse pour la décision

*   Pour un simulateur pédagogique nécessitant une réactivité immédiate et une maintenance légère par des experts métier : privilégiez **Publicodes avec génération d'UI**.
*   Pour un parcours multi-étapes complexe, nécessitant une UX très travaillée et intégrant plusieurs moteurs hétérogènes : optez pour un **formulaire autonome avec une couche de mapping explicite**.
*   Pour des calculs socio-fiscaux lourds impliquant des foyers complexes : l'architecture **serveur OpenFisca** reste incontournable.
