# Guide de contribution

Cette documentation est un bien commun. Elle s'enrichit de vos retours d'expérience, corrections et ressources.

## Avant de contribuer

Familiarisez-vous avec le contenu existant en parcourant la documentation. Consultez le [Panorama](/docs/03_mutualiser/01_panorama.md) si vous voulez situer votre projet dans l'écosystème.

## Types de contributions

### Retours d'expérience

Vous avez résolu un problème dans votre projet ? Partagez comment. Par exemple : "voici comment on a organisé la validation métier", "comment on maintient notre modèle de règles face aux évolutions réglementaires".

### Corrections et clarifications

Une formulation est imprécise ? Un exemple pourrait être plus clair ? Un lien est cassé ? Signalez-le.

### Ajouts de ressources

Un projet devrait figurer dans le panorama ? Une référence externe est pertinente ? Proposez-la.

### Aménagements de structure

Il manque une section ? Un sujet mériterait d'être approfondi ? Suggérez une réorganisation.

## Comment contribuer

### Par issue GitHub

Pour proposer une amélioration ou signaler un problème sans modifier directement le code :

1. Allez sur [Issues](https://github.com/betagouv/aides-simplifiees-docs/issues)
2. Cliquez sur "New Issue"
3. Décrivez clairement votre suggestion ou le problème

Les issues sont la meilleure approche si vous n'êtes pas à l'aise avec Git, ou si vous voulez d'abord en discuter.

### Par Pull Request

Pour proposer une modification directe :

1. **Créez un fork** du repository
2. **Créez une branche** : `git checkout -b mon-amelioration`
3. **Modifiez les fichiers** Markdown dans le dossier `docs/`
4. **Testez localement** :
   ```bash
   pnpm install
   pnpm run dev
   ```
5. **Commitez et poussez** :
   ```bash
   git add .
   git commit -m "Ajouter/corriger/clarifier: description courte"
   git push origin mon-amelioration
   ```
6. **Ouvrez une Pull Request** sur le repository principal

Décrivez clairement ce que vous changez et pourquoi dans la description de la PR.

## Chantiers ouverts

Vous cherchez une idée pour contribuer ? Ces chantiers sont en cours :

- Enrichir le [Panorama](/docs/03_mutualiser/01_panorama.md) avec les projets manquants
- Documenter les patterns de validation métier qui fonctionnent
- Partager des cas types réutilisables entre projets similaires
- Proposer des points réguliers entre équipes

## Questions ?

Vous ne savez pas par où commencer ? N'hésitez pas à ouvrir une [discussion ou issue](https://github.com/betagouv/aides-simplifiees-docs/issues) pour demander de l'aide.

## Licence

En contribuant, vous acceptez que vos apports soient sous licence ouverte, en accord avec la license du projet.
