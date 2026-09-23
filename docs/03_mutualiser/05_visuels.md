# Ressources visuelles

Le "Rules as Code" souffre d'un déficit de représentation : le code est illisible pour les juristes, et le texte de loi est ambigu pour les développeurs. Les diagrammes ne sont pas de simples illustrations, mais des objets frontières essentiels pour aligner ces deux mondes. Cette page présente les modèles de visualisation qui ont fait leurs preuves pour faciliter le dialogue interdisciplinaire, organisés par phase de projet.

## 1. Modéliser la logique (phase de conception)

Avant d'écrire une ligne de code, il est crucial de s'accorder sur l'interprétation du texte.

### L'arbre de décision annoté

Contrairement à un flowchart technique classique, cet arbre doit explicitement lier chaque embranchement à sa source juridique. C'est le support privilégié des ateliers juriste/développeur.

```mermaid
flowchart TD
    subgraph "CCH, art. R.822-23 à R.822-25"
        A1{Logement conforme ?}
    end
    
    subgraph "CCH, art. R.822-3 à R.822-17"
        A2{Ressources sous le plafond ?}
    end
    
    A1 -->|Oui| A2
    A1 -->|Non| X1[Rejet, conditions liées au logement]
    A2 -->|Oui| OK[Conditions remplies]
    A2 -->|Non| X2[Rejet, conditions de ressources]
```

## Visualiser les temporalités

Les règles socio-fiscales impliquent souvent des décalages temporels complexes (revenus N-2, ressources des douze derniers mois, situation au 1er janvier). Le diagramme de Gantt permet de clarifier ces périodes de référence pour l'équipe technique et les usagers. Exemple : les aides au logement se calculent sur les ressources des douze derniers mois, actualisées tous les trois mois ([service-public.fr](https://www.service-public.fr/particuliers/vosdroits/F12006)).

```mermaid
gantt
    title Aides au logement, demande en avril 2026
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section Ressources
    Douze derniers mois                :done, 2025-04, 2026-03
    
    section Droit
    Premier trimestre                  :active, 2026-04, 2026-06
    Trimestre suivant, ressources actualisées :crit, 2026-07, 2026-09
```

*Usage : Spécification des règles de gestion temporelle (OpenFisca) et pédagogie usager.*

### Le graphe de dépendances de variables

Ce schéma explicite comment les données d'entrée se transforment en résultat. Il est essentiel pour comprendre l'impact d'une modification réglementaire ("si le plafond change, quelles règles sont affectées ?").

```mermaid
flowchart TD
    subgraph Entrées
        E1[revenus_bruts]
        E2[nb_enfants]
    end
    
    subgraph Intermédiaires
        I1[revenus_nets]
        I2[quotient_familial]
    end
    
    subgraph Sorties
        S1[éligibilité]
        S2[montant]
    end
    
    E1 --> I1
    E2 --> I2
    I1 --> I2
    I2 --> S1
    S1 --> S2
```

## 2. Concevoir le parcours (phase UX)

### Le parcours déclaratif conditionnel

Dans une architecture où le formulaire est défini par un schéma autonome (approche *aides-simplifiées*), le diagramme de flux permet de visualiser la logique d'affichage conditionnel (`visibleWhen`).

```mermaid
flowchart TD
    subgraph "Step 1 : Profil"
        direction TB
        Q1{{"Situation professionnelle ?"}}
        Q1_choices["Études | Salarié | Chômeur"]
        Q2["Précision étudiante"]
        Q3["Indemnisé ?"]
    end

    Q1 --> Q1_choices
    Q1_choices -.->|"Études"| Q2
    Q1_choices -.->|"Chômeur"| Q3
```

*Ce diagramme peut être généré automatiquement à partir du fichier JSON de configuration du formulaire.*

## 3. Implémenter et Expliquer (Phase de dev)

### L'explicabilité du calcul

Un simulateur doit pouvoir justifier son résultat. Avec des outils comme `@publicodes/react-ui`, on peut visualiser la remontée du calcul.

```mermaid
flowchart TD
    R["Résultat : 180€/mois"]
    R --> D1["Comment cette donnée<br/>est-elle calculée ?"]
    
    D1 --> V1["loyer_reference : 350€"]
    D1 --> V2["taux_participation : 0.85"]
    
    V1 --> S1["Valeur saisie"]
    V2 --> S2["Barème zone 2"]
    
    click V2 href "#" "Voir le barème"
```

## Inspiration : La "Living Documentation"

Une pratique classique est de maintenir ces diagrammes manuellement (Figma, PowerPoint). Cela présente des avantages en flexibilité, mais ils risquent de devenir obsolètes dès la première modification du code.

Une piste inspirante est de tendre vers la **"Living Documentation"** : des représentations toujours à jour ("Evergreen"), générées automatiquement à partir du code ou de la configuration.

**Principe directeur** : La règle calculable est le noyau. Tout le reste (interfaces, diagrammes, documentation) gagne à en être une projection.
