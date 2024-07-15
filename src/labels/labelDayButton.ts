import type { DateLib, LabelOptions } from "../index.js";
import { dateLib as defaultDateLib } from "../lib/index.js";
import type { Modifiers } from "../types/index.js";

/**
 * Return an ARIA label for the day button.
 *
 * Use the `modifiers` argument to add additional context to the label, e.g.
 * when a day is selected or is today.
 *
 * @group Labels
 * @see http://daypicker.dev/next/docs/translation#aria-labels
 */
export function labelDayButton(
  date: Date,
  /** The modifiers for the day. */
  modifiers: Modifiers,
  options?: LabelOptions,
  /** @ignore */
  dateLib: DateLib = defaultDateLib
) {
  let label = dateLib.format(date, "PPPP", options);
  if (modifiers.today) label = `Today, ${label}`;
  if (modifiers.selected) label = `${label}, selected`;
  return label;
}

/**
 * @deprecated Use {@link labelDayButton} instead.
 * @see https://daypicker.dev/next/upgrading
 */
export const labelDay = labelDayButton;
