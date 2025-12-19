# Guide des simulateurs

La conception d'un simulateur d'aides publiques est un exercice de traduction : il s'agit de transposer la complexité du droit administratif en une interface numérique intelligible et fiable. Ce processus ne se limite pas à l'écriture de code ; il exige une méthode rigoureuse pour aligner les contraintes juridiques, les besoins des usagers et les impératifs techniques.

Ce guide décompose la méthode de production en six étapes séquentielles, de l'analyse du texte réglementaire jusqu'à la maintenance en production :

1.  **[Fondamentaux](./01_fondamentaux.md)** : Les principes directeurs (lisibilité, vérifiabilité) et le cadre éthique (données personnelles, accessibilité).
2.  **[Modéliser une aide](./02_modeliser-une-aide.md)** : La méthode pour extraire la logique d'un texte de loi et la formaliser.
3.  **[Simulateur multi-aide](./03_simulateur-multi-aide.md)** : Les défis spécifiques à l'agrégation de dispositifs hétérogènes.
4.  **[Passer en code](./05_passer-en-code.md)** : L'implémentation technique avec les moteurs de règles (Publicodes, OpenFisca).
5.  **[Tester et ajuster](./06_tester-ajuster.md)** : Les stratégies de validation juridique et fonctionnelle.
6.  **[Maintenir](./07_maintenir.md)** : La gestion du cycle de vie et de la dette de représentation.

Cette section se concentre sur la **méthode de conception**. Pour une vue d'ensemble des outils disponibles et des projets existants, référez-vous à la section [Mutualiser](/03_mutualiser/).
