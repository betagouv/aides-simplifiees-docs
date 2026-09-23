# Principes de conception

Un simulateur d'aides publiques concilie l'exactitude juridique et la simplicité d'usage. Cinq principes guident sa conception :

- lisibilité : chaque règle peut être expliquée ;
- vérifiabilité : chaque calcul se relie à son texte source ;
- maintenabilité : le modèle suit les évolutions du droit ;
- interopérabilité : les modèles sont réutilisables par d'autres services ;
- ouverture : code et règles sont publiés.

## Valeur d'un résultat de simulation

Un simulateur donne une estimation. Son résultat n'engage pas l'administration : le simulateur de l'impôt sur le revenu de la DGFiP le présente comme indicatif, et mesdroitssociaux.gouv.fr parle de « droits potentiels » avant de renvoyer vers l'organisme compétent. Seule une prise de position formelle de l'administration, comme le rescrit (article L. 80 B du livre des procédures fiscales, article L. 312-3 du code des relations entre le public et l'administration), est opposable.

La simulation sert à informer l'usager et à lui permettre d'anticiper un changement de situation (déménagement, naissance, reprise d'emploi) avant toute démarche. Le texte affiché avec le résultat dit ce qu'il vaut.

## Données personnelles et minimisation

Les simulateurs manipulent des données sensibles : revenus, santé, situation familiale. Le RGPD impose la minimisation : ne collecter que les données indispensables au calcul.

Trois architectures de données sont possibles :

- La simulation anonyme calcule dans le navigateur de l'usager, comme mon-entreprise : les données saisies restent sur son appareil.
- Le pré-remplissage éphémère récupère les données par FranceConnect ou l'API Particulier pour faciliter la saisie, les utilise pour le calcul, puis les efface.
- La sauvegarde temporaire chiffre les réponses pour que l'usager interrompe et reprenne son parcours ; elle impose des règles de sécurité et une durée de conservation.

FranceConnect et l'API Particulier évitent à l'usager de ressaisir ses informations. Ils demandent une habilitation administrative et le traitement des erreurs et des refus de consentement.

## Accessibilité et inclusion

L'accessibilité (RGAA) est une obligation légale pour tout service public numérique. Dans un formulaire dynamique, l'apparition de nouvelles questions désoriente les utilisateurs de lecteurs d'écran : les régions `aria-live` et la gestion du focus y répondent.

L'inclusion passe aussi par un langage clair. Une question trop précise (« Quel est votre revenu fiscal de référence N-2 ? ») améliore la justesse du calcul et fait abandonner des usagers qui ne comprennent pas ou se méfient. Expliquer pourquoi une donnée est demandée et comment elle influence le résultat aide l'usager à répondre.

## Une équipe pluridisciplinaire

Un simulateur réunit trois compétences : le droit, pour interpréter la règle ; le design, pour concevoir l'interaction ; la technique, pour écrire le modèle. Ces profils travaillent ensemble dès la modélisation, pour établir un glossaire commun, écrire des cas types partagés et documenter les choix d'interprétation.
