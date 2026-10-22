/** Independent, educational recipe portion calculations. No clinical recommendations. */
export function gramsPerServing(totalEdibleGrams, servings) {
  if (!Number.isFinite(totalEdibleGrams) || totalEdibleGrams < 0) throw new RangeError("totalEdibleGrams must be non-negative and finite");
  if (!Number.isInteger(servings) || servings <= 0) throw new RangeError("servings must be a positive integer");
  return totalEdibleGrams / servings;
}
export function scaleRawIngredient(rawEdibleGrams, originalServings, targetServings) {
  if (!Number.isFinite(rawEdibleGrams) || rawEdibleGrams < 0) throw new RangeError("rawEdibleGrams must be non-negative and finite");
  if (!Number.isInteger(originalServings) || originalServings <= 0) throw new RangeError("originalServings must be positive");
  if (!Number.isInteger(targetServings) || targetServings <= 0) throw new RangeError("targetServings must be positive");
  return rawEdibleGrams * targetServings / originalServings;
}
