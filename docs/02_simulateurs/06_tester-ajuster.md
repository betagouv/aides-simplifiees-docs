# Tester et ajuster

Un simulateur n'est jamais "fini". La mise en production n'est que le début d'un cycle continu de vérification. Tester, c'est garantir que l'outil délivre le bon droit (conformité), de manière compréhensible (UX) et fiable (technique).

## La pyramide des tests

La stratégie de validation repose sur trois niveaux complémentaires :

1.  **Tests unitaires (technique)** : Vérifient chaque brique isolément (une formule, un barème). Exécutés par les frameworks standards (Pytest, Jest).
2.  **Tests d'intégration (cohérence)** : Vérifient que les aides interagissent correctement (non-cumul) et que le moteur traite bien les données du formulaire.
3.  **Tests métier (conformité)** : Le niveau critique. Il s'agit de confronter le simulateur à des cas réels validés par des experts.

## Les "Fixtures Métier" : pierre angulaire de la qualité

Pour industrialiser la validation métier, il est recommandé de formaliser des **cas types** (ou fixtures). Ce sont des scénarios complets (profil usager + résultat attendu) issus de dossiers réels anonymisés.

Ces cas types doivent être décrits dans un format lisible par tous (YAML/JSON) et exécutés automatiquement (CI/CD).

### Exemples de formats dans l'écosystème

**Format LexImpact** (JSON) : Très riche, gère les périodes et les expressions calculées.
```json
{
  "id": "007_aah",
  "description": "Personne handicapée avec AAH",
  "individus": {
    "Adulte 1": { "taux_incapacite": { "year": 0.8 } }
  }
}
```

**Format shared-test-cases** (aides-simplifiées) : Trace le flux complet du formulaire au résultat.
```json
{
  "name": "Alternant éligible APL",
  "metadata": { "validated_by": "expert_caf" },
  "situation": { ... },
  "expected": { "apl": 150 }
}
```

## Tests UX et compréhension usager

Même si le calcul est juste, l'interface peut trahir la règle. Les tests utilisateurs sont indispensables pour valider la pédagogie.

**Méthodologie recommandée** :
1.  **Exploratoire** : Observer l'usager découvrir l'outil sans consigne.
2.  **Dirigé** : Demander d'accomplir une tâche précise ("Vérifiez si vous avez droit à l'aide X").
3.  **Comparatif** : Tester deux formulations d'une même question (A/B testing qualitatif).

**Indicateurs clés** : Taux de complétion, temps de parcours, et surtout la **qualité de compréhension** du résultat (l'usager sait-il pourquoi il a droit à ce montant ?).

## La revue par les pairs

L'automatisation ne remplace pas l'œil humain. Des ateliers réguliers de "crash test" avec des experts métier sont indispensables.