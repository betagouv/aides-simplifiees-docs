# Glossaire

Ce glossaire définit les notions, acronymes et références employés dans la documentation, pour les métiers du droit, du numérique et de la conception de services publics.

## A

### ADR (Architecture Decision Record)
Document qui enregistre une décision d'architecture, son contexte, les options considérées et leurs conséquences. Les ADR gardent la trace des choix techniques pour les personnes qui rejoignent le projet.

### Aide publique
Mesure financière, fiscale ou sociale accordée par une autorité publique (État, collectivité, opérateur) selon des conditions d'éligibilité. Une aide peut être monétaire, en nature ou prendre la forme d'une exonération.

### Algorithme
Suite d'instructions qui exécute un calcul déterminé. Dans un simulateur, l'algorithme applique une règle de droit sous forme d'opérations mathématiques ou logiques.

### API (Application Programming Interface)
Interface par laquelle deux logiciels échangent des données. Une API de calcul reçoit une situation et renvoie les résultats d'éligibilité et les montants.

## B

### Barème
Tableau ou formule qui donne le montant d'une aide selon un ou plusieurs critères (revenus, nombre d'enfants, lieu). Exemple : le barème de l'APL selon la zone et les ressources du foyer.

## C

### Calcul
Opérations qui évaluent les conditions d'accès à une aide pour un usager. Le résultat est binaire (éligible ou non éligible) ou gradué (montant ajusté selon un barème).

### Cas type
Situation représentative définie avec les experts métier : un profil d'usager et le résultat attendu. Le cas type spécifie le comportement attendu et s'exécute comme test de non-régression. Il est écrit dans une langue lisible par des non-développeurs, et sa provenance est indiquée : cas construit, exemple de circulaire, dossier réel anonymisé.

### Catala
Langage de programmation littéraire développé par Inria : le texte de loi et le code qui l'applique sont écrits dans le même document, et le compilateur vérifie le code et ses tests. Voir [Outils réutilisables](/03_mutualiser/02_outils).

### CI/CD (Continuous Integration / Continuous Deployment)
Intégration et déploiement continus : les tests, la construction et la mise en ligne du code s'exécutent automatiquement à chaque modification.

### Commun numérique
Ressource logicielle, documentaire ou méthodologique ouverte, réutilisable et gouvernée collectivement.

### Critères d'éligibilité
Conditions à remplir pour bénéficier d'une aide publique : âge, revenus, situation familiale.

## D

### Dispositif (réglementaire)
Ensemble de règles juridiques qui régit une situation ou produit un effet juridique précis. Exemple : l'aide personnalisée au logement.

### DMN (Decision Model and Notation)
Standard de modélisation des règles métier, qui représente une logique de décision sous forme de tables et de diagrammes exécutables.

### DSFR (Système de design de l'État)
Système de design officiel de l'État français, pour la cohérence visuelle et l'accessibilité des services publics numériques.

## E

### Éligibilité
Fait de remplir les conditions requises pour bénéficier d'une aide ou d'un service public.

### Entité
Objet de calcul dans un moteur de règles, par exemple l'individu, la famille, le foyer fiscal ou le ménage dans OpenFisca. Chaque variable se rattache à une entité.

### Expert métier
Personne qui connaît un domaine réglementaire : juriste, agent de la CAF, conseiller France Travail. Dans un projet de simulateur, l'expert métier valide les interprétations et les cas types.

## F

### Fonction de conversion
Fonction qui transforme une réponse de l'usager en une ou plusieurs variables du moteur de règles. Exemple : la réponse « alternance » devient `{alternant: true}`. Voir [Patterns architecturaux](/03_mutualiser/03_patterns).

## L

### Liquidateur
Système informatique qu'une administration utilise pour calculer et attribuer les prestations. Le liquidateur calcule les droits réels ; le simulateur donne une estimation. Les liquidateurs sont des moteurs de règles internes aux systèmes d'information des administrations.

## M

### Modèle (de règles)
Représentation formalisée des règles d'attribution d'une aide, écrite pour un moteur de règles.

### Moteur de règles
Logiciel qui exécute des règles formalisées. Les administrations emploient des moteurs internes à leurs systèmes d'information (voir [Liquidateur](#liquidateur)) et des plateformes commerciales. Les moteurs ouverts, publiés en open source, sont ceux que décrit cette documentation : OpenFisca, Publicodes, Catala.

### Moteur ouvert
Moteur de règles publié en open source, dont le code et les modèles de règles sont consultables et réutilisables.

## P

