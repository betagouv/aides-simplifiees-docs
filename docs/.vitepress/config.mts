import { defineConfig } from 'vitepress'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';

/**
 * @see https://vitepress.dev/reference/site-config
 */

export default defineConfig({
  title: "Guide aides simplifiées",
  description: "Documentation technique et méthodologique pour la modélisation et la simulation des aides publiques",
  lang: 'fr-FR',
  base: '/',
  markdown: {
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },
    darkModeSwitchLabel: 'Apparence',
    darkModeSwitchTitle: 'Passer au mode sombre',
    lightModeSwitchTitle: 'Passer au mode clair',
    outline: {
      label: 'Sur cette page'
    },
    returnToTopLabel: 'Retour en haut',
    sidebarMenuLabel: 'Menu',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Simulateurs', link: '/02_simulateurs/' },
      { text: 'Mutualiser', link: '/03_mutualiser/' },
      { text: 'Horizons', link: '/04_horizons/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Aides simplifiées', link: '/00_introduction/aides-simplifiees' },
          { text: 'Rules as Code', link: '/00_introduction/rules-as-code' },
          { text: 'Communauté', link: '/00_introduction/communaute' }
        ]
      },
      {
        text: 'Guide des simulateurs',
        collapsed: false,
        items: [
          { text: 'Vue d\'ensemble', link: '/02_simulateurs/' },
          { text: 'Fondamentaux', link: '/02_simulateurs/01_fondamentaux' },
          { text: 'Modéliser une aide', link: '/02_simulateurs/02_modeliser-une-aide' },
          { text: 'Simulateur multi-aide', link: '/02_simulateurs/03_simulateur-multi-aide' },
          { text: 'Passer en code', link: '/02_simulateurs/05_passer-en-code' },
          { text: 'Tester et ajuster', link: '/02_simulateurs/06_tester-ajuster' },
          { text: 'Maintenir', link: '/02_simulateurs/07_maintenir' }
        ]
      },
      {
        text: 'Mutualiser',
        collapsed: false,
        items: [
          { text: 'Vue d\'ensemble', link: '/03_mutualiser/' },
          { text: 'Panorama des projets', link: '/03_mutualiser/01_panorama' },
          { text: 'Outils réutilisables', link: '/03_mutualiser/02_outils' },
          { text: 'Patterns architecturaux', link: '/03_mutualiser/03_patterns' },
          { text: 'Contribuer', link: '/03_mutualiser/04_contribuer' },
          { text: 'Ressources visuelles', link: '/03_mutualiser/05_visuels' }
        ]
      },
      {
        text: 'Horizons',
        collapsed: false,
        items: [
          { text: 'Vue d\'ensemble', link: '/04_horizons/' },
          { text: 'Écosystème interopérable', link: '/04_horizons/01_ecosysteme-interoperable' },
          { text: 'Interfaces & Contribution', link: '/04_horizons/02_interfaces-contribution' },
          { text: 'Nouveaux usages', link: '/04_horizons/03_nouveaux-usages' },
          { text: 'Agenda d\'exploration', link: '/04_horizons/04_agenda-exploration' }
        ]
      },
      {
        text: 'Ressources',
        items: [
          { text: 'Glossaire', link: '/99_ressources/glossaire' },
          { text: 'Historique', link: '/99_ressources/historique' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/betagouv/aides-simplifiees-docs' }
    ],

    footer: {
      message: 'Documentation sous licence ouverte',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Rechercher',
            buttonAriaLabel: 'Rechercher dans la documentation'
          },
          modal: {
            noResultsText: 'Aucun résultat pour',
            resetButtonTitle: 'Réinitialiser la recherche',
            footer: {
              selectText: 'pour sélectionner',
              navigateText: 'pour naviguer',
              closeText: 'pour fermer'
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/betagouv/aides-simplifiees-docs/edit/main/docs/:path',
      text: 'Modifier cette page sur GitHub'
    }
  },
  vite: {
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid', '@gouvfr/dsfr'],
    },
    assetsInclude: ['**/*.woff2', '**/*.woff'],
  },
})
