# Guide de la réglementation opérable

Documentation méthodologique pour modéliser, tester et maintenir les règles de calcul des aides publiques en France. Elle s'adresse aux équipes qui conçoivent des simulateurs : juristes, designers, développeurs, chefs de projet.

Site : [docs.aides.beta.gouv.fr](https://docs.aides.beta.gouv.fr/)

## Développement local

Prérequis : Node.js 18 ou plus récent, et pnpm.

```bash
pnpm install
pnpm run dev
```

Le serveur de développement répond sur `localhost:5173`. `pnpm run build` construit le site, `pnpm run preview` sert la version construite.

## Structure

Les pages sont dans `docs/`, la configuration VitePress dans `docs/.vitepress/config.mts`.

## Déploiement

Chaque push sur `main` déclenche le workflow `.github/workflows/main.yml`, qui construit le site avec VitePress et le publie sur GitHub Pages.

## Contribution

Voir [CONTRIBUTING.md](CONTRIBUTING.md).
