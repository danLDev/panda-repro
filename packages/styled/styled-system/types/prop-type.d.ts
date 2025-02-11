/* eslint-disable */
import type { ConditionalValue } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

export interface UtilityValues {
	top: Tokens["spacing"];
	left: Tokens["spacing"];
	inset: "auto" | Tokens["spacing"];
	insetInline: Tokens["spacing"];
	insetBlock: Tokens["spacing"];
	insetBlockEnd: Tokens["spacing"];
	insetBlockStart: Tokens["spacing"];
	insetInlineEnd: Tokens["spacing"];
	insetInlineStart: Tokens["spacing"];
	right: Tokens["spacing"];
	bottom: Tokens["spacing"];
	float: "start" | "end" | CssProperties["float"];
	hideFrom: Tokens["breakpoints"];
	hideBelow: Tokens["breakpoints"];
	flexBasis: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full";
	flex: "1" | "auto" | "initial" | "none";
	gridTemplateColumns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridTemplateRows: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridColumn: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridRow: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridAutoColumns: "min" | "max" | "fr";
	gridAutoRows: "min" | "max" | "fr";
	gap: Tokens["spacing"];
	gridGap: Tokens["spacing"];
	gridRowGap: Tokens["spacing"];
	gridColumnGap: Tokens["spacing"];
	rowGap: Tokens["spacing"];
	columnGap: Tokens["spacing"];
	padding: Tokens["spacing"];
	paddingLeft: Tokens["spacing"];
	paddingRight: Tokens["spacing"];
	paddingTop: Tokens["spacing"];
	paddingBottom: Tokens["spacing"];
	paddingBlock: Tokens["spacing"];
	paddingBlockEnd: Tokens["spacing"];
	paddingBlockStart: Tokens["spacing"];
	paddingInline: Tokens["spacing"];
	paddingInlineEnd: Tokens["spacing"];
	paddingInlineStart: Tokens["spacing"];
	marginLeft: "auto" | Tokens["spacing"];
	marginRight: "auto" | Tokens["spacing"];
	marginTop: "auto" | Tokens["spacing"];
	marginBottom: "auto" | Tokens["spacing"];
	margin: "auto" | Tokens["spacing"];
	marginBlock: "auto" | Tokens["spacing"];
	marginBlockEnd: "auto" | Tokens["spacing"];
	marginBlockStart: "auto" | Tokens["spacing"];
	marginInline: "auto" | Tokens["spacing"];
	marginInlineEnd: "auto" | Tokens["spacing"];
	marginInlineStart: "auto" | Tokens["spacing"];
	spaceX: "auto" | Tokens["spacing"] | CssProperties["marginInlineStart"];
	spaceY: "auto" | Tokens["spacing"] | CssProperties["marginBlockStart"];
	outlineColor: Tokens["colors"];
	outlineOffset: Tokens["spacing"];
	divideColor: Tokens["colors"];
	divideStyle: CssProperties["borderStyle"];
	width: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	inlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	height: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	blockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	color: Tokens["colors"];
	fontFamily: Tokens["fonts"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	fontSmoothing: "antialiased" | "subpixel-antialiased";
	letterSpacing: Tokens["letterSpacings"];
	lineHeight: Tokens["lineHeights"];
	textDecorationColor: Tokens["colors"];
	textEmphasisColor: Tokens["colors"];
	textIndent: Tokens["spacing"];
	textShadow: Tokens["shadows"];
	textShadowColor: Tokens["colors"];
	textWrap: "wrap" | "balance" | "nowrap";
	truncate: boolean;
	background: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	backgroundGradient: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	textGradient: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	gradientFrom: Tokens["colors"];
	gradientTo: Tokens["colors"];
	gradientVia: Tokens["colors"];
	borderRadius: Tokens["radii"];
	borderTopLeftRadius: Tokens["radii"];
	borderTopRightRadius: Tokens["radii"];
	borderBottomRightRadius: Tokens["radii"];
	borderBottomLeftRadius: Tokens["radii"];
	borderTopRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderRightRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderBottomRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderLeftRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderStartStartRadius: Tokens["radii"];
	borderStartEndRadius: Tokens["radii"];
	borderStartRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderEndStartRadius: Tokens["radii"];
	borderEndEndRadius: Tokens["radii"];
	borderEndRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderColor: Tokens["colors"];
	borderInlineColor: Tokens["colors"];
	borderBlockColor: Tokens["colors"];
	borderLeftColor: Tokens["colors"];
	borderInlineStartColor: Tokens["colors"];
	borderRightColor: Tokens["colors"];
	borderInlineEndColor: Tokens["colors"];
	borderTopColor: Tokens["colors"];
	borderBottomColor: Tokens["colors"];
	borderBlockEndColor: Tokens["colors"];
	borderBlockStartColor: Tokens["colors"];
	boxShadow: Tokens["shadows"];
	boxShadowColor: Tokens["colors"];
	filter: "auto";
	backdropFilter: "auto";
	borderSpacing: Tokens["spacing"] | "auto";
	borderSpacingX: Tokens["spacing"];
	borderSpacingY: Tokens["spacing"];
	transition: "all" | "common" | "background" | "colors" | "opacity" | "shadow" | "transform";
	animationName: "slide";
	rotate: "auto" | "auto-3d" | CssProperties["rotate"];
	rotateX: CssProperties["rotate"];
	rotateY: CssProperties["rotate"];
	rotateZ: CssProperties["rotate"];
	scale: "auto" | CssProperties["scale"];
	translate: "auto" | "auto-3d" | CssProperties["translate"];
	translateX: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateY: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateZ: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	accentColor: Tokens["colors"];
	caretColor: Tokens["colors"];
	scrollbar: "visible" | "hidden";
	scrollbarColor: Tokens["colors"];
	scrollbarGutter: Tokens["spacing"];
	scrollbarWidth: Tokens["sizes"];
	scrollMargin: Tokens["spacing"];
	scrollMarginLeft: Tokens["spacing"];
	scrollMarginRight: Tokens["spacing"];
	scrollMarginTop: Tokens["spacing"];
	scrollMarginBottom: Tokens["spacing"];
	scrollMarginBlock: Tokens["spacing"];
	scrollMarginBlockEnd: Tokens["spacing"];
	scrollMarginBlockStart: Tokens["spacing"];
	scrollMarginInline: Tokens["spacing"];
	scrollMarginInlineEnd: Tokens["spacing"];
	scrollMarginInlineStart: Tokens["spacing"];
	scrollPadding: Tokens["spacing"];
	scrollPaddingBlock: Tokens["spacing"];
	scrollPaddingBlockStart: Tokens["spacing"];
	scrollPaddingBlockEnd: Tokens["spacing"];
	scrollPaddingInline: Tokens["spacing"];
	scrollPaddingInlineEnd: Tokens["spacing"];
	scrollPaddingInlineStart: Tokens["spacing"];
	scrollPaddingLeft: Tokens["spacing"];
	scrollPaddingRight: Tokens["spacing"];
	scrollPaddingTop: Tokens["spacing"];
	scrollPaddingBottom: Tokens["spacing"];
	scrollSnapType: "none" | "x" | "y" | "both";
	scrollSnapStrictness: "mandatory" | "proximity";
	scrollSnapMargin: Tokens["spacing"];
	scrollSnapMarginTop: Tokens["spacing"];
	scrollSnapMarginBottom: Tokens["spacing"];
	scrollSnapMarginLeft: Tokens["spacing"];
	scrollSnapMarginRight: Tokens["spacing"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	srOnly: boolean;
	debug: boolean;
	containerName: CssProperties["containerName"];
	colorPalette: "black" | "white" | "gray" | "purple" | "blue" | "green" | "orange" | "red" | "pink" | "neutral" | "accent" | "info" | "success" | "warning" | "alert" | "alert.background" | "destructive" | "interaction" | "hyperlink" | "background" | "text" | "icon" | "border" | "scrollbar" | "button" | "button.primary" | "button.primary.background" | "button.primary.text" | "button.secondary" | "button.secondary.text" | "button.secondary.border" | "button.undecorated" | "button.undecorated.text" | "button.destructive" | "button.destructive.background" | "button.destructive.text" | "button.neutral" | "button.neutral.background" | "button.neutral.text" | "button.neutral.border" | "input" | "input.background" | "input.text" | "input.border" | "input.icon" | "input.validation" | "chip" | "chip.combobox" | "chip.combobox.background" | "chip.email" | "chip.email.background" | "chip.contact" | "chip.contact.background" | "chip.infoRequired" | "chip.infoRequired.background" | "chip.resultsReady" | "chip.resultsReady.background" | "chip.other" | "chip.other.background" | "chip.statement" | "chip.statement.background" | "chip.invoice" | "chip.invoice.background" | "chip.reminder" | "chip.reminder.background" | "chip.mvdChange" | "chip.mvdChange.background" | "chip.bankChange" | "chip.bankChange.background" | "chip.important" | "chip.important.background" | "chip.unclassified" | "chip.unclassified.background" | "chip.custom" | "chip.custom.text" | "chip.custom.border" | "chip.classify" | "chip.classify.text" | "chip.classify.border" | "chip.additional" | "badge" | "badge.opened" | "badge.pending" | "badge.sent" | "badge.failed" | "badge.active" | "badge.inactive" | "badge.low" | "badge.mid" | "badge.high" | "badge.folder" | "modal" | "checkbox" | "checkbox.label" | "checkbox.selected" | "checkbox.selected.background" | "checkbox.selected.icon" | "checkbox.deselected" | "checkbox.deselected.background" | "checkbox.deselected.border" | "checkbox.indeterminate" | "checkbox.indeterminate.background" | "checkbox.indeterminate.icon" | "checkbox.indeterminate.border" | "radioButton" | "radioButton.label" | "radioButton.selected" | "radioButton.selected.border" | "radioButton.selected.indicator" | "radioButton.deselected" | "radioButton.deselected.border" | "popover" | "popover.item" | "popover.item.background" | "popover.item.label" | "toast" | "toggleSwitch" | "toggleSwitch.off" | "toggleSwitch.off.background" | "toggleSwitch.on" | "toggleSwitch.on.background" | "tooltip" | "accordion" | "accordion.border" | "accordion.toggleBar" | "accordion.toggleBar.title" | "errorPage" | "errorPage.graphic";
	textStyle: "body.regular.xs" | "body.regular.sm" | "body.regular.md" | "body.regular.lg" | "body.regular.xl" | "body.medium.xs" | "body.medium.sm" | "body.medium.md" | "body.medium.lg" | "body.medium.xl" | "body.bold.xs" | "body.bold.sm" | "body.bold.md" | "body.bold.lg" | "body.bold.xl" | "heading.display" | "heading.h1" | "heading.h2" | "heading.h3" | "heading.h4" | "heading.h5" | "heading.h6" | "hyperlink.xs" | "hyperlink.sm" | "hyperlink.md" | "hyperlink.lg" | "hyperlink.xl" | "button.sm" | "button.md" | "button.lg";
}



type WithColorOpacityModifier<T> = [T] extends [string] ? `${T}/${string}` & { __colorOpacityModifier?: true } : never

type ImportantMark = "!" | "!important"
type WhitespaceImportant = ` ${ImportantMark}`
type Important = ImportantMark | WhitespaceImportant
type WithImportant<T> = [T] extends [string] ? `${T}${Important}` & { __important?: true } : never

/**
 * Only relevant when using `strictTokens` or `strictPropertyValues` in your config.
 * - Allows you to use an escape hatch (e.g. `[123px]`) to use any string as a value.
 * - Allows you to use a color opacity modifier (e.g. `red/300`) with known color values.
 * - Allows you to use an important mark (e.g. `!` or `!important`) in the value.
 *
 * This is useful when you want to use a value that is not defined in the config or want to opt-out of the defaults.
 *
 * @example
 * css({
 *   fontSize: '[123px]', // ⚠️ will not throw even if you haven't defined 123px as a token
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#stricttokens
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type WithEscapeHatch<T> = T | `[${string}]` | WithColorOpacityModifier<T> | WithImportant<T>

/**
 * Will restrict the value of properties that have predefined values to those values only.
 *
 * @example
 * css({
 *   display: 'abc', // ❌ will throw
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type OnlyKnown<Key, Value> = Value extends boolean
  ? Value
  : Value extends `${infer _}` ? Value : never