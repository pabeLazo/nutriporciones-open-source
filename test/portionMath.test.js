import test from "node:test";
import assert from "node:assert/strict";
import { gramsPerServing, scaleRawIngredient } from "../src/portionMath.js";
test("grams per serving uses edible raw mass", () => {
  assert.equal(gramsPerServing(1000, 10), 100);
});
test("recipe scaling preserves raw edible grams", () => {
  assert.equal(scaleRawIngredient(150, 3, 6), 300);
});
test("reject invalid portions", () => {
  assert.throws(() => gramsPerServing(100, 0), RangeError);
  assert.throws(() => scaleRawIngredient(-1, 2, 4), RangeError);
});
