# La réglementation opérable

La réglementation opérable désigne la transformation de la législation en artefacts numériques lisibles par les humains, exécutables par les machines et maintenus collectivement.

Le terme international *Rules as Code* désigne l'écriture des règles juridiques dans un langage formel. Un simulateur demande aussi des cas types validés par des experts métier, une conversion documentée des réponses de l'usager en variables du moteur, une documentation à jour et un lien vers le texte de loi.

## Règles dispersées et non-recours

Les dispositifs d'aide se multiplient, se croisent, parfois se contredisent. Les mêmes notions (revenu fiscal de référence, composition du foyer, résidence) sont définies différemment d'un texte à l'autre. Les règles sont difficiles à comprendre pour les usagers, à suivre pour les agents et à maintenir pour les équipes techniques.

Une part des personnes éligibles à une aide ne la demandent pas. Parmi les causes étudiées figurent la méconnaissance des critères, le vocabulaire administratif, la multiplicité des guichets et la peur de l'erreur.

## Apports d'un modèle de règles

- Un modèle explicite peut être relu par un juriste, vérifié par un développeur et expliqué à un usager.
- Les équipes partagent les définitions des notions communes, comme le revenu fiscal de référence ou l'âge de l'enfant, et un nouveau simulateur réutilise celles qui existent.
- Quand chaque variable cite l'article qu'elle applique, on peut remonter d'un montant affiché aux articles utilisés.
- Une modification de décret, reportée une fois dans un modèle partagé, profite à tous les simulateurs qui utilisent ce modèle.

## Tests, documentation et références aux textes

Un simulateur au code ouvert se comprend avec la documentation de la conversion des réponses de l'usager en variables du moteur. La réglementation opérable comprend donc plusieurs composants :

- un moteur de règles, qui exécute les règles écrites dans un langage formel ;
- des cas types validés par les experts métier, lisibles par eux et exécutés comme tests ;
- une documentation (guides, schémas, registres de décisions) tenue à jour avec le code ;
- des identifiants stables des textes : ELI pour un texte publié au Journal officiel, LEGIARTI pour un article de code dans une version donnée.

## Arbitrages de modélisation

- Une règle simplifiée est plus facile à comprendre, et peut omettre des cas limites.
- Un modèle générique se partage plus facilement, et s'adapte moins bien aux règles locales.
- Un nouveau service construit autour d'une règle doit rester conforme au texte en vigueur.

Chaque choix de modélisation (regrouper deux situations en un seul cas, arrondir un seuil, simplifier une condition) est une interprétation, à documenter pour qu'elle puisse être discutée.

## Questions de gouvernance

Formaliser le droit le rend manipulable. Qui valide la version de référence d'une règle ? Qui maintient les modèles dans le temps ? Comment signaler les zones d'incertitude ou d'interprétation ? Comment détecter un biais dans un calcul ? Ces questions demandent une gouvernance qui associe juristes, développeurs, métiers et usagers.

## Moteurs ouverts

Les administrations calculent les droits avec plusieurs sortes de moteurs de règles : les [liquidateurs](/99_ressources/glossaire#liquidateur) de leurs systèmes d'information, des plateformes commerciales, et des moteurs ouverts, publiés en open source. Cette documentation traite des moteurs ouverts employés en France :

- [Publicodes](https://publi.codes) : langage de règles en YAML, aux noms de règles en français, exécuté par le moteur JavaScript `publicodes`, qui génère une documentation interactive des calculs.
- [OpenFisca](https://openfisca.org) : moteur de microsimulation en Python, dont les règles s'écrivent en Python ; il modélise le système socio-fiscal avec plusieurs entités (individu, famille, foyer fiscal, ménage) et des périodes.
- [Catala](https://catala-lang.org) : langage de programmation littéraire développé par Inria, où chaque bloc de code suit l'article de loi qu'il applique ; il se compile vers OCaml, Python ou JavaScript.

## Initiatives européennes

Le rapport de l'OCDE *Cracking the Code* (2020) a posé le cadre international. Depuis :

- aux Pays-Bas, le portail [regels.overheid.nl](https://regels.overheid.nl) référence des règles formalisées avec des métadonnées standardisées, et le TNO développe FLINT, un langage qui décrit une norme en actes, faits et devoirs ;
- la conférence annuelle Rules as Code Europe réunit praticiens et chercheurs (Paris 2025, La Haye 2026) ;
- GovTech4All, programme de la Commission européenne, consacre son pilote 8 au *Rules as Code*, avec la France et les Pays-Bas ;
- en France, data.gouv.fr construit [regles.data.gouv.fr](https://github.com/datagouv/regles.data.gouv.fr), un registre des règles de calcul des administrations.

## Pages suivantes

- [Concevoir un simulateur](/02_simulateurs/)
