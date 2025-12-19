# Concevoir un simulateur multi-aide

Le passage d'un simulateur mono-aide à un outil multi-aides introduit une complexité exponentielle. Il s'agit de faire cohabiter des logiques administratives hétérogènes (CAF, Région, État) au sein d'un parcours unifié pour l'usager.

## Le périmètre : un choix structurant

Avant même de modéliser, il faut définir l'ambition du simulateur. L'écosystème présente quatre configurations types, chacune avec ses propres défis de gouvernance :

*   **Le simulateur mono-aide** (ex: *APL*) : Le périmètre est clair, l'expert métier est unique. La validation est "simple".
*   **Le bouquet mono-porteur** (ex: *mes-aides-reno*) : Regroupe 5 à 20 aides d'un même organisme (ANAH). La cohérence des données est naturelle.
*   **Le thématique multi-porteurs** (ex: *aides-simplifiées*) : Agrège des aides de sources variées (CAF, Action Logement, Départements) autour d'un moment de vie. Le défi est d'obtenir une validation métier coordonnée entre plusieurs experts.
*   **L'exhaustif** (ex: *1jeune1solution*) : Vise l'intégralité des droits (100+ aides). Ici, la validation "aide par aide" devient impossible ; il faut changer de méthode et passer à une logique de contribution distribuée.

## 1. Harmoniser la sémantique (variables)

La difficulté majeure réside dans les **conflits de définitions**. Chaque dispositif a sa propre conception de la réalité. La notion de "revenu", par exemple, diffère subtilement entre le RSA (ressources trimestrielles perçues), les APL (RFR N-2) et une aide régionale (revenu fiscal ou net imposable).

Deux stratégies s'offrent au concepteur :
*   **L'union stricte** : Poser chaque question spécifiquement ("Quel est votre RFR ?", "Quels sont vos revenus nets ?"). Cela garantit la précision juridique mais alourdit considérablement le parcours.
*   **L'harmonisation** : Définir une variable pivot (ex: "Revenus mensuels moyens") et l'utiliser pour approximer les critères de chaque aide. Cela fluidifie l'expérience mais introduit une marge d'erreur qu'il faut documenter.

## 2. Résoudre les interactions (règles)

Les aides ne sont pas indépendantes ; elles interagissent selon des logiques qu'il faut anticiper :

*   **Exclusivité (non-cumul)** : Certaines aides s'excluent mutuellement (ex: APL Foyer vs APL Logement autonome). Le simulateur doit soit arbitrer automatiquement pour la plus favorable, soit présenter le choix à l'usager.
*   **Dépendance en cascade** : Le montant d'une aide A peut entrer dans la base ressources d'une aide B. L'ordre de calcul devient alors critique et doit être modélisé dans le graphe de dépendances.
*   **Conditions contradictoires** : Des critères d'âge ou de statut peuvent s'exclure mutuellement, rendant certains profils théoriquement impossibles.

## 3. Arbitrer le parcours (UX)

Dans un contexte multi-aides, la tentation est grande de vouloir couvrir tous les cas particuliers ("edge cases"). Cependant, chaque exception réglementaire ajoute potentiellement une question au formulaire.

La conception du parcours devient un exercice d'optimisation sous contrainte : comment maximiser la précision du calcul tout en minimisant le nombre de questions ?
*   **Exhaustivité vs fluidité** : Faut-il poser une question qui ne concerne que 1% des usagers mais conditionne une aide importante ?
*   **Langage clair vs juridique** : Simplifier "État matrimonial légal" en "Vivez-vous en couple ?" améliore la compréhension mais introduit un flou juridique.

Il n'y a pas de réponse unique. Ces arbitrages doivent être documentés formellement.

## Outils de conception et documentation

Pour maîtriser cette complexité, il est indispensable de s'outiller :

*   **Matrices de variables** : Tableau croisé recensant toutes les variables demandées par chaque aide, pour identifier les doublons et les opportunités de fusion.
*   **Graphes de dépendances** : Visualisation des liens de calcul entre les aides.
*   **ADR (Architecture Decision Records)** : Les choix d'harmonisation (ex: "Nous utilisons le RFR N-1 pour toutes les aides régionales") doivent être tracés dans des ADRs. C'est la mémoire du projet qui permet d'expliquer les écarts de calcul futurs.
