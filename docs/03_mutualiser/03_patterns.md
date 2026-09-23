# Patterns architecturaux

Relier un formulaire à un moteur de règles engage trois choix d'architecture. Ils déterminent la liberté de conception du parcours, la maintenance du code et la possibilité de relier chaque calcul au texte.

## Générer le questionnaire depuis les règles ou le décrire à part

Le questionnaire peut se générer depuis le modèle de règles, comme dans mon-entreprise : si une règle demande la variable `revenu_fiscal`, le champ apparaît. Le formulaire demande alors exactement les données utiles au calcul, et son ordre suit la structure du modèle.

Le questionnaire peut aussi se décrire dans un fichier séparé des règles, en JSON ou en YAML. Les questions se reformulent et se réordonnent en modifiant ce fichier, pour concevoir des parcours pédagogiques. En contrepartie, une conversion relie les réponses aux variables du moteur, et le questionnaire et le modèle doivent être tenus en cohérence.

Une solution intermédiaire, employée par mes-aides-reno, prend les questions dans le modèle et fixe leur ordre et leur affichage dans un fichier de configuration.

## Calculer dans le navigateur ou sur un serveur

Le lieu du calcul dépend souvent du moteur, et il a des effets sur la réactivité et la confidentialité.

Dans le navigateur, avec Publicodes par exemple, le calcul se refait à chaque réponse sans appel réseau. C'est utile aux simulateurs où l'usager fait varier ses réponses. Le modèle se charge en entier au démarrage, ce qui ralentit l'ouverture pour les modèles de grande taille. Les données saisies restent sur l'appareil de l'usager.

Sur un serveur, avec OpenFisca par exemple, une API calcule. Ce choix convient aux modèles qui demandent beaucoup de calcul, ou qui utilisent des données protégées qui ne doivent pas être exposées au navigateur. Chaque calcul passe par le réseau, et les données personnelles transitent par le serveur, qu'il faut sécuriser.

## Convertir les réponses en variables du moteur

La conversion relie la réponse de l'usager (« Je suis en alternance ») à la variable du moteur (`contrat_travail = "apprentissage" | "professionnalisation"`).

Quand le champ du formulaire a le même nom que la variable, la conversion est directe : le code est simple et chaque réponse se relie à la variable.

Quand le formulaire est décrit à part, des fonctions de conversion transforment les réponses. Elles déduisent plusieurs variables d'une seule réponse, ou convertissent des périodes (un revenu annuel saisi devient douze revenus mensuels). Ces fonctions contiennent des choix d'interprétation : elles se documentent et se testent comme le modèle lui-même.

## Choix selon le simulateur

- Simulateur pédagogique, réactif, maintenu par des experts métier avec l'aide de développeurs : Publicodes, avec le formulaire généré depuis les règles.
- Parcours en plusieurs étapes, très travaillé, qui appelle plusieurs moteurs : questionnaire décrit à part, avec des fonctions de conversion documentées.
- Calculs socio-fiscaux sur des foyers à plusieurs membres : OpenFisca, sur un serveur.
