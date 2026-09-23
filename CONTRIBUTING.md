# Guide de contribution

Cette documentation s'enrichit des retours d'expérience, des corrections et des ressources proposées par les équipes qui construisent des services autour des aides publiques.

## Avant de contribuer

Parcourez la documentation. Le [panorama des projets](docs/03_mutualiser/01_panorama.md) situe les simulateurs existants.

## Types de contributions

- Un retour d'expérience : comment une équipe a organisé la validation métier, ou suit les évolutions réglementaires de son modèle.
- Une correction ou une clarification : formulation imprécise, exemple à améliorer, lien cassé.
- Un ajout de ressource : un projet pour le panorama, une référence.
- Une proposition de structure : une section manquante, un sujet à développer, une réorganisation.

## Par une issue GitHub

Pour proposer une amélioration ou signaler un problème sans modifier les fichiers, ouvrez une [issue](https://github.com/betagouv/aides-simplifiees-docs/issues) qui décrit votre suggestion ou le problème. Une issue suffit pour contribuer sans utiliser Git, ou pour discuter d'une idée avant de l'écrire.

## Par une pull request

1. Créez un fork du dépôt.
2. Créez une branche : `git checkout -b mon-amelioration`.
3. Modifiez les fichiers Markdown du dossier `docs/`.
4. Vérifiez le rendu en local :
   ```bash
   pnpm install
   pnpm run dev
   ```
5. Commitez et poussez :
   ```bash
   git add docs/
   git commit -m "docs: description courte"
   git push origin mon-amelioration
   ```
6. Ouvrez une pull request sur le dépôt principal, en décrivant ce que vous changez et pourquoi.

## Questions

Pour savoir par où commencer, ouvrez une [issue](https://github.com/betagouv/aides-simplifiees-docs/issues).

## Licence

Vos contributions sont publiées sous la licence ouverte du projet.
