# Comprendre le Rules as Code

Le **Rules as Code** consiste à représenter les règles juridiques sous une forme formelle et exécutable, tout en préservant leur lisibilité. L'objectif : créer un "jumeau numérique" de la réglementation, sur lequel on peut simuler des situations, vérifier la cohérence des politiques, et produire des services.

Il s'agit de rendre la réglementaiton opérable : lisible par les humains, exécutable par les machines, gouvernable collectivement.

## Le problème

Les dispositifs d'aide se multiplient, se croisent, parfois se contredisent. Les mêmes notions (revenu fiscal de référence, composition du foyer, résidence) sont redéfinies des dizaines de fois, dans des textes épars, sans mémoire commune. Résultat : des règles trop complexes pour les usagers, trop mouvantes pour les agents, trop coûteuses à maintenir pour les équipes techniques.

Une part significative des personnes éligibles à une aide publique ne la perçoivent pas, non par choix, mais faute d'information. Méconnaissance des critères, vocabulaire opaque, multiplicité des guichets, peur de l'erreur : les obstacles sont nombreux, et le non-recours massif.

## Ce que permet la modélisation

**Rendre les règles lisibles.** Un modèle explicite peut être lu par un juriste, vérifié par un développeur, et expliqué à un usager. La règle sort de la boîte noire des SI historiques.

**Mutualiser les briques.** Plutôt que chaque équipe redéfinisse "revenu fiscal" ou "âge de l'enfant", on construit un socle partagé de concepts réutilisables. Les nouveaux simulateurs héritent du travail passé.

**Tracer les décisions.** Quand un citoyen conteste un résultat, on peut remonter du montant affiché jusqu'à l'article de loi. Chaque calcul devient auditable, chaque interprétation documentée.

**Réduire le coût de maintenance.** Une modification de décret se propage à tous les usages si le modèle est partagé. On transforme un coût récurrent en investissement collectif.

## Tensions inhérentes

Formaliser le droit impose des arbitrages :
* **Lisibilité contre exhaustivité** : une règle simplifiée est plus compréhensible, mais peut omettre des cas limites.
* **Réutilisabilité contre spécificité** : un modèle générique facilite la mutualisation, mais peut mal s'adapter aux particularismes locaux.
* **Innovation contre conformité** : expérimenter de nouveaux services rendus aux usagers, de manière agile, autour de la réglementation, objet rigide par excellence, peut-être particulièrement délicat.

## Questions de gouvernance

Formaliser le droit, c'est aussi le rendre manipulable. Cela soulève des questions concrètes. Qui valide la version "de référence" d'une règle ? Qui maintient les modèles dans le temps ? Comment signaler les zones d'incertitude ou d'interprétation ? Comment garantir qu'un calcul n'introduise pas de biais ?

Ces questions n'ont pas de réponse unique. Elles appellent une gouvernance collective, impliquant juristes, développeurs, métiers et usagers.

## Pour aller plus loin

- [Guide des simulateurs](/02_simulateurs/) : Passer à la pratique
- [Horizons](/04_horizons/) : Perspectives d'évolution
