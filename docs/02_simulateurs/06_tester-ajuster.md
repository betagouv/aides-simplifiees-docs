# Tester et ajuster

Après la mise en production, le simulateur est vérifié à chaque évolution des textes. Les tests vérifient trois choses : que l'outil calcule le montant prévu par les textes, que l'usager comprend le parcours et le résultat, et que le code fonctionne.

## Trois niveaux de tests

- Les tests unitaires vérifient une formule ou un barème, avec les outils de test habituels (Pytest, Jest).
- Les tests d'intégration vérifient les interactions entre aides (non-cumul) et la conversion des réponses du formulaire en variables du moteur.
- Les tests métier comparent les résultats du simulateur à des cas types validés par des experts métier.

## Cas types validés par un expert métier

Un cas type décrit une situation complète : le profil de l'usager et le résultat attendu. Il est construit avec un expert métier ou tiré d'un dossier réel anonymisé, et sa provenance est indiquée. Les cas types s'écrivent dans un format lisible (YAML, JSON) et s'exécutent automatiquement à chaque modification (intégration continue).

Le format [shared-test-cases](https://github.com/ShallowRed/aides-simplifiees-shared-test-cases) décrit le parcours complet, des réponses au formulaire jusqu'au résultat. Il enregistre la période de calcul et la version du moteur, qui permettent de rejouer le cas. Extrait :

```json
{
  "id": "dem-log-001",
  "name": "Étudiant boursier en mobilité Parcoursup",
  "period": "2025-01",
  "openfisca_version": "france-158.0.0",
  "metadata": { "validated_by": "Responsable Réglementation" },
  "survey_answers": { "statut-professionnel": "etudiant", "boursier": true },
  "openfisca_request": { },
  "openfisca_response": { },
  "expected_simulation_results": {
    "aide-mobili-jeune": 100,
    "aide-personnalisee-logement": 250
  }
}
```

Les moteurs ouverts ont aussi leurs propres formats : fichiers de tests YAML dans OpenFisca, tests écrits dans le code source avec Catala.

## Tests avec les usagers

Un calcul juste peut être mal présenté. Les tests avec les usagers vérifient que le parcours et le résultat sont compris :

- en test exploratoire, l'usager découvre l'outil sans consigne ;
- en test dirigé, il accomplit une tâche précise (« Vérifiez si vous avez droit à l'aide X ») ;
- en test comparatif, il voit deux formulations d'une même question.

Les indicateurs sont le taux de complétion, le temps de parcours et la compréhension du résultat : l'usager sait-il pourquoi il a droit à ce montant ?

## Ateliers de vérification avec des experts métier

Des ateliers réguliers avec des experts métier complètent les tests automatisés : les experts parcourent le simulateur avec des situations qu'ils connaissent et signalent les écarts.
