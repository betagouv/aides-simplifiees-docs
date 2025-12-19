// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import matomo from '@datagouv/vitepress-plugin-matomo'

// Import des variables DSFR (polices + couleurs uniquement, sans composants)
import './dsfr-variables.css'

// Import de nos personnalisations VitePress avec les couleurs DSFR
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx: any) => {
    matomo({
      router: ctx.router,
      siteID: 199,
      trackerUrl: "https://stats.beta.gouv.fr/"
    })
  }
}
