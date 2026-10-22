# Methodology and limitations

This public repository demonstrates arithmetic for **raw edible ingredient quantities**, not complete nutritional adequacy or clinical safety.

- `gramsPerServing(totalEdibleGrams, servings)` divides total raw edible grams by portions.
- `scaleRawIngredient(rawEdibleGrams, originalServings, targetServings)` rescales raw edible mass linearly.
- All example quantities are synthetic. No patient data, confidential recipe database, or proprietary clinical rules are included.
- Cooking yield, retention factors, food composition, micronutrient adequacy, allergies, and medical restrictions are **out of scope**.
- For future scientific datasets, prioritize authoritative Peruvian sources (MINSA, INS/CENAN, TPCA) and document edition, food identity, culinary state, units and permitted reuse. This repository currently redistributes none of those datasets.
