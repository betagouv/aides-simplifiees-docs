# Contribuer à un modèle partagé

Contribuer à un modèle partagé comme `openfisca-france` ou aux paquets Publicodes permet de réutiliser le travail des autres équipes, et demande de suivre leur processus de validation.

## Le cycle de vie d'une contribution

Une modification de règles change les résultats de tous les simulateurs qui utilisent le paquet. Le processus de contribution suit donc quatre étapes :

- Une issue qualifie la demande : correction d'erreur, mise à jour de barème ou nouvelle interprétation. Le contributeur et les mainteneurs s'accordent sur la lecture du texte avant d'écrire le code.
- La pull request comprend la référence au texte officiel (Légifrance, BOFiP) et des cas types qui décrivent le comportement attendu.
- La revue porte sur deux points : la qualité du code et les tests de non-régression, puis la lecture du texte cité et les cas types, vérifiés par une personne qui connaît le domaine.
- La modification fusionnée est publiée dans une nouvelle version du paquet, que les simulateurs peuvent adopter.

## Dépôt unique et paquets thématiques

`openfisca-france` réunit l'essentiel des règles socio-fiscales nationales dans un dépôt unique. Ses règles de contribution sont strictes, parce qu'une modification du SMIC, par exemple, change le calcul de dizaines d'aides.

Les modèles Publicodes sont publiés en paquets thématiques (`modele-social`, `nosgestesclimat`, `mesaidesreno`), maintenus par des équipes différentes. Chaque équipe avance à son rythme, et l'usage de plusieurs paquets ensemble demande de coordonner leurs définitions.

## Contribuer au dépôt principal ou maintenir une copie

Une copie divergente du dépôt (fork) oblige à reporter ensuite chaque évolution du dépôt principal. Les corrections et les règles nationales se contribuent au dépôt principal. Le fork ne devrait être réservé qu'à des expérimentations temporaires ou à des règles locales propres à un territoire. En cas de désaccord d'interprétation, consigner les deux lectures dans un fichier versionné avec le modèle.
