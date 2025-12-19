# Guide aides Simplifiées

Documentation méthodologique pour la modélisation et la simulation des aides publiques en France. Ce guide accompagne les équipes qui conçoivent des simulateurs d'éligibilité, qu'il s'agisse de juristes, designers, développeurs ou chefs de projet.

## Déploiement

Le site est déployé automatiquement sur GitHub Pages à chaque push sur la branche `main`. Le workflow GitHub Actions installe les dépendances avec pnpm, génère le build VitePress et publie le résultat.

Pour activer le déploiement sur un nouveau repository, rendez-vous dans les paramètres GitHub, section "Pages", et sélectionnez "GitHub Actions" comme source.

Le site sera ensuite accessible à l'adresse `https://[votre-username].github.io/aides-simplifiees-docs/`.

## Développement local

Prérequis : Node.js 18+ et pnpm.

```bash
pnpm install          # Installation des dépendances
pnpm run dev     # Serveur de développement (localhost:5173)
pnpm run build   # Build de production
pnpm run preview # Prévisualisation du build
```

## Structure

La documentation source se trouve dans le dossier `docs/`. La configuration VitePress est dans `docs/.vitepress/config.mts`. Le workflow de déploiement est défini dans `.github/workflows/deploy.yml`.

## Contribution

Modifiez les fichiers Markdown dans `docs/`, testez localement avec `pnpm run dev`, puis poussez vos changements sur `main`. Le déploiement se fait automatiquement.

## Liens

- [Documentation VitePress](https://vitepress.dev/)
- [GitHub Pages](https://pages.github.com/)
