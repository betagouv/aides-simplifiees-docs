# Vers un écosystème interopérable

Si les simulateurs actuels ont prouvé leur utilité, leur mode de production artisanal atteint ses limites. L'enjeu des prochaines années est de passer d'une collection d'outils isolés à une véritable **Infrastructure Numérique Publique** (DPI) autour de la règle. Cette transition permettrait de rationaliser l'effort public et d'offrir des services de meilleure qualité aux usagers.

## Les limites des approches actuelles : le coût de la fragmentation

Aujourd'hui, chaque simulateur tend à constituer un silo technologique. Cette fragmentation a un coût élevé :
*   **Redondance technique** : Outils de modélisation, interfaces de formulaires et connecteurs de données sont recréés à chaque projet.
*   **Incohérence sémantique** : Les mêmes concepts (revenu fiscal, composition familiale) sont re-modélisés différemment par chaque administration, créant des frictions pour l'usager ("Pourquoi la CAF et la Mairie ne calculent-elles pas mes revenus de la même façon ?").
*   **Fracture territoriale** : Seuls les grands opérateurs (État, Métropoles) ont les moyens de développer ces outils. Les petites collectivités restent démunies pour numériser leurs aides locales.

## Vers une infrastructure de règles partagées

Nous pourrions renforcer l'ambition de gérer les règles comme des **biens communs numériques**, distincts des applications qui les consomment. Dans cette vision, un "catalogue de règles" pourrait référencer les modélisations valides, exposées sous forme d'API (Rules as a Service), prêtes à être intégrées dans n'importe quel parcours usager.

## Des briques techniques standardisées

La clé de cette mutualisation réside dans la standardisation de briques interopérables. Toute la chaîne de production gagne à être partagée.

### 1. Le standard de définition des règles
L'adoption de standards ouverts pour l'écriture des règles est le prérequis. Au-delà de Publicodes ou OpenFisca, des initiatives de recherche poussent plus loin la formalisation :
*   **FLINT (Pays-Bas)** : Un langage formel développé par TNO qui modélise non seulement le calcul, mais les concepts juridiques eux-mêmes (devoirs, droits, pouvoirs), assurant une interprétation normative rigoureuse.
*   **L4 (Singapour)** : Un langage "Spreadsheet-based" qui vise à traiter la législation comme une spécification formelle, permettant la vérification mathématique de la cohérence des lois.
*   **Catala (France)** : Un langage de programmation littéraire qui garantit, par preuve formelle, que le code couvre tous les cas prévus par la loi.

Ces standards partagent un principe clé : l'**isomorphisme**. La structure du code doit refléter la structure du texte de loi (article par article), garantissant la maintenabilité et l'auditabilité.

### 2. La gestion partagée des cas de tests

Pour garantir qu'une implémentation locale est conforme à la loi nationale, il faut des jeux de tests standardisés.
- **Formats ouverts** : Un standard (JSON, YAML) pour décrire les scénarios de test permettrait à chaque équipe de réutiliser les jeux de tests d'autres simulateurs.
- **Bibliothèque de fixtures** : Plutôt que chaque administration constitue son propre jeu de données, nous pourrions mutualiser une **bibliothèque nationale de cas types** (familles monoparentales, étudiants boursiers, retraités modestes). Ces "Compliance Suites" permettraient de certifier instantanément tout nouveau moteur de calcul.

### 3. Les représentations visuelles communes
Le code est souvent opaque pour les décideurs. L'interopérabilité doit aussi porter sur la **visualisation**. Des standards comme **DMN (Decision Model and Notation)** offrent un pont sémantique : ils permettent de représenter la logique sous forme de tables de décision lisibles par les analystes métier, tout en restant exécutables par les machines.

## Le dilemme stratégique : produit vs infrastructure

Deux stratégies de construction sont souvent évoquées au sujet de ce que pourrait faire l'État en matière de Rules as Code chacune avec ses contraintes politiques et opérationnelles :

### 1. La stratégie "produit" (SaaS)
Elle consiste à construire un service intégré clé-en-main (ex: "Mon Simulateur Facile").
*   **Avantage** : Résout un problème utilisateur direct, ce qui facilite le **sponsoring politique** et le financement.
*   **Défi** : Nécessite de tisser une forte **confiance interministérielle** pour que les administrations acceptent de dépendre d'un outil centralisé.

### 2. La stratégie "infrastructure" (briques)
Elle consiste à fournir des composants libres et réutilisables (moteurs, standards, API).
*   **Avantage** : Respecte l'autonomie des acteurs et favorise un écosystème résilient et distribué.
*   **Défi** : Plus difficile à financer car **invisible pour l'usager final** et ne portant pas de promesse politique immédiate.

Plusieurs voies médianes sont possibles pour concilier ces deux approches. On peut par exemple commencer par le produit pour prouver la valeur, puis extraire progressivement l'infrastructure pour permettre à l'écosystème de grandir. C'est le modèle "Government as a Platform" : l'État opère les briques de base (API, Règles) sur lesquelles des services variés (publics ou privés) peuvent fleurir.

::: tip Le parallèle avec le Web
Le Web n'a pas été construit par une plateforme unique. HTML, CSS et HTTP sont des standards ouverts sur lesquels se sont construits les navigateurs, puis les services. C'est cette séquence (standards > outils > services) qui a permis l'interopérabilité mondiale.
:::

### Le service aux collectivités : l'équité territoriale
L'un des cas d'usage les plus prometteurs est le **"Rules as a Service" pour les territoires**. Aujourd'hui, une petite commune n'a pas les moyens de développer un simulateur pour ses aides (cantine, sport). Une infrastructure mutualisée leur permettrait de :

1.  **Hériter** des règles nationales (ne pas recoder le calcul du QF CAF).
2.  **Surcharger** localement ces règles (ex: "Dans ma commune, le seuil est de 1200€").
3.  **Publier** instantanément un simulateur local sans écrire une ligne de code.

Cela démocratiserait l'accès au droit, rendant des milliers d'aides locales visibles et calculables.

## L'inspiration européenne : le Single Digital Gateway

Cette vision s'inscrit dans la dynamique européenne du **Single Digital Gateway (SDG)**, qui impose la numérisation complète des procédures administratives transfrontalières.
*   **Pays-Bas** : Le portail `regels.overheid.nl` centralise les règles formalisées liées explicitement à leurs sources juridiques.
*   **Interopérabilité transfrontalière** : Des initiatives comme le pilote *GovTech4All* explorent la possibilité de faire dialoguer ces catalogues nationaux. L'objectif : permettre à un étudiant français de connaître ses droits en Allemagne, grâce à l'interopérabilité des moteurs de règles.
