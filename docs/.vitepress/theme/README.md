# Thème VitePress avec DSFR

Personnalisation minimaliste du thème VitePress utilisant les polices et couleurs du Système de Design de l'État Français.

## Structure

```
.vitepress/theme/
├── index.ts            # Point d'entrée du thème
├── dsfr-variables.css  # Polices Marianne + variables de couleur DSFR
├── custom.css          # Mapping des variables DSFR vers VitePress
└── README.md
```

## Approche

Cette implémentation importe uniquement :
- Les polices Marianne depuis `@gouvfr/dsfr`
- Les variables de couleur DSFR (valeurs hex)

Aucun composant DSFR n'est importé pour éviter les conflits avec la structure VitePress.

## Couleurs principales

- Bleu France : `#000091` (primaire)
- Rouge Marianne : `#e1000f` (secondaire)
- Échelle de gris complète

Les variables DSFR sont mappées vers les variables VitePress (`--vp-c-brand-1`, `--vp-c-brand-2`, etc.).

## Mode sombre

Les couleurs s'inversent automatiquement en mode sombre via la classe `.dark`, suivant les conventions DSFR.


## Ressources

- [Système de Design de l'État](https://www.systeme-de-design.gouv.fr/)
- [Documentation VitePress](https://vitepress.dev/)
