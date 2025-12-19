# Nouveaux usages et architectures

Si l'infrastructure de règles se consolide, elle pourrait habiliter des usages plus avancés que la simulation informative. Cette page explore des pistes prospectives sur la manière dont ces technologies pourraient transformer la relation administrative.

## Vers une architecture hybride : API + Déclaratif

Le modèle dominant actuel repose sur le "tout déclaratif" : l'usager saisit l'intégralité de ses données. Une évolution naturelle consisterait à tendre vers une architecture hybride, capable de pré-remplir le moteur de règles avec des données administratives certifiées.

### Le défi de l'injection de données
Cette approche soulève des défis d'alignement sémantique. Les données disponibles via API (ex: revenu fiscal N-1) ne correspondent pas toujours exactement aux variables attendues par le moteur de calcul (ex: ressources mensuelles courantes). Des mécanismes d'adaptation et d'heuristique seraient nécessaires pour combler cet écart, en toute transparence pour l'usager.

### Gestion de la confiance
Dans un tel modèle, le moteur de règles pourrait devoir gérer plusieurs "niveaux de vérité" pour une même variable : la donnée certifiée (API) et la donnée déclarée (correction usager). Le résultat du calcul pourrait alors être qualifié : une simulation "certifiée" si basée uniquement sur des sources authentiques, ou "indicative" si basée sur du déclaratif.

## Du simulateur à la démarche : le "Dites-le nous une fois"

L'objectif ultime pourrait être de faire du simulateur la première étape transparente de la demande d'aide.

### Continuité de la donnée
Au lieu de demander à l'usager de ressaisir ses informations sur un portail de demande après une simulation positive, l'architecture pourrait permettre de transférer l'état de la simulation vers le système de gestion. Cela nécessiterait un alignement fort des dictionnaires de données entre le monde de l'information (simulateurs) et le monde de la gestion (back-office), pour que les variables de l'un soient intelligibles par l'autre.

## L'hypothèse des services décentralisés (Wallet)

Une perspective plus lointaine mais structurante est celle des portefeuilles numériques (wallets). Ce changement de paradigme inverserait la logique : ce ne serait plus à l'usager d'aller vers l'administration, mais aux droits de venir à lui.

### Les standards de l'identité décentralisée
Cette vision s'appuie sur des standards émergents :
*   **Verifiable Credentials (VCs)** : Des attestations numériques signées (ex: "Est étudiant", "Revenu < 20k€") que l'usager stocke dans son téléphone.
*   **Solid (Social Linked Data)** : Un protocole permettant de stocker ses données personnelles dans des "Pods" sécurisés, en gardant le contrôle sur qui y accède.

### L'exécution embarquée (edge computing)
Dans ce scénario, les règles de calcul ne tourneraient plus sur un serveur central, mais directement sur le terminal de l'usager. Les moteurs de règles (comme Publicodes) pourraient être packagés pour s'exécuter localement, garantissant une confidentialité totale ("privacy by design"). Les données personnelles sensibles nécessaires au calcul ne quitteraient jamais le téléphone.

### La preuve sans dévoilement (Zero-Knowledge Proofs)
Pour aller plus loin, les technologies de **Zero-Knowledge Proofs (ZKPs)** permettraient à un usager de prouver son éligibilité ("Je gagne moins que le plafond") sans jamais révéler le montant exact de ses revenus. Le moteur de règles deviendrait un "générateur de preuves" cryptographiques.

### Vers une proactivité respectueuse
Le wallet pourrait croiser localement ces données avec les règles téléchargées. Il deviendrait possible de notifier l'usager d'un droit potentiel ("Vous semblez éligible à l'aide X") sans que l'administration n'ait jamais eu accès à ses données pour effectuer ce calcul.

Cette vision impliquerait de considérer les règles codées non plus comme du simple logiciel, mais comme des "certificats de logique" signés par l'État, garantissant que le calcul local est bien conforme à la réglementation en vigueur.