### Personal Regulation Assistant (PRA)
Assistant numérique qui analyse la situation d'une personne au regard de plusieurs réglementations, pour l'informer de ses droits et obligations. Thème d'un projet pilote européen lancé en 2025 avec la Grèce et les Pays-Bas.

### Publicodes
Langage de règles en YAML, avec des noms de règles en français, créé par l'équipe de mon-entreprise et exécuté par un moteur JavaScript, qui génère la documentation de chaque calcul.

### @publicodes/forms
Bibliothèque JavaScript qui convertit des règles Publicodes en formulaire interactif.

## Q

### Questionnaire déclaratif
Description d'un questionnaire dans un fichier (JSON, YAML) : questions, ordre, conditions d'affichage et validations. L'interface se génère depuis ce fichier.

## R

### Registre des interprétations
Fichier versionné avec le modèle, qui consigne les choix faits quand un texte réglementaire est ambigu. Chaque interprétation y est justifiée, datée et validée par un expert, ce qui explique le comportement du simulateur.

### Réglementation opérable
Ensemble du travail qui rend une règle de droit exécutable et vérifiable : l'écriture de la règle dans un langage formel (*Rules as Code*), les cas types, la documentation, la conversion des réponses en variables et les références aux textes. Voir [La réglementation opérable](/00_introduction/reglementation-operable).

### Règle (réglementaire)
Partie d'un texte réglementaire identifiable comme une instruction précise du législateur. Exemple : la condition d'âge pour bénéficier de l'APL en location.

### Rules as Code
Écriture des règles juridiques dans un langage formel exécutable par les machines, en même temps que leur rédaction juridique ou à partir des textes en vigueur, avec un lien vers les sources légales.

## S

### Simulateur
Outil qui estime l'éligibilité et le montant d'une ou plusieurs aides publiques à partir de la situation décrite par l'usager. Son résultat est indicatif et n'engage pas l'administration.

## T

### Texte réglementaire
Document juridique officiel (loi, décret, arrêté, circulaire) qui définit les règles d'attribution et de calcul d'une aide publique.

### Traçabilité
Lien entre chaque élément de l'interface (question, résultat), les variables du moteur de règles et l'article de loi appliqué.

## V

### Validation métier
Vérification par un expert du domaine que le modèle applique correctement la réglementation. La validation métier porte sur la conformité au droit, les tests techniques sur le fonctionnement du code.

### Variable
Information nécessaire au calcul d'une aide. On distingue :

- la variable d'entrée, fournie par l'usager ou par une API ;
- la variable de référence, valeur fixée par la réglementation ;
- la variable intermédiaire, calculée à partir d'autres variables ;
- la variable de sortie, résultat du calcul.

## Acronymes courants

- ADR (*Architecture Decision Record*), registre de décision d'architecture
- APL (aide personnalisée au logement), aide au logement calculée selon les ressources et le loyer
- CAF (caisse d'allocations familiales), organisme qui verse de nombreuses aides sociales
- CI/CD (*Continuous Integration / Continuous Deployment*), intégration et déploiement continus
- DSFR (Système de design de l'État)
- E2E (*End-to-End*), tests de bout en bout qui simulent le parcours de l'usager
- ELI (*European Legislation Identifier*), identifiant stable des textes législatifs publiés au Journal officiel
- LEGIARTI, identifiant d'un article de code dans une version donnée, sur Légifrance
- RaC (*Rules as Code*)
- RSA (revenu de solidarité active), revenu minimum
- UX (*User Experience*), expérience utilisateur

## Ressources complémentaires

- [OpenFisca](https://openfisca.org/), moteur de règles pour la fiscalité et les prestations sociales
- [Publicodes](https://publi.codes/), langage de règles et son moteur JavaScript
- [Légifrance](https://www.legifrance.gouv.fr/), service public de diffusion du droit
- [Service-public.fr](https://www.service-public.fr/), information officielle sur les droits et les démarches
- [Guide des algorithmes publics](https://etalab.github.io/algorithmes-publics/guide.html), guide d'Etalab pour les administrations
- [Cracking the Code](https://oecd-opsi.org/publications/cracking-the-code/), rapport de l'OCDE sur le *Rules as Code*

Les ajouts et corrections se proposent sur le [dépôt GitHub](https://github.com/betagouv/aides-simplifiees-docs).

## Voir aussi

- [Historique des simulateurs publics](/99_ressources/historique)
- [Concevoir un simulateur](/02_simulateurs/)
- [La réglementation opérable](/00_introduction/reglementation-operable)
