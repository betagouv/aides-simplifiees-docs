# Outils et briques réutilisables

L'architecture d'un simulateur repose sur l'assemblage de composants éprouvés. Cette page recense les briques open source disponibles, en distinguant les moteurs de calcul, les bibliothèques de règles métier et les outils d'interface.

## Moteurs de règles

Le choix du moteur est structurant pour l'architecture technique et la gouvernance du projet.

### Publicodes
Langage déclaratif en YAML conçu pour rendre les algorithmes "explicables".
*   **Usage recommandé** : Simulateurs grand public, calcul côté navigateur, besoin fort de documentation interactive.
*   **Points forts** : Transparence native, syntaxe accessible aux non-développeurs, écosystème JavaScript/React.
*   **Points d'attention** : La gestion d'entités multiples (foyers complexes) est moins naturelle qu'avec OpenFisca.
*   **Packages** : `publicodes` (moteur), `@publicodes/react-ui` (doc), `@publicodes/rest-api`.

### OpenFisca
Moteur de microsimulation en Python, standard de fait pour le système socio-fiscal français.
*   **Usage recommandé** : Modélisation fine des interactions foyer/ménage/famille, calculs sur des périodes glissantes, simulation de réformes.
*   **Points forts** : Robustesse sur les modèles complexes, API REST native, communauté internationale.
*   **Points d'attention** : Courbe d'apprentissage technique plus élevée, exécution serveur obligatoire.

### Catala
Langage de programmation littéraire développé par l'INRIA, garantissant une correspondance formelle entre texte de loi et code.
*   **Usage recommandé** : Projets de recherche ou cas nécessitant une preuve formelle de conformité.
*   **Statut** : Prometteur mais encore peu déployé en production.

## Bibliothèques de règles métier (Packages)

Plutôt que de redévelopper les règles, il est possible d'importer des modèles existants maintenus par d'autres équipes.

*   **`modele-social`** (Urssaf) : Le socle complet des cotisations et de la fiscalité des revenus.
*   **`@socialgouv/modeles-social`** : Les règles de 47 conventions collectives (préavis, indemnités).
*   **`mesaidesreno`** : Règles d'éligibilité et calculs pour MaPrimeRénov' et les CEE.
*   **`@incubateur-ademe/nosgestesclimat`** : Modèle complet de l'empreinte carbone individuelle.
*   **`@betagouv/aides-velo`** : Aides nationales et locales à l'achat de vélo.

## Outils d'interface et formulaires

Ces outils facilitent la connexion entre le modèle de règles et l'interface utilisateur.

*   **`@publicodes/forms`** : Génération automatique de formulaires React à partir des métadonnées d'un modèle Publicodes.
*   **`@betagouv/survey-schema`** (à l'état d'esquisse): Spécification JSON pour décrire des questionnaires indépendants du moteur de calcul, permettant de changer de moteur sans refaire l'UI.

## Données et APIs

L'intégration de données externes fiabilise la saisie et le calcul.

*   **API Particulier / Entreprise** : Récupération de données administratives certifiées.
*   **BAN (Base Adresse Nationale)** : Normalisation indispensable pour les aides géolocalisées.
*   **Données territoriales** : Référentiels locaux (EPCI, zonages) souvent nécessaires pour les aides locales.

## Ontologies et standards émergents

Au-delà des moteurs d'exécution, l'interopérabilité à long terme repose sur des standards de représentation de la norme juridique.

*   **FLINT & Calculemus** : Développés par le TNO (Pays-Bas), ces standards décomposent la norme en concepts atomiques (Actes, Faits, Devoirs) liés sémantiquement aux textes sources. Ils visent une traçabilité totale ("Deep linking") entre le résultat d'un calcul et la phrase de loi correspondante.
*   **LegalRuleML** : Standard OASIS pour la représentation formelle des règles juridiques.
*   **ELI (European Legislation Identifier)** : Standard d'identification pérenne des textes législatifs européens, prérequis indispensable pour lier le code au droit de manière stable.

Bien que Publicodes et OpenFisca n'implémentent pas nativement ces standards formels, un enjeu long terme pourrait-être de converger vers des modèles exportables capables de dialoguer avec ces ontologies internationales.
