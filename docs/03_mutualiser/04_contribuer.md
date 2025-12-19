# Contribuer à un modèle partagé

La mutualisation des règles est avant tout un défi de gouvernance. Contribuer à des modèles partagés comme `openfisca-france` ou les paquets Publicodes permet de capitaliser sur l'intelligence collective, mais exige de s'insérer dans des processus de validation rigoureux.

## Le cycle de vie d'une contribution

Contrairement au code applicatif classique, une modification de règles impacte potentiellement des milliers de calculs tiers. Le processus de contribution est donc conçu pour garantir la stabilité juridique et technique.

1.  **La qualification (Issue)** : Tout commence par une discussion. S'agit-il d'une correction de bug, d'une mise à jour de barème ou d'une nouvelle interprétation ? Cette phase permet d'aligner la compréhension juridique entre le contributeur et les mainteneurs avant d'écrire la moindre ligne de code.
2.  **L'implémentation et la preuve (PR)** : Le code ne suffit pas. Une contribution doit être accompagnée de sa "preuve" : référence au texte officiel (Légifrance, BOFIP) et, surtout, cas de tests validant le comportement attendu.
3.  **La double validation (Review)** : La revue de code s'opère à deux niveaux. Une revue technique vérifie la qualité du code et l'absence de régressions. Une revue métier, effectuée par un expert du domaine, valide la conformité de la modélisation avec l'intention du législateur.
4.  **L'intégration (Merge & Release)** : Une fois validée, la modification est intégrée et publiée dans une nouvelle version du paquet, rendant la mise à jour disponible pour tous les simulateurs consommateurs.

## Modèles de gouvernance

L'écosystème présente deux modèles de gouvernance distincts :

**Le modèle centralisé (`openfisca-france`)** : Ce dépôt unique concentre l'essentiel des règles socio-fiscales nationales. La gouvernance y est communautaire mais stricte, nécessaire pour maintenir la cohérence d'un graphe de dépendances complexe où une modification sur le SMIC peut impacter des dizaines d'aides.

**Le modèle fédéré (Publicodes)** : L'approche est ici plus décentralisée. Des paquets thématiques (`modele-social`, `nosgestesclimat`, `mesaidesreno`) sont maintenus par des équipes autonomes. Cette souplesse favorise l'innovation rapide sur des verticaux précis, mais demande un effort de coordination pour assurer l'interopérabilité entre les différents domaines.

## Stratégie de contribution : upstream vs fork

Face à un besoin spécifique ou une urgence, la tentation du "fork" (copie divergente) est grande. C'est pourtant une dette technique majeure à long terme.

La stratégie recommandée est de toujours privilégier la contribution **upstream** (au projet principal) pour les corrections et les règles nationales. Le fork ne devrait être réservé qu'à des expérimentations temporaires ou à des spécificités locales irréductibles qui n'ont pas vocation à être généralisées. En cas de divergence d'interprétation juridique, le registre des interprétations permet de documenter le désaccord sans nécessairement scinder le code.
