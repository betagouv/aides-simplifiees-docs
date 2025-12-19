# Fondamentaux

La conception d'un simulateur d'aides publiques repose sur un équilibre délicat entre rigueur juridique et simplicité d'usage. Cinq principes directeurs doivent guider chaque décision de conception : la **lisibilité** (toute règle doit être explicable), la **vérifiabilité** (chaque calcul doit être traçable jusqu'à sa source), la **maintenabilité** (le code doit évoluer au rythme du droit), l'**interopérabilité** (les modèles doivent être réutilisables) et l'**ouverture** (code et règles publiés par défaut).

## Données personnelles et minimisation

Les simulateurs manipulent par nature des données sensibles (revenus, santé, situation familiale). Le RGPD impose un principe de minimisation stricte : ne collecter que les données indispensables au calcul.

Trois architectures de données sont envisageables :
*   **La simulation anonyme** (ex: *mon-entreprise*) : Le calcul s'effectue intégralement dans le navigateur de l'usager. Aucune donnée ne transite par un serveur, garantissant une confidentialité absolue "by design".
*   **Le pré-remplissage éphémère** : Les données sont récupérées via FranceConnect ou l'API Particulier pour faciliter la saisie, utilisées pour le calcul à la volée, puis immédiatement oubliées sans stockage persistant.
*   **La sauvegarde temporaire** : Un stockage chiffré permet à l'usager d'interrompre et de reprendre son parcours, mais introduit des contraintes de sécurité et de durée de conservation plus lourdes.

L'usage de FranceConnect et de l'API Particulier offre un gain d'ergonomie majeur en évitant la ressaisie, mais il exige une habilitation administrative et une gestion fine des cas d'erreur ou de refus de consentement.

## Accessibilité et inclusion

L'accessibilité (RGAA) est une obligation légale pour tout service public numérique. Les simulateurs présentent des défis spécifiques en la matière, notamment les formulaires dynamiques où l'apparition de nouvelles questions peut désorienter les lecteurs d'écran. L'usage de régions `aria-live` et une gestion rigoureuse du focus sont indispensables.

Au-delà de l'accessibilité technique, l'inclusion passe par la clarté du langage. Une question trop précise ("Quel est votre RFR N-2 ?") améliore la justesse du calcul mais peut provoquer l'abandon par incompréhension ou méfiance. La transparence pédagogique, expliquer pourquoi une donnée est demandée et comment elle influence le résultat, est le meilleur levier pour instaurer la confiance.

## L'approche interdisciplinaire

Un simulateur réussi est le produit de la convergence de plusieurs expertises, notamment : le **juridique** (qui interprète la norme), le **design** (qui conçoit l'interaction) et la **technique** (qui implémente la logique). Pour aligner la logique du droit avec la logique de l'usager, il est crucial de faire dialoguer au plus tôt ces différents profils, dès la phase de modélisation, pour définir un vocabulaire commun (glossaire), formaliser des cas types partagés et documenter les arbitrages d'interprétation.
