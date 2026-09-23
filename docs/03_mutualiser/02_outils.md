# Outils réutilisables

Cette page recense les outils open source disponibles pour construire un simulateur : moteurs ouverts, modèles de règles publiés, outils de formulaire, données et standards.

## Moteurs ouverts

Le moteur détermine l'architecture technique et l'organisation des contributions au modèle. Les administrations emploient aussi des moteurs internes à leurs systèmes d'information et des plateformes commerciales, décrits dans [La réglementation opérable](/00_introduction/reglementation-operable#moteurs-ouverts).

### Publicodes

Langage de règles en YAML, exécuté par un moteur JavaScript, qui produit l'explication de chaque calcul.

- Usage : simulateurs grand public, calcul dans le navigateur, documentation interactive des règles.
- Atouts : règles nommées en français, documentation générée, écosystème JavaScript et React.
- Limite : une situation Publicodes décrit une personne ou un foyer ; plusieurs entités liées se modélisent à la main.
- Paquets : `publicodes` (moteur), `@publicodes/react-ui` (documentation), `@publicodes/rest-api` (calcul sur serveur).

### OpenFisca

Moteur de microsimulation en Python, employé pour le système socio-fiscal français par LexImpact, aides-jeunes et mesdroitssociaux.gouv.fr. Sur le socio-fiscal, les aides dépendent les unes des autres (SMIC, bases ressources, définitions de revenus) : un modèle commun les calcule ensemble.

- Usage : interactions entre individu, famille, foyer fiscal et ménage, calculs sur des périodes glissantes, simulation de réformes.
- Atouts : modèles de grande taille, API REST, communauté internationale.
- Limite : un environnement Python est nécessaire, en pratique un serveur qui expose une API.

### Catala

Langage de programmation littéraire développé par Inria : le texte de loi et le code qui l'applique sont écrits dans le même fichier, et les tests sont vérifiés à la compilation. Catala se compile vers OCaml, Python ou JavaScript.

- Usage : calculs qui demandent une sémantique formelle et un lien article par article avec le texte.
- Déploiements : Prest'Agri (beta.gouv.fr) calcule avec des règles Catala compilées derrière une API ; la DGFiP expérimente Catala pour l'impôt sur le revenu.

## Modèles de règles publiés sur npm

Des équipes publient leurs modèles de règles en paquets réutilisables :

- `modele-social` (Urssaf) : cotisations sociales et fiscalité des revenus.
- `@socialgouv/modeles-social` : règles des simulateurs du code du travail numérique (préavis, indemnités).
- `mesaidesreno` : éligibilité et calculs pour MaPrimeRénov' et les certificats d'économies d'énergie.
- `@incubateur-ademe/nosgestesclimat` : empreinte carbone individuelle.
- `@betagouv/aides-velo` : aides nationales et locales à l'achat d'un vélo.
- `@shallowred/publicodes-entreprise-innovation` ([dépôt](https://github.com/betagouv/publicodes-entreprise-innovation)) : aides fiscales à l'innovation des entreprises (CIR, CII, JEI), utilisé par le simulateur affiché sur entreprendre.service-public.fr.

## Outils de formulaire

- `@publicodes/forms` convertit des règles Publicodes en formulaire interactif.

## Données et API

- API Particulier et API Entreprise : données administratives certifiées, pour pré-remplir la saisie.
- Base Adresse Nationale : normalisation des adresses, nécessaire aux aides qui dépendent du lieu.
- Référentiels territoriaux (EPCI, zonages) : nécessaires aux aides locales.

## Standards de description des règles et des textes

- ELI (*European Legislation Identifier*) donne une URI stable à un texte publié au Journal officiel. En France, les URI ELI se résolvent sur Légifrance et les métadonnées ELI sont partielles.
- LEGIARTI, l'identifiant de Légifrance, désigne un article de code dans une version donnée. C'est lui qui relie une variable à l'article qu'elle applique.
- FLINT et Calculemus, développés par le TNO aux Pays-Bas, décomposent une norme en actes, faits et devoirs, reliés aux passages du texte source.
- LegalRuleML, standard OASIS, décrit formellement des règles juridiques ; aucun projet en production ne l'emploie.

Les registres de règles, comme [regels.overheid.nl](https://regels.overheid.nl) et [regles.data.gouv.fr](https://github.com/datagouv/regles.data.gouv.fr), décrivent chaque modèle par des métadonnées (base légale, moteur, version, cas types) alignées sur le vocabulaire européen CPSV-AP. La logique reste dans le code de chaque modèle.
