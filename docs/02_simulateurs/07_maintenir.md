# Maintenir son simulateur

Le droit change, les barèmes sont revalorisés, les situations des usagers évoluent. Un simulateur laissé sans mise à jour affiche des montants calculés sur des règles abrogées.

## Veille réglementaire

La maintenance commence par la veille juridique, à trois niveaux :

- des alertes automatiques sur des mots-clés de Légifrance et des éditeurs juridiques ;
- une revue hebdomadaire des circulaires et instructions techniques par un expert métier ;
- des échanges réguliers avec les administrations qui gèrent les aides, pour anticiper les réformes.

## Cycle de mise à jour

Chaque évolution réglementaire suit les mêmes étapes :

- identifier les variables et les formules concernées ;
- modifier d'abord les cas types pour décrire la nouvelle règle ;
- modifier le code du modèle ;
- vérifier que les nouveaux tests passent et que les cas non concernés donnent les mêmes résultats ;
- mettre à jour le journal des modifications et les diagrammes.

## Documentation en retard sur le code

Le code du modèle applique la règle à jour ; les maquettes, schémas et spécifications peuvent rester à une version antérieure. Les experts qui valident une règle sur un document ancien valident alors une autre règle que celle du simulateur.

Le texte en vigueur fait foi. Pour la documentation du modèle, le code du modèle est la référence, et les documents se génèrent depuis lui :

- les diagrammes (graphes de dépendances, arbres de décision) et la documentation d'API se génèrent à partir du code ;
- les schémas d'architecture s'écrivent en texte (C4, Mermaid) et se versionnent avec le code.

Cette pratique est décrite par Cyrille Martraire dans *Living Documentation* (2019). Une documentation statique (Word, PDF, diaporama) se met à jour à la main, à chaque modification du modèle.
