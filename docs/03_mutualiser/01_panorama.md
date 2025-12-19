# Panorama des simulateurs publics ouverts

L'écosystème des simulateurs publics ouverts, porté principalement par la communauté beta.gouv.fr et ses partenaires, regroupe une vingtaine de produits numériques. Au-delà de leur diversité thématique, ces projets se structurent autour de deux paradigmes technologiques majeurs qui reflètent des philosophies de modélisation distinctes.

## Les écosystèmes technologiques

### L'écosystème Publicodes : lisibilité et web-first
Environ un tiers des simulateurs utilisent Publicodes. Ce choix privilégie l'explicabilité des règles et l'exécution côté client (navigateur), favorisant une expérience utilisateur fluide et une contribution ouverte aux non-développeurs.
*   **[mon-entreprise](https://beta.gouv.fr/startups/mon-entreprise.html)** : Le projet fondateur du langage, référence pour les calculs de cotisations et statuts.
*   **[nosgestesclimat](https://github.com/incubateur-ademe/nosgestesclimat)** : Calculateur d'empreinte carbone grand public, traduit en 5 langues.
*   **[mes-aides-reno](https://beta.gouv.fr/startups/mesaidesreno.html)** : Modélisation complexe des aides à la rénovation énergétique (MaPrimeRénov').
*   **[code-du-travail-numérique](https://beta.gouv.fr/startups/codedutravail.html)** : Utilise le moteur pour interpréter 47 conventions collectives.

### L'écosystème OpenFisca : microsimulation socio-fiscale
Un autre tiers des projets s'appuie sur OpenFisca. Ce moteur Python est conçu pour gérer la complexité des systèmes socio-fiscaux (foyers, ménages, temporalités glissantes) et s'exécute côté serveur.
*   **[aides-jeunes](https://beta.gouv.fr/startups/aides.jeunes.html)** : Agrégateur massif (500+ aides) intégrant un CMS pour la contribution.
*   **[leximpact](https://beta.gouv.fr/startups/leximpact.html)** : Outil de simulation législative pour l'Assemblée nationale et le Sénat.
*   **[estime](https://beta.gouv.fr/startups/estime.html)** & **[mes-ressources-formation](https://beta.gouv.fr/startups/estime.formation.html)** : Outils de France Travail pour sécuriser les parcours de reprise d'activité.

### Les approches ad-hoc
Certains projets nécessitent des architectures spécifiques qui ne cadrent pas avec les moteurs génériques, souvent pour des raisons de couplage fort avec des données externes.
*   **[envergo](https://beta.gouv.fr/startups/envergo.html)** : Évaluation environnementale basée sur des croisements géographiques (PostGIS).
*   **[terristory](https://beta.gouv.fr/startups/terri-story.html)** : Analyse territoriale mêlant calculs statistiques et machine learning.
*   **[pacoupa](https://beta.gouv.fr/startups/pacoupa.html)** : Moteur de recommandation basé sur une base de données produits (SQLite/Zod).

## Couverture thématique

*   **Aides sociales** : *aides-jeunes, tous-a-bord* (transports), *estime*.
*   **Fiscalité & Entreprise** : *mon-entreprise, portail-rse, leximpact*.
*   **Transition écologique** : *mes-aides-reno, nosgestesclimat, impact-co2, envergo*.
*   **Droit & Justice** : *code-du-travail-numérique, a-just* (aide à la décision tribunaux).
*   **Territoires** : *aides-agri, terristory, sparte* (artificialisation des sols).
