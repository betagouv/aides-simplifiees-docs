# La réglementation opérable

La **réglementation opérable** désigne la transformation de la législation en artefacts numériques lisibles par les humains, exécutables par les machines, et gouvernables collectivement.

Le terme international **Rules as Code** (RaC) désigne un sous-ensemble de ce champ : l'encodage des règles juridiques dans un langage formel. C'est une brique essentielle, mais ce n'est pas le tout. Un simulateur fonctionnel repose sur bien plus que son moteur de calcul : il faut des jeux de tests validés par des experts métier, une couche de traduction entre le formulaire usager et les variables techniques, une documentation qui survive aux rotations d'équipe, et un lien traçable vers le texte de loi d'origine.

## Le problème

Les dispositifs d'aide se multiplient, se croisent, parfois se contredisent. Les mêmes notions (revenu fiscal de référence, composition du foyer, résidence) sont redéfinies des dizaines de fois, dans des textes épars, sans mémoire commune. Résultat : des règles trop complexes pour les usagers, trop mouvantes pour les agents, trop coûteuses à maintenir pour les équipes techniques.

Une part significative des personnes éligibles à une aide publique ne la perçoivent pas, non par choix, mais faute d'information. Méconnaissance des critères, vocabulaire opaque, multiplicité des guichets, peur de l'erreur : les obstacles sont nombreux, et le non-recours massif.

## Ce que permet la modélisation

**Rendre les règles lisibles.** Un modèle explicite peut être lu par un juriste, vérifié par un développeur, et expliqué à un usager. La règle sort de la boîte noire des SI historiques.

**Mutualiser les briques.** Plutôt que chaque équipe redéfinisse "revenu fiscal" ou "âge de l'enfant", on construit un socle partagé de concepts réutilisables. Les nouveaux simulateurs héritent du travail passé.

**Tracer les décisions.** Quand un citoyen conteste un résultat, on peut remonter du montant affiché jusqu'à l'article de loi. Chaque calcul devient auditable, chaque interprétation documentée.

**Réduire le coût de maintenance.** Une modification de décret se propage à tous les usages si le modèle est partagé. On transforme un coût récurrent en investissement collectif.

## Au-delà de l'encodage

Encoder la loi est nécessaire, mais chaque couche du système introduit ses propres zones d'ombre. Un simulateur "transparent" (code ouvert, règles lisibles) peut rester opaque si personne ne documente la couche de traduction entre les questions posées à l'usager et les variables du moteur de calcul.

C'est pourquoi la réglementation opérable, au delà du code, implique une écologie de composants interdépendants, parmi lesquels :

- **Moteurs de calcul** : les langages qui encodent la loi (Publicodes, OpenFisca, Catala)
- **Jeux de tests partagés** : des cas types validés par les experts métier, qui servent à la fois de validation technique et de spécification lisible
- **Documentation vivante** : des artefacts (guides, schémas, registres de décisions) qui maintiennent le lien entre le code et son contexte
- **Balisage des textes sources** : des standards (Akoma Ntoso, ELI) qui permettent la traçabilité automatisée entre le code et l'article de loi

## Tensions inhérentes

Formaliser le droit impose des arbitrages :
* **Lisibilité contre exhaustivité** : une règle simplifiée est plus compréhensible, mais peut omettre des cas limites.
* **Réutilisabilité contre spécificité** : un modèle générique facilite la mutualisation, mais peut mal s'adapter aux particularismes locaux.
* **Innovation contre conformité** : expérimenter de nouveaux services autour de la réglementation, objet rigide par excellence, est particulièrement délicat.

Chaque choix de modélisation : regrouper deux situations en un seul cas, arrondir un seuil, simplifier une condition : est un arbitrage d'interprétation qui mérite d'être documenté et contestable.

## Questions de gouvernance

Formaliser le droit, c'est aussi le rendre manipulable. Cela soulève des questions concrètes. Qui valide la version "de référence" d'une règle ? Qui maintient les modèles dans le temps ? Comment signaler les zones d'incertitude ou d'interprétation ? Comment garantir qu'un calcul n'introduise pas de biais ?

Ces questions n'ont pas de réponse unique. Elles appellent une gouvernance collective, impliquant juristes, développeurs, métiers et usagers.

## Les moteurs de règles

Plusieurs langages permettent aujourd'hui d'encoder la législation :

- **[Publicodes](https://publi.codes)** : langage déclaratif français, lisible comme du pseudo-code, conçu pour la co-construction entre développeurs et experts métier.
- **[OpenFisca](https://openfisca.org)** : moteur de microsimulation en Python, orienté système socio-fiscal complet.
- **[Catala](https://catala-lang.org)** : langage de programmation littéraire (INRIA), où code et loi sont entremêlés dans le même fichier, avec preuve formelle de couverture.

## Un mouvement européen

Le Rules as Code n'est pas une initiative isolée. Le rapport OCDE *Cracking the Code* (2020) a posé le cadre international. Depuis, un réseau européen s'est structuré :

- **Pays-Bas** : le portail [regels.overheid.nl](https://regels.overheid.nl) référence les règles formalisées avec des métadonnées standardisées. Le TNO développe FLINT, un langage qui modélise les concepts juridiques (droits, devoirs, pouvoirs).
- **RaC Europe** : série de conférences annuelles (Amsterdam 2024, Paris 2025, La Haye 2026) réunissant praticiens et chercheurs.
- **GovTech4All** : programme européen explorant l'interopérabilité transfrontalière des catalogues de règles.

## Pour aller plus loin

- [Guide des simulateurs](/02_simulateurs/) : Passer à la pratique
