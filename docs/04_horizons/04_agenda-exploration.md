# Agenda d'exploration

Pour concrétiser les horizons explorés dans cette section, plusieurs chantiers d'expérimentation doivent être ouverts. Ce document synthétise les pistes de travail identifiées pour lever les verrous techniques, juridiques et de design.

## 1. La standardisation des preuves (fixtures)
Si nous voulons mutualiser les règles, nous devons mutualiser leur validation.
*   **Question d'exploration** : Comment décrire une situation usager complexe (historique, foyer) dans un format JSON/YAML agnostique du moteur de calcul ?
*   **Pistes** : S'inspirer du **BDD (Behavior-Driven Development)** et du langage **Gherkin** pour écrire des spécifications exécutables ("Given/When/Then") ; Créer une "banque centrale de cas de tests" certifiant la conformité nationale.

## 2. La dette de représentation
Le fossé se creuse souvent entre ce que le système fait réellement (le code) et ce que l'organisation croit qu'il fait (la documentation, les schémas). C'est ce que Cyrille Martraire appelle la "Documentation Morte".
*   **Question d'exploration** : Comment créer de la **"Living Documentation"** : des représentations (diagrammes, graphes) générées directement depuis le code, garantissant qu'elles sont toujours à jour ("Evergreen") ?
*   **Pistes** :
    *   **Architecture as Code** : Traiter les diagrammes comme du code (versionnés, revus, automatisés).
    *   **C4 Model** : Adopter ce standard hiérarchique pour cartographier le système à différents niveaux de zoom :
        *   **C1 (Context)** : Le système dans son écosystème (utilisateurs, partenaires).
        *   **C2 (Containers)** : Les applications et bases de données (unités de déploiement).
        *   **C3 (Components)** : L'organisation interne des briques logicielles.
    *   **Outillage** : Utiliser **MermaidJS** pour des besoins simples (intégré au Markdown) ou **Structurizr** pour une approche "Diagrams as Code 2.0" (modèle unique, vues multiples).
    *   **Gouvernance fédérée** : Placer les diagrammes au plus près du code (dans les dépôts applicatifs) pour favoriser leur maintenance, tout en les agrégeant automatiquement dans un portail central pour la vision d'ensemble.

## 3. Le design de la traduction
Traduire le droit en code est un acte de conception qui implique des choix d'interprétation.
*   **Question d'exploration** : Quels artefacts permettent de documenter explicitement les arbitrages faits lors de la modélisation ?
*   **Pistes** : Utiliser la **"Knowledge Augmentation"** (annotations dans le code type `@Glossary`) pour générer automatiquement des glossaires métier partagés ; Formaliser le rôle de "Designer de règles" comme tiers de confiance.

## 4. L'IA comme "colle" documentaire
Plutôt que de générer du code, l'IA pourrait servir à maintenir la cohérence entre des objets hétérogènes.
*   **Question d'exploration** : Comment utiliser les LLM pour orchestrer la continuité entre le texte légal, les règles techniques et les cas de tests, en signalant automatiquement les divergences ?

## 5. L'humain dans la boucle IA
L'usage de l'IA pour l'extraction de règles (comme dans le projet *Tous à bord*) est prometteur mais risqué. Il faut formaliser les protocoles de collaboration Homme-Machine.
*   **Question d'exploration** : Quelle interface permet à un expert métier de valider efficacement une suggestion probabiliste d'un LLM sans tomber dans le biais d'automatisation ?

## 6. La performance embarquée (Wallet)
Le scénario du "Wallet" impose des contraintes techniques fortes.
*   **Question d'exploration** : Comment faire tourner un moteur de calcul socio-fiscal complet dans un environnement contraint (mobile), sans latence et sans connexion ?

## 7. Les méthodologies de co-conception
Au-delà des outils, c'est le processus de production de la loi qui doit évoluer.
*   **Inspiration** : L'approche **"Better Rules"** (Nouvelle-Zélande) qui réunit juristes, développeurs et designers *avant* la rédaction de la loi, ou la méthode **Calculemus** (Pays-Bas) qui structure l'analyse normative.
*   **Question d'exploration** : Comment adapter ces méthodologies anglo-saxonnes à la culture administrative et juridique française (Légistique) ?
