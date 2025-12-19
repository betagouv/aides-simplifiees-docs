# Ressources visuelles

Le "Rules as Code" souffre d'un déficit de représentation : le code est illisible pour les juristes, et le texte de loi est ambigu pour les développeurs. Les diagrammes ne sont pas de simples illustrations, mais des objets frontières essentiels pour aligner ces deux mondes. Cette page présente les modèles de visualisation qui ont fait leurs preuves pour faciliter le dialogue interdisciplinaire, organisés par phase de projet.

## 1. Modéliser la logique (phase de conception)

Avant d'écrire une ligne de code, il est crucial de s'accorder sur l'interprétation du texte.

### L'arbre de décision annoté

Contrairement à un flowchart technique classique, cet arbre doit explicitement lier chaque embranchement à sa source juridique. C'est le support privilégié des ateliers juriste/développeur.

```mermaid
flowchart TD
    subgraph "Art. L.351-1 CCH"
        A1{Résidence principale ?}
    end
    
    subgraph "Art. R.351-3 CCH"
        A2{Non rattaché au foyer<br/>fiscal des parents ?}
    end
    
    subgraph "Art. D.351-5 CCH"
        A3{Ressources < plafond ?}
    end
    
    A1 -->|Oui| A2
    A1 -->|Non| X1[Rejet Art. L.351-1]
    A2 -->|Oui| A3
    A2 -->|Non| X2[Rejet Art. R.351-3]
    A3 -->|Oui| OK[Éligible APL]
    A3 -->|Non| X3[Rejet Art. D.351-5]
```

## Visualiser les temporalités

Les règles socio-fiscales impliquent souvent des décalages temporels complexes (revenus N-2, situation au 1er janvier). Le diagramme de Gantt permet de clarifier ces périodes de référence pour l'équipe technique et les usagers.

```mermaid
gantt
    title Périodes de référence pour le calcul APL 2025
    dateFormat YYYY-MM
    axisFormat %Y-%m
    
    section Données
    Revenus N-2 (RFR 2023)             :done, 2023-01, 2023-12
    Situation familiale (Mois M)       :active, 2025-04, 2025-05
    
    section Droit
    Période de versement               :crit, 2025-04, 2025-12
```

*Usage : Spécification des règles de gestion temporelle (OpenFisca) et pédagogie usager.*

### La décomposition FLINT (Actes / Faits / Devoirs)

Pour une modélisation rigoureuse, notamment dans les contextes de contestabilité forte, le langage [FLINT](https://gitlab.com/normativesystems) (TNO) propose de décomposer la norme en "frames" sémantiques.

```mermaid
flowchart TB
    subgraph "FACTS (Faits)"
        F1["est_résident_principal<br/><small>Art. L.351-1 CCH</small>"]
        F2["revenus_inférieurs_plafond<br/><small>Art. D.351-5 CCH</small>"]
    end
    
    subgraph "ACTS (Actes)"
        A1["déposer_demande_APL"]
        A1_pre["Préconditions :<br/>F1 ∧ F2"]
    end
    
    subgraph "DUTIES (Devoirs)"
        D1["CAF doit statuer<br/>sous 2 mois"]
        D1_trigger["Déclencheur :<br/>dossier_créé"]
    end
    
    F1 & F2 --> A1_pre
    A1_pre --> A1
    A1 --> D1_trigger
    D1_trigger --> D1
```

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

## 4. Maintenir et Tracer (Phase de run)

### La chaîne de traçabilité (Le jumeau réglementaire)

Pour garantir l'auditabilité, il faut représenter la chaîne complète de la donnée, du texte de loi jusqu'à l'écran de l'usager.

```mermaid
flowchart TD
    subgraph A["Texte juridique"]
        A1[Loi / Décret]
    end
    
    subgraph B["Modèle calculable"]
        B1[Règles & Barèmes]
    end
    
    subgraph C["Preuves"]
        C1[Cas types validés]
        C2[Tests automatisés]
    end
    
    subgraph F["Gouvernance"]
        F1[Registre d'interprétations]
    end
    
    A1 -->|Interprétation| B1
    C1 -.->|Valide| B1
    F1 -.->|Justifie| B1
```

### Traçabilité fine : du droit au test

Ce schéma établit la correspondance précise pour les revues de conformité.

```mermaid
flowchart TD
    T1["Art. L.821-1"] -.->|implémente| R1["aah . eligibilite"]
    T2["Art. D.821-1"] -.->|implémente| R2["aah . plafond"]
    
    R1 -.->|testé par| C1["cas-aah-01.yaml"]
    R2 -.->|testé par| C1
```


## Inspiration : La "Living Documentation"

Une pratique classique est de maintenir ces diagrammes manuellement (Figma, PowerPoint). Cela présente des avantages en flexibilité, mais ils risquent de devenir obsolètes dès la première modification du code.

Une piste inspirante est de tendre vers la **"Living Documentation"** : des représentations toujours à jour ("Evergreen"), générées automatiquement à partir du code ou de la configuration.

**Principe directeur** : La règle calculable est le noyau. Tout le reste (interfaces, diagrammes, documentation) gagne à en être une projection.
