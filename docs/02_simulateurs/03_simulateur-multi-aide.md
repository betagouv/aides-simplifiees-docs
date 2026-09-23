# Concevoir un simulateur multi-aide

Un simulateur multi-aide réunit dans un même parcours des aides de plusieurs organismes (CAF, région, État), dont les règles sont écrites chacune selon sa propre logique. Chaque aide ajoutée multiplie les définitions à rapprocher, les interactions entre aides et les questions à poser.

## Quatre périmètres de simulateur

Le périmètre se choisit avant la modélisation. Chacun demande une organisation différente de la validation :

- Un simulateur mono-aide, comme celui de l'APL, a un périmètre clair et un seul expert métier.
- Un ensemble d'aides d'un même organisme, comme mes-aides-reno avec les aides de l'Anah, partage les mêmes données.
- Un simulateur thématique réunit des aides de plusieurs organismes (CAF, Action Logement, départements) autour d'un moment de vie : déménagement, naissance, création d'entreprise. Les aides sont organisées comme l'usager vit sa situation. Leur validation demande de coordonner plusieurs experts.
- Un simulateur à large périmètre, comme 1jeune1solution, rassemble les aides de nombreux organismes pour un même public. La validation aide par aide y est impossible : elle passe par une contribution répartie entre les organismes.

## Définitions divergentes d'une même donnée

La principale difficulté vient des définitions. La notion de revenu diffère entre le RSA (ressources trimestrielles perçues), les aides au logement (ressources des douze derniers mois, actualisées tous les trois mois) et une aide régionale (revenu fiscal ou net imposable).

Deux stratégies sont possibles :

- L'union stricte pose une question par définition (« Quel est votre revenu fiscal de référence ? », « Quels sont vos revenus nets ? »). Elle respecte chaque définition juridique et allonge le parcours.
- L'harmonisation définit une variable commune, par exemple « Revenus mensuels moyens », et en déduit une valeur approchée pour chaque aide. Elle réduit le nombre de questions et introduit une marge d'erreur, à documenter.

Dans les deux cas, documenter la définition employée par chaque aide rend les écarts visibles avant toute harmonisation.

## Non-cumul et dépendances entre aides

Les aides interagissent de trois façons :

- Certaines s'excluent : APL, ALF et ALS, une seule aide au logement par logement. Le simulateur retient la plus favorable ou présente le choix à l'usager.
- Le montant d'une aide A peut entrer dans la base ressources d'une aide B. L'ordre de calcul se modélise alors dans le graphe de dépendances.
- Des critères d'âge ou de statut peuvent se contredire, et rendre certains profils impossibles.

## Nombre de questions et précision du calcul

Chaque exception réglementaire peut ajouter une question au formulaire. Le parcours cherche le meilleur calcul avec le moins de questions possible :

- Faut-il poser une question qui concerne 1 % des usagers, si elle conditionne une aide importante ?
- Remplacer « État matrimonial légal » par « Vivez-vous en couple ? » améliore la compréhension et introduit une imprécision juridique.

Ces choix se documentent, avec leur raison.

## Outils de conception et documentation

- Une matrice des variables croise les variables demandées par chaque aide, pour repérer les doublons et les fusions possibles.
- Un graphe de dépendances montre les liens de calcul entre les aides.
- Un registre de décisions (ADR, *Architecture Decision Record*) consigne chaque choix d'harmonisation, par exemple « Le revenu fiscal de référence N-1 sert pour toutes les aides régionales ». Il explique ensuite les écarts de calcul.
