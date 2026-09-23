# Historique des simulateurs d'aides publiques

Cette page retrace les simulateurs de prestations en France, des simulateurs des organismes aux approches *Rules as Code*.

## Années 2000 : simulateurs des organismes

Les organismes publient leurs propres simulateurs en ligne : la CAF pour l'APL, l'Assurance retraite, Pôle emploi pour l'allocation chômage. Ces simulateurs officiels suivent les évolutions réglementaires et sont accessibles depuis un navigateur.

Chaque organisme développe sa propre solution, par caisse ou par prestation. Un usager qui veut estimer plusieurs aides navigue entre plusieurs sites, ressaisit les mêmes informations et peut obtenir des résultats incohérents.

## Années 2010 : portails de l'État et beta.gouv.fr

### Le cadre institutionnel

Le [SGMAP](https://www.modernisation.gouv.fr/presse/creation-du-secretariat-general-pour-la-modernisation-de-laction-publique) (Secrétariat général pour la modernisation de l'action publique) est créé en 2012 pour conduire la dématérialisation. La DINSIC (2014), puis la [DINUM](https://numerique.gouv.fr/numerique-etat/dinum/) (2019), organisent la politique numérique de l'État.

La [loi pour une République numérique](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033202746) (2016) impose l'ouverture des données publiques et la publication des algorithmes utilisés par l'administration. [FranceConnect](https://www.franceconnect.gouv.fr/) (2016) unifie l'authentification aux services publics. En 2017, [mesdroitssociaux.gouv.fr](https://www.mesdroitssociaux.gouv.fr/accueil/) ouvre un portail commun d'accès aux droits sociaux.

### Beta.gouv.fr

L'incubateur [beta.gouv.fr](https://beta.gouv.fr/) (2013) organise des équipes autonomes de trois à cinq personnes, en cycles de six mois, libres de leurs choix techniques et centrées sur l'usager. Plusieurs simulateurs en sont issus :

- [Mes Aides](https://beta.gouv.fr/startups/mes-aides.html) (2014), premier simulateur multi-prestations en France, calcule en une simulation les droits au RSA, à l'APL, à la prime d'activité, à la CMU-C ou aux allocations familiales. Il repose sur [OpenFisca](https://openfisca.org/fr/). En 2020, mes-aides.gouv.fr est redirigé vers mesdroitssociaux.gouv.fr.
- [1jeune1solution.gouv.fr](https://www.1jeune1solution.gouv.fr/) (2020) réunit des aides pour les moins de 30 ans (emploi, formation, logement, santé, mobilité). Son simulateur, [aides-jeunes](https://www.1jeune1solution.gouv.fr/mes-aides), reprend l'approche de Mes Aides.
- [mon-entreprise.urssaf.fr](https://mon-entreprise.urssaf.fr/) estime les cotisations des indépendants et des créateurs d'entreprise, compare les statuts juridiques et simule les revenus. Son équipe a créé [Publicodes](https://publi.codes/) pour écrire ses règles.

## Années 2020 : collectivités, associations, moteurs ouverts

### Aides simplifiées

[Aides simplifiées](https://beta.gouv.fr/startups/droit-data-gouv-fr-simulateurs-de-droits.html) (2024), produit beta.gouv.fr, développe jusqu'en 2026 des simulateurs organisés par moment de vie, dont le déménagement et les aides fiscales à l'innovation des entreprises. Cette documentation vient de ce projet.

### Les collectivités territoriales

Régions, départements et métropoles développent des simulateurs pour leurs aides locales : bourses régionales, aides au permis de conduire, chèques énergie locaux. Quelques collectivités intègrent leurs aides aux simulateurs nationaux ou ouvrent des portails communs.

### Les associations

Les associations accompagnent les publics éloignés du numérique. [Emmaüs Connect](https://emmaus-connect.org/) ou les [CCAS](https://www.unccas.org/) forment des aidants à l'utilisation des simulateurs, et certaines associations développent leurs propres outils.

### Moteurs ouverts

Trois moteurs ouverts sont employés en France :

- [OpenFisca](https://openfisca.org/fr/) modélise le système socio-fiscal en Python. Utilisé par Mes Aides, il est aussi déployé en Nouvelle-Zélande et en Tunisie. Ses règles s'écrivent en Python, ce qui demande des compétences de développeur.
- [Publicodes](https://publi.codes/) décrit les règles en YAML, avec des noms en français, et génère la documentation de chaque calcul. Il sert à mon-entreprise.urssaf.fr, à [Nos Gestes Climat](https://nosgestesclimat.fr/) et à d'autres produits beta.gouv.fr.
- [Catala](https://catala-lang.org/), développé par Inria, est un langage de programmation littéraire : le texte juridique et le code sont écrits dans le même document, et le compilateur vérifie le code et ses tests. Prest'Agri (beta.gouv.fr) calcule avec des règles Catala, et la DGFiP l'expérimente pour l'impôt sur le revenu.

## Autres pays

### Portails de services

- La Finlande propose un simulateur multi-prestations sur le portail de la [Kela](https://www.kela.fi/calculators) : allocations logement, familiales, maladie, chômage et retraite.
- L'Estonie fait échanger les données de ses administrations par [X-Road](https://e-estonia.com/solutions/interoperability-services/x-road/), en service depuis 2001, et applique le principe « Dites-le-nous une fois » : les usagers transmettent chaque information une seule fois, et les administrations la partagent entre elles.
- Le Danemark ([borger.dk](https://www.borger.dk/)) et les Pays-Bas ([mijnoverheid.nl](https://mijn.overheid.nl/)) ont des portails de services, qui intègrent plus ou moins de simulateurs.

### Rules as Code

*Rules as Code* désigne l'écriture de la loi sous une forme exécutable par les machines, en même temps que sa rédaction juridique. L'objectif est d'aligner les simulateurs sur le texte et de réduire le délai entre la publication d'une loi et la mise à jour des services.

- La Nouvelle-Zélande expérimente l'approche depuis 2018 avec le programme [Better Rules](https://www.digital.govt.nz/dmsdocument/95-better-rules-for-government-discovery-report/html) : juristes et développeurs travaillent ensemble dès la rédaction des textes.
- L'OCDE publie en 2020 [*Cracking the Code*](https://oecd-opsi.org/publications/cracking-the-code/), qui documente ces expérimentations.
- Aux Pays-Bas, le [TNO](https://www.tno.nl/en/digital/data-sharing/rules-code/) développe le protocole Calculemus et le langage FLINT, qui décomposent l'interprétation d'une norme en actes, faits et obligations, chacun relié au passage du texte dont il découle. Le portail [regels.overheid.nl](https://regels.overheid.nl/en) référence des règles formalisées.
- En France, la DINUM organise en mars 2025 la première édition de [Rules as Code Europe](https://www.numerique.gouv.fr/actualites/-rules-as-code-europe---retour-sur-la-premi%C3%A8re-%C3%A9dition-de-mars-2025-qui-marque-le-d%C3%A9but-dune-dynamique-europ%C3%A9enne/), avec plus de 100 participants de 15 pays. La France y présente OpenFisca et Publicodes, et lance avec la Grèce et les Pays-Bas un projet pilote européen sur les assistants de réglementation personnalisés.
- En 2026, data.gouv.fr construit [regles.data.gouv.fr](https://github.com/datagouv/regles.data.gouv.fr), un registre des règles de calcul des administrations.

## Rules as Code Europe

Conférence européenne annuelle sur l'écriture de la réglementation en code exécutable, qui réunit gouvernements, chercheurs et communautés open source.

- 2025 : Paris, organisée par la DINUM et beta.gouv.fr.
- 2026 : [La Haye](https://rules-as-code.yellenge.nl/), les 10 et 11 mars.

## Références

### Rapports et études

- Rapport Bothorel (2020), *Pour une politique publique de la donnée*, recommandations sur l'ouverture des algorithmes publics. [Lire le rapport](https://www.vie-publique.fr/rapport/282238-rapport-bothorel-politique-publique-de-la-donnee)
- DINUM (2021), *Observatoire de la qualité des démarches en ligne*, suivi de la dématérialisation. [Consulter l'observatoire](https://observatoire.numerique.gouv.fr)
- Défenseur des droits (2019), *Dématérialisation et inégalités d'accès aux services publics*.

### International

- OCDE (2020), *Cracking the Code: Rulemaking for humans and machines*. [Lire le rapport](https://www.oecd.org/gov/cracking-the-code-rulemaking-for-humans-and-machines-3f6fc5ac-en.htm)
- Better Rules (Nouvelle-Zélande, 2018), *Better Rules for Government*. [Voir la présentation](https://digital.govt.nz/showcases/better-rules/)
- Banque mondiale (2021), *GovTech Maturity Index*, comparatif international des services publics numériques. [Consulter l'index](https://www.worldbank.org/en/programs/govtech/gtmi)
- TNO Normative Systems (Pays-Bas), protocole Calculemus et langage FLINT. [Site du TNO](https://www.tno.nl/en/digital/data-sharing/rules-code/), [portail regels.overheid.nl](https://regels.overheid.nl/en), [code source](https://gitlab.com/normativesystems)

### Moteurs ouverts

- [OpenFisca](https://openfisca.org), moteur de calcul socio-fiscal
- [Publicodes](https://publi.codes), langage de règles et son moteur JavaScript
- [Catala](https://catala-lang.org/), langage de programmation littéraire pour le droit (Inria)
