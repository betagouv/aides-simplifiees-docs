# Maintenir son simulateur

La maintenance d'un simulateur est un défi perpétuel contre l'obsolescence. Le droit change, les barèmes évoluent, les situations de vie se transforment. Un simulateur non maintenu devient rapidement une source de désinformation publique.

## La veille réglementaire

La maintenance commence bien avant le code, par une veille juridique active. Elle peut être structurée à plusieurs échelles :
*   **Automatisée** : Alertes sur les mots-clés Légifrance et les API des éditeurs juridiques.
*   **Humaine** : Revue hebdomadaire des circulaires et instructions techniques par un expert métier.
*   **Institutionnelle** : Points de contact réguliers avec les administrations porteuses des aides pour anticiper les réformes.

## Le cycle de mise à jour

Chaque évolution réglementaire doit suivre un protocole strict pour éviter les régressions :
1.  **Analyse d'impact** : Identifier quelles variables et quelles formules sont touchées.
2.  **Mise à jour des tests** : Modifier d'abord les cas types pour refléter la nouvelle règle (TDD).
3.  **Implémentation** : Modifier le code du modèle.
4.  **Validation** : Vérifier que les nouveaux tests passent et que les anciens cas non concernés restent stables.
5.  **Documentation** : Mettre à jour le changelog et les diagrammes explicatifs.

## La dette de représentation

Au fil des évolutions, un risque insidieux guette les projets : la **dette de représentation**. C'est le décalage progressif entre la réalité du code (qui exécute la règle à jour) et sa documentation (maquettes, schémas, spécifications) qui n'a pas été mise à jour.

Ce décalage est dangereux car il fausse les décisions : les experts valident des règles sur des documents obsolètes, croyant valider le système réel. Pour la combattre, une stratégie inspirante est celle de la **"Living Documentation"** :

1.  **Single Source of Truth** : Le code du modèle est la seule source de vérité.
2.  **Evergreen Documentation** : Toute documentation externe gagne à être une projection de ce modèle, générée automatiquement (diagrammes de graphes, arbres de décision, documentation API).
3.  **Architecture as Code** : Les schémas d'architecture eux-mêmes peuvent être décrits textuellement (C4 Model, Mermaid) et versionnés avec le code, pour évoluer au même rythme.

Toute documentation statique (Word, PDF, Slide) court le risque de devenir une dette technique si elle n'est pas régulièrement synchronisée.
