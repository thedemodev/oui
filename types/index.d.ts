/// <reference types="react" />
declare module "components/Accordion/index" {
    export function AccordionSection({ _isSelected, _onClickHandler, children, testSection, title, }: {
        _isSelected: any;
        _onClickHandler: any;
        children: any;
        testSection: any;
        title: any;
    }): JSX.Element;
    export namespace AccordionSection {
        export namespace propTypes {
            export const _isSelected: PropTypes.Requireable<boolean>;
            export const _onClickHandler: PropTypes.Requireable<(...args: any[]) => any>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Validator<string>;
        }
    }
    export class Accordion extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            selected: any;
        };
        handleSelection(selected: any): void;
        render(): JSX.Element;
    }
    export namespace Accordion {
        export namespace propTypes_1 {
            const children_1: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export { children_1 as children };
            export const initiallySelected: PropTypes.Requireable<number>;
            const testSection_1: PropTypes.Requireable<string>;
            export { testSection_1 as testSection };
        }
        export { propTypes_1 as propTypes };
        export namespace defaultProps {
            const initiallySelected_1: number;
            export { initiallySelected_1 as initiallySelected };
        }
    }
    namespace _default {
        export { Accordion };
        export { AccordionSection };
    }
    export default _default;
    import PropTypes from "prop-types";
    import React from "react";
}
declare module "components/Accordion/Accordion.story" {
    export {};
}
declare module "components/ArrowsInline/index" {
    export default ArrowsInline;
    function ArrowsInline({ direction, testSection, }: any): any;
    namespace ArrowsInline {
        export namespace defaultProps {
            export const direction: string;
        }
        export namespace propTypes {
            const direction_1: PropTypes.Requireable<string>;
            export { direction_1 as direction };
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/ArrowsInline/ArrowInline.story" {
    export {};
}
declare module "components/ArrowsInline/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Spinner/index" {
    export default Spinner;
    function Spinner({ size, hasOverlay, testSection, }: any): any;
    namespace Spinner {
        export namespace propTypes {
            export const hasOverlay: PropTypes.Requireable<boolean>;
            export const size: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Button/index" {
    export default Button;
    function Button({ ariaLabel, isSubmit, isLink, children, isActive, isDisabled, isLoading, loadingText, onBlur, onClick, onMouseDown, size, style, testSection, width, buttonRef, title, }: any): any;
    namespace Button {
        export namespace propTypes {
            export const ariaLabel: PropTypes.Requireable<string>;
            export const buttonRef: PropTypes.Requireable<((...args: any[]) => any) | PropTypes.InferProps<{
                current: PropTypes.Requireable<Element>;
            }>>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const isActive: PropTypes.Requireable<boolean>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const isLink: PropTypes.Requireable<boolean>;
            export const isLoading: PropTypes.Requireable<boolean>;
            export const isSubmit: PropTypes.Requireable<boolean>;
            export const loadingText: PropTypes.Requireable<string>;
            export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
            export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            export const onMouseDown: PropTypes.Requireable<(...args: any[]) => any>;
            export const size: PropTypes.Requireable<string>;
            export const style: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Requireable<string>;
            export const width: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const isLink_1: boolean;
            export { isLink_1 as isLink };
            const isLoading_1: boolean;
            export { isLoading_1 as isLoading };
            const isDisabled_1: boolean;
            export { isDisabled_1 as isDisabled };
            const isSubmit_1: boolean;
            export { isSubmit_1 as isSubmit };
            const loadingText_1: string;
            export { loadingText_1 as loadingText };
            export function onBlur_1(): void;
            export { onBlur_1 as onBlur };
            export function onClick_1(): void;
            export { onClick_1 as onClick };
            export function onMouseDown_1(): void;
            export { onMouseDown_1 as onMouseDown };
            const width_1: string;
            export { width_1 as width };
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "utils/accessibility" {
    export function getAssistiveTextFromColorClass(className: string): string;
}
declare module "components/Attention/index" {
    export type AttentionProps = {
        alignment?: 'left' | 'center';
        children?: any;
        isDismissible?: boolean;
        testSection?: string;
        type?: 'bad-news' | 'brand' | 'good-news' | 'warning';
    };
    const Attention: ({ alignment, children, isDismissible, testSection, type }: AttentionProps) => JSX.Element;
    export default Attention;
}
declare module "components/Attention/Attention.story" {
    export {};
}
declare module "components/Attention/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "utils/filter" {
    /**
     * Searches a string for an occurrence of a filtering string (case insensitive)
     *  - Filtering a complex object? Consider implementing a filter with an
     *    approach similar to FilterPicker, where item key values are joined
     *    in a string and passed in as contentToSearch
     * @param {string} stringToFind
     * - The term to find, split into separate search terms by spaces
     * @param {string} contentToSearch
     * - The content to search for the filter term
     * @returns {boolean}
     */
    export function isFilterTermInItem(stringToFind: string, contentToSearch: string): boolean;
}
declare module "components/Label/index" {
    export default Label;
    function Label({ isOptional, isRequired, children, testSection, inputId, }: any): any;
    namespace Label {
        export namespace propTypes {
            export const children: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const inputId: PropTypes.Requireable<string>;
            export const isOptional: PropTypes.Requireable<boolean>;
            export const isRequired: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Input/index" {
    export default Input;
    /**
     * Generates an `input` element (optionally wrapped in a label) and accepts
     * most of the common input types.
     * @param {Object} props - Properties passed to component
     * @returns {ReactElement}
     */
    const Input: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    import React from "react";
}
declare module "components/BlockList/Category/index" {
    export default Category;
    function Category(props: any): JSX.Element;
    namespace Category {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const header: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/BlockList/Item/index" {
    export default Item;
    class Item extends React.Component<any, any, any> {
        constructor(props: any);
        _handleOnKeyDown(event: any): void;
        ref: React.RefObject<any>;
        componentDidUpdate(): void;
        render(): JSX.Element;
        _itemWithOnClick: HTMLDivElement | null | undefined;
    }
    namespace Item {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const gutters: PropTypes.Requireable<string>;
            export const hasFauxFocus: PropTypes.Requireable<boolean>;
            export const href: PropTypes.Requireable<string>;
            export const hrefTarget: PropTypes.Requireable<string>;
            export const hrefTitle: PropTypes.Requireable<string>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            export const onMouseDown: PropTypes.Requireable<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const gutters_1: string;
            export { gutters_1 as gutters };
        }
        export const displayName: string;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/BlockList/index" {
    export default BlockList;
    function BlockList({ hasBorder, testSection, maxHeight, children, }: any): any;
    namespace BlockList {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const hasBorder: PropTypes.Requireable<boolean>;
            export const maxHeight: PropTypes.Requireable<string | number>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export { Category };
        export { Item };
    }
    import PropTypes from "prop-types";
    import Category from "components/BlockList/Category";
    import Item from "components/BlockList/Item";
}
declare module "components/Link/index" {
    export default Link;
    function Link({ ariaLabel, children, href, onClick, isDisabled, newWindow, style, testSection, }: any): any;
    namespace Link {
        export namespace propTypes {
            export const ariaLabel: PropTypes.Requireable<string>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const href: PropTypes.Requireable<string>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const newWindow: PropTypes.Requireable<boolean>;
            export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            export const style: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Autocomplete/Suggestion/Suggestion" {
    export default Suggestion;
    function Suggestion(props: any): JSX.Element;
    namespace Suggestion {
        export namespace defaultProps {
            export const suggestion: string;
            export const testSection: string;
        }
        export namespace propTypes {
            const suggestion_1: PropTypes.Requireable<string>;
            export { suggestion_1 as suggestion };
            const testSection_1: PropTypes.Requireable<string>;
            export { testSection_1 as testSection };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Autocomplete/Suggestion/index" {
    export default Suggestion;
    import Suggestion from "components/Autocomplete/Suggestion/Suggestion";
}
declare module "components/Autocomplete/Autocomplete" {
    export default Autocomplete;
    /**
     * Autocomplete
     * This render an input with typeahead functionality
     *
     * Example:
     *  <Autocomplete
     *    placeholder='typehead...'
     *    suggestions={['foo', 'bar']}
     *    onSuggestionClick={ this.handleSuggestionClick }
     *    ActionField={ CustomActionField }
     *  />
     */
    class Autocomplete extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            isFocused: boolean;
            suggestions: any;
            inputValue: any;
        };
        debouncedOnInputChange: any;
        /**
         * If stateful query internal suggestions state,
         * else call input change handler
         * @param {String} event - on-change input event
         * @returns {undefined}
         */
        inputChange: (event: string) => undefined;
        /**
         * Updates suggestion state with new query results
         * @param {String} query - suggestion query
         * @param {Function} callback - function that is called have state is set
         * @returns {undefined}
         */
        querySuggestions: (query: string, callback: Function) => undefined;
        /**
         * Creates an event handler for setting the focus state
         * @param {Boolean} isFocused - set the isFocus state to true or false
         * @returns {Function} focus/blur event handler
         */
        createFocusHandler: (isFocused: boolean) => Function;
        /**
         * Creates an event handler that is called when a suggestion is clicked
         * @param {*} suggestion - a single suggestion item
         * @returns {Function} mousedown event handler
         */
        createSuggestionClickHandler: (suggestion: any) => Function;
        render(): JSX.Element;
    }
    namespace Autocomplete {
        export namespace defaultProps {
            export const autoFillInputValue: boolean;
            export function ActionField(props: any): JSX.Element;
            export { Input as InputField };
            export { Suggestion as SuggestionField };
            export const debounce: number;
            export function filterBy(x: any): any;
            export const maxHeight: number;
            export function onActionClick(): void;
            export function onInputChange(): void;
            export function onSuggestionClick(): void;
            export const placeholder: string;
            export const stateful: boolean;
            export const suggestions: never[];
            export const testSection: string;
            export const value: string;
        }
        export namespace propTypes {
            const ActionField_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { ActionField_1 as ActionField };
            export const InputField: PropTypes.Requireable<(...args: any[]) => any>;
            export const SuggestionField: PropTypes.Requireable<(...args: any[]) => any>;
            const autoFillInputValue_1: PropTypes.Requireable<boolean>;
            export { autoFillInputValue_1 as autoFillInputValue };
            const debounce_1: PropTypes.Requireable<number>;
            export { debounce_1 as debounce };
            const filterBy_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { filterBy_1 as filterBy };
            const maxHeight_1: PropTypes.Requireable<number>;
            export { maxHeight_1 as maxHeight };
            const onActionClick_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { onActionClick_1 as onActionClick };
            const onInputChange_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { onInputChange_1 as onInputChange };
            const onSuggestionClick_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { onSuggestionClick_1 as onSuggestionClick };
            const placeholder_1: PropTypes.Requireable<string>;
            export { placeholder_1 as placeholder };
            const stateful_1: PropTypes.Requireable<boolean>;
            export { stateful_1 as stateful };
            const suggestions_1: PropTypes.Requireable<any[]>;
            export { suggestions_1 as suggestions };
            const testSection_1: PropTypes.Requireable<string>;
            export { testSection_1 as testSection };
            const value_1: PropTypes.Requireable<string>;
            export { value_1 as value };
        }
    }
    import React from "react";
    import Input from "components/Input";
    import Suggestion from "components/Autocomplete/Suggestion";
    import PropTypes from "prop-types";
}
declare module "components/Autocomplete/index" {
    export default Autocomplete;
    import Autocomplete from "components/Autocomplete/Autocomplete";
}
declare module "components/Autocomplete/Autocomplete.story" {
    export {};
}
declare module "components/Autocomplete/examples/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Badge/index" {
    export default Badge;
    function Badge(props: any): any;
    namespace Badge {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const color: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const color_1: string;
            export { color_1 as color };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Badge/Badge.story" {
    export {};
}
declare module "components/Badge/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Token/DismissButton/index" {
    export default DismissButton;
    function DismissButton(props: any): any;
    namespace DismissButton {
        export namespace propTypes {
            export const fill: PropTypes.Requireable<string>;
            export const onClick: PropTypes.Validator<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const fill_1: string;
            export { fill_1 as fill };
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Token/index" {
    export default Token;
    function Token({ description, hasSnugWrap, hasWrap, isDismissible, isDraggable, isFullWidth, name, onDismiss, order, style, showWell, testSection, usesDragHandle, }: any): any;
    namespace Token {
        export namespace propTypes {
            export const description: PropTypes.Requireable<string>;
            export const hasSnugWrap: PropTypes.Requireable<boolean>;
            export const hasWrap: PropTypes.Requireable<boolean>;
            export const isDismissible: PropTypes.Requireable<boolean>;
            export const isDraggable: PropTypes.Requireable<boolean>;
            export const isFullWidth: PropTypes.Requireable<boolean>;
            export const name: PropTypes.Validator<string>;
            export const onDismiss: PropTypes.Requireable<(...args: any[]) => any>;
            export const order: PropTypes.Requireable<number>;
            export const showWell: PropTypes.Requireable<boolean>;
            export const style: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const usesDragHandle: PropTypes.Requireable<boolean>;
        }
        export namespace defaultProps {
            const hasWrap_1: boolean;
            export { hasWrap_1 as hasWrap };
            const isDismissible_1: boolean;
            export { isDismissible_1 as isDismissible };
            const style_1: string;
            export { style_1 as style };
            const showWell_1: boolean;
            export { showWell_1 as showWell };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/OverlayWrapper/index" {
    export default OverlayWrapper;
    /**
     * Intelligently position elements on a page.
     * @param {Object} props - Properties passed to component
     * @returns {ReactElement}
     */
    class OverlayWrapper extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            isOverlayOpen: boolean;
        };
        onChildClick(event: any, child: any): void;
        onChildMouseOver(event: any, child: any): void;
        onChildMouseOut(event: any, child: any): void;
        disableTether(): void;
        getChildContext(): {
            hideOverlay: () => void;
        };
        componentDidMount(): void;
        initTether: (() => any) | undefined;
        enableTether(): void;
        _tether: any;
        _bodyClickListener: ((event: any) => void) | undefined;
        _documentEscapeListener: ((event: any) => void) | undefined;
        removeBodyEventListener(): void;
        /**
          * Disable Tether if a user clicks outside of the `overlay` and `children`.
          * @param {Object} event - Click event
         */
        isClickWithinOverlayOrChildren(event: any): void;
        componentWillUnmount(): void;
        onEscapeKey(event: any): void;
        render(): JSX.Element;
        _activatorEl: HTMLDivElement | null | undefined;
        _overlayEl: HTMLDivElement | null | undefined;
    }
    namespace OverlayWrapper {
        export namespace propTypes {
            export const attachmentConstraint: PropTypes.Requireable<string>;
            export const behavior: PropTypes.Requireable<string>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const horizontalAttachment: PropTypes.Requireable<string>;
            export const horizontalTargetAttachment: PropTypes.Requireable<string>;
            export const isConstrainedToScreen: PropTypes.Requireable<boolean>;
            export const onHide: PropTypes.Requireable<(...args: any[]) => any>;
            export const onShow: PropTypes.Requireable<(...args: any[]) => any>;
            export const overlay: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const shouldHideOnClick: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
            export const verticalAttachment: PropTypes.Requireable<string>;
            export const verticalTargetAttachment: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const attachmentConstraint_1: string;
            export { attachmentConstraint_1 as attachmentConstraint };
            const behavior_1: string;
            export { behavior_1 as behavior };
            const horizontalAttachment_1: string;
            export { horizontalAttachment_1 as horizontalAttachment };
            const isConstrainedToScreen_1: boolean;
            export { isConstrainedToScreen_1 as isConstrainedToScreen };
            export function onHide_1(): void;
            export { onHide_1 as onHide };
            const shouldHideOnClick_1: boolean;
            export { shouldHideOnClick_1 as shouldHideOnClick };
            const verticalAttachment_1: string;
            export { verticalAttachment_1 as verticalAttachment };
        }
        export namespace childContextTypes {
            export const hideOverlay: PropTypes.Requireable<(...args: any[]) => any>;
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/BlockList/BlockList.story" {
    export {};
}
declare module "components/BlockList/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/ButtonRow/index" {
    export default ButtonRow;
    function ButtonRow({ centerGroup, leftGroup, rightGroup, testSection, }: any): any;
    namespace ButtonRow {
        export namespace propTypes {
            export const centerGroup: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
            export const leftGroup: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
            export const rightGroup: PropTypes.Requireable<(PropTypes.ReactElementLike | null | undefined)[]>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Button/Button.story" {
    export {};
}
declare module "components/Button/example/index" {
    var _default: ({
        isPadded: boolean;
        examples: JSX.Element[];
        backgroundColor?: undefined;
    } | {
        backgroundColor: string;
        isPadded: boolean;
        examples: JSX.Element[];
    })[];
    export default _default;
}
declare module "components/ButtonIcon/index" {
    export default ButtonIcon;
    function ButtonIcon({ iconName, isDisabled, onClick, size, style, testSection, title, }: {
        iconName: any;
        isDisabled: any;
        onClick: any;
        size: any;
        style: any;
        testSection: any;
        title: any;
    }): JSX.Element;
    namespace ButtonIcon {
        export namespace propTypes {
            export const iconName: PropTypes.Validator<string>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const onClick: PropTypes.Validator<(...args: any[]) => any>;
            export const size: PropTypes.Requireable<string>;
            export const style: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Validator<string>;
        }
        export namespace defaultProps {
            const iconName_1: string;
            export { iconName_1 as iconName };
            export function onClick_1(): void;
            export { onClick_1 as onClick };
            const size_1: string;
            export { size_1 as size };
            const title_1: string;
            export { title_1 as title };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Layout/Container" {
    export default Container;
    const Container: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    import React from "react";
}
declare module "components/Layout/Row" {
    export default Row;
    const Row: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    import React from "react";
}
declare module "components/Layout/Col" {
    export default Col;
    const Col: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    import React from "react";
}
declare module "tokens/forimport/index.es" {
    export var brandBlueLight: string;
    export var brandBlueBase: string;
    export var brandBlueDark: string;
    export var brandPurpleLight: string;
    export var brandPurpleBase: string;
    export var brandPurpleDark: string;
    export var smokeLight: string;
    export var smokeBase: string;
    export var smokeDark: string;
    export var greyLight: string;
    export var greyBase: string;
    export var greyDark: string;
    export var purpleLight: string;
    export var purpleBase: string;
    export var purpleDark: string;
    export var magentaLight: string;
    export var magentaBase: string;
    export var magentaDark: string;
    export var redLight: string;
    export var redBase: string;
    export var redDark: string;
    export var pinkLight: string;
    export var pinkBase: string;
    export var pinkDark: string;
    export var orangeLight: string;
    export var orangeBase: string;
    export var orangeDark: string;
    export var amberLight: string;
    export var amberBase: string;
    export var amberDark: string;
    export var greenLight: string;
    export var greenBase: string;
    export var greenDark: string;
    export var aquaLight: string;
    export var aquaBase: string;
    export var aquaDark: string;
    export var blueLight: string;
    export var blueBase: string;
    export var blueDark: string;
    export var iconSmall: string;
    export var iconLarge: string;
}
declare module "components/ButtonIcon/ButtonIcon.story" {
    export {};
}
declare module "components/ButtonRow/ButtonRow.story" {
    export {};
}
declare module "components/ButtonRow/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Card/index" {
    export default Card;
    function Card({ title, onClose, testSection, children, shadow, }: string): any;
    namespace Card {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
            export const shadow: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Validator<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Card/Card.story" {
    export {};
}
declare module "components/Card/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Checkbox/index" {
    export default Checkbox;
    function Checkbox({ checked, defaultChecked, isDisabled, label, labelWeight, onChange, testSection, }: any): any;
    namespace Checkbox {
        export namespace propTypes {
            export const checked: PropTypes.Requireable<boolean>;
            export const defaultChecked: PropTypes.Requireable<boolean>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const labelWeight: PropTypes.Requireable<string>;
            export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const labelWeight_1: string;
            export { labelWeight_1 as labelWeight };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Checkbox/Checkbox.story" {
    export {};
}
declare module "components/Checkbox/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/CloseButton/index" {
    export default CloseButton;
    function CloseButton(props: any): JSX.Element;
    namespace CloseButton {
        export namespace propTypes {
            export const onClick: PropTypes.Validator<(...args: any[]) => any>;
            export const size: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const size_1: string;
            export { size_1 as size };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/CopyButton/index" {
    export default CopyButton;
    function CopyButton({ style, testSection, textToCopy, }: any): any;
    namespace CopyButton {
        export namespace propTypes {
            export const style: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const textToCopy: PropTypes.Validator<string>;
        }
        export namespace defaultProps {
            const style_1: string;
            export { style_1 as style };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Code/index" {
    export default Code;
    /**
     * Display code either inline or in its own block.
     * @param {Object} props - Properties passed to component
     * @returns {ReactElement}
     */
    class Code extends React.Component<any, any, any> {
        renderCode(): JSX.Element;
        render(): JSX.Element | null;
    }
    namespace Code {
        export const propTypes: {
            /** The code within the component */
            children: PropTypes.Requireable<string>;
            /** className provide the possibility for extra classNames */
            className: PropTypes.Requireable<string>;
            /** Style for the CopyButton */
            copyButtonStyle: PropTypes.Requireable<string>;
            /** Adds a copy button to code examples */
            hasCopyButton: PropTypes.Requireable<boolean>;
            /** Apply syntax highlighting to the code */
            isHighlighted: PropTypes.Requireable<boolean>;
            /** Specify a language for the syntax highlighter */
            language: PropTypes.Requireable<string>;
            /** ouiStyle */
            ouiStyle: PropTypes.Requireable<boolean>;
            /** Hook for automated JavaScript tests */
            testSection: PropTypes.Requireable<string>;
            /** How the code should be displayed */
            type: PropTypes.Validator<string>;
        };
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/Code/Code.story" {
    export {};
}
declare module "components/Code/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/CodeDiff/CodeDiff" {
    export function CodeDiff({ oldText, newText, hideInfo, hideTitle, fileName, updatedFileName, outputStyle, }: {
        oldText: any;
        newText: any;
        hideInfo: any;
        hideTitle: any;
        fileName: any;
        updatedFileName: any;
        outputStyle: any;
    }): JSX.Element;
    export namespace CodeDiff {
        export namespace propTypes {
            export const fileName: PropTypes.Requireable<string>;
            export const hideInfo: PropTypes.Requireable<boolean>;
            export const hideTitle: PropTypes.Requireable<boolean>;
            export const newText: PropTypes.Validator<string>;
            export const oldText: PropTypes.Validator<string>;
            export const outputStyle: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const updatedFileName: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const fileName_1: string;
            export { fileName_1 as fileName };
            const hideInfo_1: boolean;
            export { hideInfo_1 as hideInfo };
            const hideTitle_1: boolean;
            export { hideTitle_1 as hideTitle };
            const newText_1: string;
            export { newText_1 as newText };
            const oldText_1: string;
            export { oldText_1 as oldText };
            const testSection_1: string;
            export { testSection_1 as testSection };
            const outputStyle_1: string;
            export { outputStyle_1 as outputStyle };
        }
    }
    export default CodeDiff;
    import PropTypes from "prop-types";
}
declare module "components/Table/THead/index" {
    export default THead;
    function THead({ children, testSection, }: {
        children: any;
        testSection: any;
    }): JSX.Element;
    namespace THead {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Table/TR/index" {
    export default TR;
    function TR({ isActive, noBorder, noHover, borderStyle, backgroundColor, testSection, children, }: {
        isActive: any;
        noBorder: any;
        noHover: any;
        borderStyle: any;
        backgroundColor: any;
        testSection: any;
        children: any;
    }): JSX.Element;
    namespace TR {
        export namespace propTypes {
            export const backgroundColor: PropTypes.Requireable<string>;
            export const borderStyle: PropTypes.Requireable<string>;
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const isActive: PropTypes.Requireable<boolean>;
            export const noBorder: PropTypes.Requireable<boolean>;
            export const noHover: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Table/TH/index" {
    export default TH;
    function TH({ children, colSpan, isCollapsed, isNumerical, testSection, width, }: {
        children: any;
        colSpan: any;
        isCollapsed: any;
        isNumerical: any;
        testSection: any;
        width: any;
    }): JSX.Element;
    namespace TH {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const colSpan: PropTypes.Requireable<number>;
            export const isCollapsed: PropTypes.Requireable<boolean>;
            export const isNumerical: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
            export const width: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const isCollapsed_1: boolean;
            export { isCollapsed_1 as isCollapsed };
            const isNumerical_1: boolean;
            export { isNumerical_1 as isNumerical };
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Table/TBody/index" {
    export default TBody;
    function TBody({ children, testSection, }: {
        children: any;
        testSection: any;
    }): JSX.Element;
    namespace TBody {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Table/TD/index" {
    export default TD;
    function TD({ children, colSpan, isNumerical, testSection, verticalAlign, width, }: {
        children: any;
        colSpan: any;
        isNumerical?: boolean | undefined;
        testSection: any;
        verticalAlign: any;
        width: any;
    }): JSX.Element;
    namespace TD {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const colSpan: PropTypes.Requireable<number>;
            export const isNumerical: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
            export const verticalAlign: PropTypes.Requireable<string>;
            export const width: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Table/index" {
    export default Table;
    function Table({ children, density, shouldAddHover, style, tableLayoutAlgorithm, testSection, }: any): any;
    namespace Table {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const density: PropTypes.Requireable<string>;
            export const shouldAddHover: PropTypes.Requireable<boolean>;
            export const style: PropTypes.Requireable<string>;
            export const tableLayoutAlgorithm: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const density_1: string;
            export { density_1 as density };
            const tableLayoutAlgorithm_1: string;
            export { tableLayoutAlgorithm_1 as tableLayoutAlgorithm };
        }
        export { THead };
        export { TR };
        export { TH };
        export { TBody };
        export { TD };
    }
    import PropTypes from "prop-types";
    import THead from "components/Table/THead";
    import TR from "components/Table/TR";
    import TH from "components/Table/TH";
    import TBody from "components/Table/TBody";
    import TD from "components/Table/TD";
}
declare module "components/CodeDiff/index" {
    export default CodeDiff;
    import CodeDiff from "components/CodeDiff/CodeDiff";
}
declare module "components/CodeDiff/CodeDiff.story" {
    export {};
}
declare module "components/CopyButton/CopyButton.story" {
    export {};
}
declare module "components/DatePicker/CalendarNavButton" {
    export default CalendarNavButton;
    function CalendarNavButton({ type }: {
        type: any;
    }): JSX.Element;
    namespace CalendarNavButton {
        export const propTypes: {
            type: PropTypes.Requireable<string>;
        };
    }
    import PropTypes from "prop-types";
}
declare module "components/DatePicker/fns" {
    export function getDateString(date: any): string;
    export function getTimeString(date: any): string;
    export function preserveTime(prevDate: any, newDate: any): any;
    export function getAvailableStartDatePhrase({ date }: {
        date: any;
    }): string;
    export function getAvailableEndDatePhrase({ date }: {
        date: any;
    }): string;
    export function getCustomMonthElement({ month }: {
        month: any;
    }): JSX.Element;
    export function isOutsideAcceptableDateRange(day: any, isOutsideRange: any, isFutureDateSelectable: any, isPastDateSelectable: any): any;
}
declare module "components/DatePicker/constants" {
    export namespace constants {
        export const DAY_SIZE: number;
        export namespace PHRASES {
            export const focusStartDate: string;
            export { getAvailableStartDatePhrase as chooseAvailableStartDate };
            export { getAvailableEndDatePhrase as chooseAvailableEndDate };
        }
        export const SINGLE_NUM_MONTHS: number;
        export const TRANSITION_DURATION: number;
        export const VERTICAL_SPACING: number;
    }
    import { getAvailableStartDatePhrase } from "components/DatePicker/fns";
    import { getAvailableEndDatePhrase } from "components/DatePicker/fns";
}
declare module "components/DatePicker/DatePicker" {
    export default DatePicker;
    class DatePicker extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            currentDate: any;
            currentDateString: string;
            isFocused: any;
            dayPickerIsOpen: any;
        };
        componentDidUpdate(prevProps: any, prevState: any): void;
        onFocusChange: ({ focused }: {
            focused: any;
        }) => void;
        onDateChange: (date: any) => void;
        onOutsideClick: () => void;
        onClose: () => void;
        isOutsideAcceptableDateRange: (day: any) => any;
        render(): JSX.Element;
    }
    namespace DatePicker {
        export namespace propTypes {
            export const initialDate: any;
            export const initialVisibleMonth: PropTypes.Requireable<(...args: any[]) => any>;
            export const inputId: PropTypes.Validator<string>;
            export const inputLabel: PropTypes.Requireable<string>;
            export const inputPlaceholder: PropTypes.Requireable<string>;
            export const isAbsolutelyPositioned: PropTypes.Requireable<boolean>;
            export const isDisabledInput: PropTypes.Requireable<boolean>;
            export const isFocused: PropTypes.Requireable<boolean>;
            export const isFutureDateSelectable: PropTypes.Requireable<boolean>;
            export const isOutsideRange: PropTypes.Requireable<(...args: any[]) => any>;
            export const isPastDateSelectable: PropTypes.Requireable<boolean>;
            export const keepOpenAlways: PropTypes.Requireable<boolean>;
            export const keepOpenOnDateSelect: PropTypes.Requireable<boolean>;
            export const onDateChange: PropTypes.Requireable<(...args: any[]) => any>;
        }
        export namespace defaultProps {
            const inputLabel_1: string;
            export { inputLabel_1 as inputLabel };
            const inputPlaceholder_1: string;
            export { inputPlaceholder_1 as inputPlaceholder };
            const inputId_1: string;
            export { inputId_1 as inputId };
            const isAbsolutelyPositioned_1: boolean;
            export { isAbsolutelyPositioned_1 as isAbsolutelyPositioned };
            const isFutureDateSelectable_1: boolean;
            export { isFutureDateSelectable_1 as isFutureDateSelectable };
            const isPastDateSelectable_1: boolean;
            export { isPastDateSelectable_1 as isPastDateSelectable };
            const keepOpenAlways_1: boolean;
            export { keepOpenAlways_1 as keepOpenAlways };
            const keepOpenOnDateSelect_1: boolean;
            export { keepOpenOnDateSelect_1 as keepOpenOnDateSelect };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/DatePicker/DatePicker.story" {
    export {};
}
declare module "components/DatePicker/DateRangePicker" {
    export default DateRangePicker;
    class DateRangePicker extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            endDate: any;
            focusedInput: any;
            dayPickerIsOpen: any;
            startDate: any;
            startDateString: string;
            endDateString: string;
            startTimeString: string;
            endTimeString: string;
        };
        componentDidUpdate(prevProps: any, prevState: any): void;
        onFocusChange: (focusedInput: any) => void;
        onTimeChange(event: any, timeToUpdate: any): void;
        /**
         * Function called when either a start date
         * or end date has been changed.
         * The dates are passed as a parameter object with startDate and endDate
         * as keys as well as resetTime which is used to handle time defaults
         * and time preservation.
         *
         * The new dates are used to set the internal component state, before
         * passing those dates to this.props.onDatesChange() implemented by the
         * consumer.
         *
         * When resetTime = false (default behavior):
         *  - By default, when selecting dates, resetTime will be false, since
         *    we want to initally set startDate to 12:00am
         *    and endDate to 11:59(:59.999)pm
         *  - If the previous date (prevStartDate & prevEndDate) are not null,
         *    we want to preserve the time of the previous selection since
         *    the react-dates component blindly resets the time to 12pm.
         * When resetTime = true (primarily helpful for panelButtons):
         *  - If resetTime is true, we allow the time of both startDate and endDate
         *    to be the source of truth for time, ignoring what was previously set
         */
        onDatesChange: ({ startDate, endDate, resetTime }: {
            startDate: any;
            endDate: any;
            resetTime?: boolean | undefined;
        }) => void;
        onOutsideClick: () => void;
        onClose: () => void;
        isOutsideAcceptableDateRange: (day: any) => any;
        renderPresetButtons: (presetPanelOptions: any) => any;
        renderSidePanel: () => JSX.Element;
        render(): JSX.Element;
    }
    namespace DateRangePicker {
        export namespace propTypes {
            export const endDateInputId: PropTypes.Validator<string>;
            export const endDateInputLabel: PropTypes.Requireable<string>;
            export const endDateInputPlaceholder: PropTypes.Requireable<string>;
            export { timeInputValidator as endTimeInputId };
            export const endTimeInputLabel: PropTypes.Requireable<string>;
            export const focusedInput: PropTypes.Requireable<string | null>;
            export const hasTimeInputs: PropTypes.Requireable<boolean>;
            export const initialEndDate: any;
            export const initialStartDate: any;
            export const initialVisibleMonth: PropTypes.Requireable<(...args: any[]) => any>;
            export const isAbsolutelyPositioned: PropTypes.Requireable<boolean>;
            export const isBorderless: PropTypes.Requireable<boolean>;
            export const isFutureDateSelectable: PropTypes.Requireable<boolean>;
            export const isOutsideRange: PropTypes.Requireable<(...args: any[]) => any>;
            export const isPastDateSelectable: PropTypes.Requireable<boolean>;
            export const keepOpenAlways: PropTypes.Requireable<boolean>;
            export const keepOpenOnDateSelect: PropTypes.Requireable<boolean>;
            export const onDatesChange: PropTypes.Requireable<(...args: any[]) => any>;
            export const panelButtons: PropTypes.Requireable<any[] | ((...args: any[]) => any)>;
            export const presetPanelOptions: PropTypes.Requireable<(PropTypes.InferProps<{
                endDate: any;
                label: PropTypes.Validator<string>;
                resetTime: PropTypes.Requireable<boolean>;
                startDate: any;
            }> | null | undefined)[]>;
            export const startDateInputId: PropTypes.Validator<string>;
            export const startDateInputLabel: PropTypes.Requireable<string>;
            export const startDateInputPlaceholder: PropTypes.Requireable<string>;
            export { timeInputValidator as startTimeInputId };
            export const startTimeInputLabel: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const endDateInputLabel_1: string;
            export { endDateInputLabel_1 as endDateInputLabel };
            const endDateInputPlaceholder_1: string;
            export { endDateInputPlaceholder_1 as endDateInputPlaceholder };
            const endTimeInputLabel_1: string;
            export { endTimeInputLabel_1 as endTimeInputLabel };
            const focusedInput_1: null;
            export { focusedInput_1 as focusedInput };
            const isAbsolutelyPositioned_1: boolean;
            export { isAbsolutelyPositioned_1 as isAbsolutelyPositioned };
            const isFutureDateSelectable_1: boolean;
            export { isFutureDateSelectable_1 as isFutureDateSelectable };
            const isPastDateSelectable_1: boolean;
            export { isPastDateSelectable_1 as isPastDateSelectable };
            const initialStartDate_1: null;
            export { initialStartDate_1 as initialStartDate };
            const initialEndDate_1: null;
            export { initialEndDate_1 as initialEndDate };
            const keepOpenAlways_1: boolean;
            export { keepOpenAlways_1 as keepOpenAlways };
            const keepOpenOnDateSelect_1: boolean;
            export { keepOpenOnDateSelect_1 as keepOpenOnDateSelect };
            const startDateInputLabel_1: string;
            export { startDateInputLabel_1 as startDateInputLabel };
            const startDateInputPlaceholder_1: string;
            export { startDateInputPlaceholder_1 as startDateInputPlaceholder };
            const startTimeInputLabel_1: string;
            export { startTimeInputLabel_1 as startTimeInputLabel };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
    function timeInputValidator(props: any, propName: any, componentName: any): Error | undefined;
}
declare module "components/DatePicker/DateRangePicker.story" {
    export {};
}
declare module "components/Popover/index" {
    export default Popover;
    function Popover({ children, padding, testSection, title, }: any): any;
    namespace Popover {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const padding: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const padding_1: string;
            export { padding_1 as padding };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/HelpPopover/index" {
    export default HelpPopover;
    function HelpPopover({ behavior, children, horizontalAttachment, iconSize, isConstrainedToScreen, popoverTitle, verticalAttachment, testSection, }: {
        behavior: any;
        children: any;
        horizontalAttachment: any;
        iconSize: any;
        isConstrainedToScreen: any;
        popoverTitle: any;
        verticalAttachment: any;
        testSection: any;
    }): JSX.Element;
    namespace HelpPopover {
        export namespace propTypes {
            export const behavior: PropTypes.Requireable<string>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const horizontalAttachment: PropTypes.Requireable<string>;
            export const iconSize: PropTypes.Requireable<string>;
            export const isConstrainedToScreen: PropTypes.Requireable<boolean>;
            export const popoverTitle: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const verticalAttachment: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const behavior_1: string;
            export { behavior_1 as behavior };
            const iconSize_1: string;
            export { iconSize_1 as iconSize };
            const isConstrainedToScreen_1: boolean;
            export { isConstrainedToScreen_1 as isConstrainedToScreen };
            const testSection_1: string;
            export { testSection_1 as testSection };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Fieldset/index" {
    export default Fieldset;
    function Fieldset(props: any): JSX.Element;
    namespace Fieldset {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const description: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const helpIcon: PropTypes.Requireable<boolean>;
            export const isOptional: PropTypes.Requireable<boolean>;
            export const popoverText: PropTypes.Requireable<string>;
            export const popoverTitle: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Dialog/Deprecated/Footer/index" {
    export default Footer;
    function Footer(props: any): JSX.Element;
    namespace Footer {
        export namespace propTypes {
            export const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Dialog/Deprecated/Title/index" {
    export default Title;
    function Title(props: any): JSX.Element;
    namespace Title {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const subtitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Dialog/Deprecated/Wrapper/index" {
    export default Wrapper;
    function Wrapper(props: any): JSX.Element;
    namespace Wrapper {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Dialog/index" {
    export function DialogNew(props: any): JSX.Element;
    export namespace DialogNew {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const footerButtonList: PropTypes.Validator<any[]>;
            export const hasCloseButton: PropTypes.Requireable<boolean>;
            export const hasOverlay: PropTypes.Requireable<boolean>;
            export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
            export const subtitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Validator<string>;
        }
        export namespace defaultProps {
            const hasCloseButton_1: boolean;
            export { hasCloseButton_1 as hasCloseButton };
            const hasOverlay_1: boolean;
            export { hasOverlay_1 as hasOverlay };
            export function onClose_1(): void;
            export { onClose_1 as onClose };
            const subtitle_1: string;
            export { subtitle_1 as subtitle };
            const testSection_1: string;
            export { testSection_1 as testSection };
        }
    }
    export default Dialog;
    import PropTypes from "prop-types";
    namespace Dialog {
        export { Fieldset };
        export { Footer };
        export { Title };
        export { Wrapper };
    }
    import Fieldset from "components/Fieldset";
    import Footer from "components/Dialog/Deprecated/Footer";
    import Title from "components/Dialog/Deprecated/Title";
    import Wrapper from "components/Dialog/Deprecated/Wrapper";
}
declare module "utils/recompose-utils" {
    export const withToggle: any;
}
declare module "components/Dropdown/DropdownContents/index" {
    export const DropdownContents: React.ForwardRefExoticComponent<React.RefAttributes<any>>;
    export default DropdownContents;
    import React from "react";
}
declare module "components/Dropdown/DropdownListItem/index" {
    function DropdownListItem(props: any): JSX.Element;
    namespace DropdownListItem {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const hardSides: PropTypes.Requireable<boolean>;
            export const hardTop: PropTypes.Requireable<boolean>;
            export const ignoreToggle: PropTypes.Requireable<boolean>;
            export const role: PropTypes.Requireable<string>;
        }
    }
    export default DropdownListItem;
    import PropTypes from "prop-types";
}
declare module "components/Dropdown/DropdownBlockLink/index" {
    export function DropdownBlockLink(props: any): JSX.Element;
    export namespace DropdownBlockLink {
        export namespace defaultProps {
            export const isLink: boolean;
        }
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const hasFauxFocus: PropTypes.Requireable<boolean>;
            const isLink_1: PropTypes.Validator<boolean>;
            export { isLink_1 as isLink };
            export const minWidth: PropTypes.Requireable<string | number>;
            export const onClick: PropTypes.Validator<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
            export const trackId: PropTypes.Requireable<string>;
            export const value: PropTypes.Requireable<string>;
        }
    }
    export default DropdownBlockLink;
    import PropTypes from "prop-types";
}
declare module "components/Dropdown/DropdownBlockLinkText/index" {
    function DropdownBlockLinkText(props: any): JSX.Element;
    namespace DropdownBlockLinkText {
        export namespace defaultProps {
            export const text: null;
        }
        export namespace propTypes {
            export const testSection: PropTypes.Requireable<string>;
            const text_1: PropTypes.Requireable<string>;
            export { text_1 as text };
        }
    }
    export default DropdownBlockLinkText;
    import PropTypes from "prop-types";
}
declare module "components/Dropdown/DropdownBlockLinkSecondaryText/index" {
    function DropdownBlockLinkSecondaryText(props: any): JSX.Element;
    namespace DropdownBlockLinkSecondaryText {
        export namespace defaultProps {
            export const isWarning: boolean;
            export const secondaryText: null;
        }
        export namespace propTypes {
            const isWarning_1: PropTypes.Requireable<boolean>;
            export { isWarning_1 as isWarning };
            const secondaryText_1: PropTypes.Requireable<string>;
            export { secondaryText_1 as secondaryText };
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    export default DropdownBlockLinkSecondaryText;
    import PropTypes from "prop-types";
}
declare module "components/Dropdown/index" {
    export default Dropdown;
    class Dropdown extends React.Component<any, any, any> {
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        componentDidUpdate: (prevProps: any) => void;
        handleHideChildren: () => void;
        handleOnBlur: () => void;
        handleToggle: (event: any) => void;
        onMouseOver: () => any;
        onMouseLeave: () => any;
        render(): JSX.Element;
    }
    namespace Dropdown {
        export const displayName: string;
        export function shouldDisplayChildren({ isOpen, isDisabled }: {
            isOpen: any;
            isDisabled: any;
        }): boolean;
        export namespace propTypes {
            export const activator: PropTypes.Requireable<PropTypes.ReactComponentLike>;
            export const arrowIcon: PropTypes.Requireable<string>;
            export const buttonContent: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const displayError: PropTypes.Requireable<boolean>;
            export const fullWidth: PropTypes.Requireable<boolean>;
            export const hide: PropTypes.Requireable<(...args: any[]) => any>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const isOpen: PropTypes.Requireable<boolean>;
            export const overChildren: PropTypes.Requireable<boolean>;
            export const placement: PropTypes.Requireable<string>;
            export const renderActivator: PropTypes.Requireable<(...args: any[]) => any>;
            export const setOverChildren: PropTypes.Requireable<(...args: any[]) => any>;
            export const shouldHideChildrenOnClick: PropTypes.Requireable<boolean>;
            export const style: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const toggle: PropTypes.Requireable<(...args: any[]) => any>;
            export const width: PropTypes.Requireable<string | number>;
            export const zIndex: PropTypes.Requireable<number>;
        }
        export namespace defaultProps {
            const arrowIcon_1: string;
            export { arrowIcon_1 as arrowIcon };
            const displayError_1: boolean;
            export { displayError_1 as displayError };
            const fullWidth_1: boolean;
            export { fullWidth_1 as fullWidth };
            const isDisabled_1: boolean;
            export { isDisabled_1 as isDisabled };
            const isOpen_1: boolean;
            export { isOpen_1 as isOpen };
            const overChildren_1: boolean;
            export { overChildren_1 as overChildren };
            const placement_1: string;
            export { placement_1 as placement };
            const renderActivator_1: null;
            export { renderActivator_1 as renderActivator };
            export function setOverChildren_1(): void;
            export { setOverChildren_1 as setOverChildren };
            const shouldHideChildrenOnClick_1: boolean;
            export { shouldHideChildrenOnClick_1 as shouldHideChildrenOnClick };
            const testSection_1: string;
            export { testSection_1 as testSection };
            export function toggle_1(): void;
            export { toggle_1 as toggle };
            const width_1: number;
            export { width_1 as width };
            const zIndex_1: number;
            export { zIndex_1 as zIndex };
        }
        export { DropdownContents as Contents };
        export { DropdownListItem as ListItem };
        export { DropdownBlockLink as BlockLink };
        export { DropdownBlockLinkText as BlockLinkText };
        export { DropdownBlockLinkSecondaryText as BlockLinkSecondaryText };
    }
    import React from "react";
    import PropTypes from "prop-types";
    import DropdownContents from "components/Dropdown/DropdownContents";
    import DropdownListItem from "components/Dropdown/DropdownListItem";
    import DropdownBlockLink from "components/Dropdown/DropdownBlockLink";
    import DropdownBlockLinkText from "components/Dropdown/DropdownBlockLinkText";
    import DropdownBlockLinkSecondaryText from "components/Dropdown/DropdownBlockLinkSecondaryText";
}
declare module "components/Dialog/Dialog.story" {
    export {};
}
declare module "components/Disclose/index" {
    var _default: any;
    export default _default;
}
declare module "components/Disclose/Disclose.story" {
    export {};
}
declare module "components/Disclose/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/DiscloseTable/Row/index" {
    var _default: any;
    export default _default;
}
declare module "components/DiscloseTable/index" {
    export default DiscloseTable;
    function DiscloseTable({ children, testSection, }: {
        children: any;
        testSection: any;
    }): JSX.Element;
    namespace DiscloseTable {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export { DiscloseRow as Row };
    }
    import PropTypes from "prop-types";
    import DiscloseRow from "components/DiscloseTable/Row";
}
declare module "components/DiscloseTable/DiscloseTable.story" {
    export {};
}
declare module "components/DockedFooter/index" {
    export default DockedFooter;
    class DockedFooter extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            isDocked: boolean;
        };
        shouldDock(): void;
        onScroll(): void;
        setEventListeners(): void;
        throttle(delay: any, fn: any): (...args: any[]) => any;
        componentDidMount(): void;
        componentDidUpdate(prevProps: any, prevState: any): void;
        render(): JSX.Element;
    }
    namespace DockedFooter {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const includesMargin: PropTypes.Requireable<boolean>;
            export const parentTestSection: PropTypes.Validator<string>;
            export const testSection: PropTypes.Validator<string>;
        }
        export namespace defaultProps {
            const includesMargin_1: boolean;
            export { includesMargin_1 as includesMargin };
            const testSection_1: string;
            export { testSection_1 as testSection };
            const parentTestSection_1: string;
            export { parentTestSection_1 as parentTestSection };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/DockedFooter/DockedFooter.story" {
    export {};
}
declare module "components/Dropdown/Dropdown.story" {
    export {};
}
declare module "components/Dropdown/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/EditableInput/EditableInput" {
    export default EditableInput;
    class EditableInput extends React.Component<any, any, any> {
        constructor(props: any);
        state: {
            isEditing: any;
        };
        blur: () => void;
        focus: () => void;
        render(): JSX.Element;
    }
    namespace EditableInput {
        export namespace defaultProps {
            export const displayError: boolean;
            export const isEditing: boolean;
            export const label: string;
            export { noop as onBlur };
            export { noop as onChange };
            export { noop as onFocus };
            export const placeholder: string;
            export const value: string;
        }
        export const propTypes: {
            /** Toggle error state styles  */
            displayError: PropTypes.Requireable<boolean>;
            /** Determines if the component is in edit mode */
            isEditing: PropTypes.Requireable<boolean>;
            /** Text that describes the input */
            label: PropTypes.Requireable<string>;
            /** Append note near form input. */
            note: PropTypes.Requireable<string>;
            /** Function that fires when the input goes out of focus */
            onBlur: PropTypes.Requireable<(...args: any[]) => any>;
            /** Function that fires when the input loses focus after the value changes */
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            /** Function that fires when the input is focused */
            onFocus: PropTypes.Requireable<(...args: any[]) => any>;
            /** Placeholder for input */
            placeholder: PropTypes.Requireable<string>;
            /** Used for data-test-section attribute on the link */
            testSection: PropTypes.Requireable<string>;
            /** Supported input types */
            type: PropTypes.Validator<string>;
            /** Text within the input */
            value: PropTypes.Requireable<string | number>;
        };
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/EditableInput/index" {
    export default EditableInput;
    import EditableInput from "components/EditableInput/EditableInput";
}
declare module "components/EditableInput/EditableInput.story" {
    export {};
}
declare module "components/EditableInput/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/EmptyDashboard/index" {
    export default EmptyDashboard;
    function EmptyDashboard({ button, imageHeight, imagePath, imageWidth, headline, description, descriptionMaxWidth, showButtonBelow, testSection, }: {
        button: any;
        imageHeight: any;
        imagePath: any;
        imageWidth: any;
        headline: any;
        description: any;
        descriptionMaxWidth: any;
        showButtonBelow: any;
        testSection: any;
    }): JSX.Element;
    namespace EmptyDashboard {
        export namespace propTypes {
            export const button: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const description: PropTypes.Requireable<PropTypes.ReactElementLike>;
            export const descriptionMaxWidth: PropTypes.Requireable<string | number>;
            export const headline: PropTypes.Validator<string>;
            export const imageHeight: PropTypes.Requireable<string>;
            export const imagePath: PropTypes.Requireable<string>;
            export const imageWidth: PropTypes.Requireable<string>;
            export const showButtonBelow: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace getDefaultProps {
            const descriptionMaxWidth_1: string;
            export { descriptionMaxWidth_1 as descriptionMaxWidth };
            const imageHeight_1: string;
            export { imageHeight_1 as imageHeight };
            const imageWidth_1: string;
            export { imageWidth_1 as imageWidth };
            const showButtonBelow_1: boolean;
            export { showButtonBelow_1 as showButtonBelow };
            const testSection_1: string;
            export { testSection_1 as testSection };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/EmptyDashboard/EmptyDashboard.story" {
    export {};
}
declare module "components/EmptyDashboard/example/index" {
    var _default: {
        isPadded: boolean;
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/ExampleComponent/ExampleComponent" {
    export default ExampleComponent;
    class ExampleComponent extends React.Component<any, any, any> {
        static propTypes: {
            /** A string prop */
            aBoolean: PropTypes.Requireable<boolean>;
            /** A number prop */
            aFunction: PropTypes.Requireable<(...args: any[]) => any>;
            /** A boolean prop */
            aNumber: PropTypes.Requireable<number>;
            /** An array prop */
            aString: PropTypes.Requireable<string>;
            /** An object prop */
            anArray: PropTypes.Requireable<any[]>;
            /** A function prop */
            anObject: PropTypes.Requireable<object>;
            /** This prop uses a Render Pattern, so requires a function as a child */
            children: PropTypes.Validator<(...args: any[]) => any>;
        };
        static defaultProps: {
            aString: string;
            aNumber: number;
            aBoolean: boolean;
            anArray: never[];
            anObject: {};
            aFunction: () => void;
        };
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        state: {
            name: string;
        };
        handleInputUpdate: (event: any) => void;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/ExampleComponent/index" {
    export default ExampleComponent;
    import ExampleComponent from "components/ExampleComponent/ExampleComponent";
}
declare module "components/ExampleComponent/ExampleComponent.story" {
    export {};
}
declare module "components/FilterPicker/FilterPickerListItem/index" {
    export default ListItem;
    function ListItem({ buttonText, description, id, name, onButtonClick, onClick, testSection, hasFauxFocus }: {
        buttonText: any;
        description: any;
        id: any;
        name: any;
        onButtonClick: any;
        onClick: any;
        testSection: any;
        hasFauxFocus: any;
    }): JSX.Element;
    namespace ListItem {
        export namespace propTypes {
            export const buttonText: PropTypes.Requireable<string>;
            export const description: PropTypes.Requireable<string>;
            export const hasFauxFocus: PropTypes.Requireable<boolean>;
            export const id: PropTypes.Requireable<number>;
            export const name: PropTypes.Validator<string>;
            export const onButtonClick: PropTypes.Requireable<(...args: any[]) => any>;
            export const onClick: PropTypes.Validator<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const buttonText_1: string;
            export { buttonText_1 as buttonText };
            const description_1: string;
            export { description_1 as description };
            const hasFauxFocus_1: boolean;
            export { hasFauxFocus_1 as hasFauxFocus };
            const id_1: number;
            export { id_1 as id };
            const testSection_1: string;
            export { testSection_1 as testSection };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/FilterPicker/FilterPicker" {
    export default FilterPicker;
    class FilterPicker extends React.Component<any, any, any> {
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        state: {
            filterQuery: string;
        };
        handleFilterInput: (event: any) => void;
        render(): JSX.Element;
    }
    namespace FilterPicker {
        export namespace propTypes {
            export const allEntities: PropTypes.Requireable<any>;
            export const children: PropTypes.Validator<(...args: any[]) => any>;
            export const customFilterFn: PropTypes.Requireable<(...args: any[]) => any>;
            export const keysToSearch: PropTypes.Requireable<any[]>;
            export const selectedEntityIds: PropTypes.Requireable<any>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const allEntities_1: never[];
            export { allEntities_1 as allEntities };
            export function customFilterFn_1(): null;
            export { customFilterFn_1 as customFilterFn };
            const keysToSearch_1: string[];
            export { keysToSearch_1 as keysToSearch };
            const selectedEntityIds_1: never[];
            export { selectedEntityIds_1 as selectedEntityIds };
            const testSection_1: string;
            export { testSection_1 as testSection };
        }
        export { ListItem };
    }
    import React from "react";
    import PropTypes from "prop-types";
    import ListItem from "components/FilterPicker/FilterPickerListItem";
}
declare module "components/FilterPicker/index" {
    export default FilterPicker;
    import FilterPicker from "components/FilterPicker/FilterPicker";
}
declare module "components/FilterPicker/FilterPicker.story" {
    export {};
}
declare module "components/HelpPopover/HelpPopover.story" {
    export {};
}
declare module "components/Icon/icons" {
    const _exports: {
        [n: number]: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        };
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        } | undefined;
        push(...items: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]): number;
        concat(...items: ConcatArray<{
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }>[]): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        concat(...items: ({
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        } | ConcatArray<{
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }>)[]): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        join(separator?: string | undefined): string;
        reverse(): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        shift(): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        } | undefined;
        slice(start?: number | undefined, end?: number | undefined): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        sort(compareFn?: ((a: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, b: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }) => number) | undefined): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        splice(start: number, deleteCount?: number | undefined): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        splice(start: number, deleteCount: number, ...items: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        unshift(...items: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]): number;
        indexOf(searchElement: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, fromIndex?: number | undefined): number;
        lastIndexOf(searchElement: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, fromIndex?: number | undefined): number;
        every(callbackfn: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => unknown, thisArg?: any): boolean;
        some(callbackfn: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => U, thisArg?: any): U[];
        filter<S extends {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }>(callbackfn: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => value is S, thisArg?: any): S[];
        filter(callbackfn: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => unknown, thisArg?: any): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        reduce(callbackfn: (previousValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentIndex: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        };
        reduce(callbackfn: (previousValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentIndex: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, initialValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        };
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentIndex: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentIndex: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        };
        reduceRight(callbackfn: (previousValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentIndex: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, initialValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        };
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, currentIndex: number, array: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => U_2, initialValue: U_2): U_2;
        find<S_1 extends {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }>(predicate: (this: void, value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, obj: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => value is S_1, thisArg?: any): S_1 | undefined;
        find(predicate: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, obj: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => unknown, thisArg?: any): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        } | undefined;
        findIndex(predicate: (value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, index: number, obj: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[]) => unknown, thisArg?: any): number;
        fill(value: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, start?: number | undefined, end?: number | undefined): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        copyWithin(target: number, start: number, end?: number | undefined): {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }[];
        [Symbol.iterator](): IterableIterator<{
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }>;
        entries(): IterableIterator<[number, {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<{
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
        includes(searchElement: {
            'id': string;
            'name': string;
            'tags': string;
            'styles': string;
            'viewBox': string;
            'width': string;
            'height': string;
            'svgData': {
                'circles': string;
                'ellipses': string;
                'paths': {
                    'd': string;
                }[];
                'polygons': string;
                'polylines': string;
                'rects': string;
            };
        }, fromIndex?: number | undefined): boolean;
    };
    export = _exports;
}
declare module "components/Icon/AbIcon/index" {
    export default AbIcon;
    function AbIcon(props: any): any;
    namespace AbIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AddIcon/index" {
    export default AddIcon;
    function AddIcon(props: any): any;
    namespace AddIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AlignCenterIcon/index" {
    export default AlignCenterIcon;
    function AlignCenterIcon(props: any): any;
    namespace AlignCenterIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AlignJustifyIcon/index" {
    export default AlignJustifyIcon;
    function AlignJustifyIcon(props: any): any;
    namespace AlignJustifyIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AlignLeftIcon/index" {
    export default AlignLeftIcon;
    function AlignLeftIcon(props: any): any;
    namespace AlignLeftIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AlignRightLeftIcon/index" {
    export default AlignRightLeftIcon;
    function AlignRightLeftIcon(props: any): any;
    namespace AlignRightLeftIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ArchiveIcon/index" {
    export default ArchiveIcon;
    function ArchiveIcon(props: any): any;
    namespace ArchiveIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ArrowLeftIcon/index" {
    export default ArrowLeftIcon;
    function ArrowLeftIcon(props: any): any;
    namespace ArrowLeftIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ArrowNsIcon/index" {
    export default ArrowNsIcon;
    function ArrowNsIcon(props: any): any;
    namespace ArrowNsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ArrowRightIcon/index" {
    export default ArrowRightIcon;
    function ArrowRightIcon(props: any): any;
    namespace ArrowRightIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ArrowRightStemIcon/index" {
    export default ArrowRightStemIcon;
    function ArrowRightStemIcon(props: any): any;
    namespace ArrowRightStemIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AudiencesIcon/index" {
    export default AudiencesIcon;
    function AudiencesIcon(props: any): any;
    namespace AudiencesIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/BadgeIcon/index" {
    export default BadgeIcon;
    function BadgeIcon(props: any): any;
    namespace BadgeIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/BanIcon/index" {
    export default BanIcon;
    function BanIcon(props: any): any;
    namespace BanIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/BellIcon/index" {
    export default BellIcon;
    function BellIcon(props: any): any;
    namespace BellIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CalendarIcon/index" {
    export default CalendarIcon;
    function CalendarIcon(props: any): any;
    namespace CalendarIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CampaignsIcon/index" {
    export default CampaignsIcon;
    function CampaignsIcon(props: any): any;
    namespace CampaignsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CheckIcon/index" {
    export default CheckIcon;
    function CheckIcon(props: any): any;
    namespace CheckIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ClipboardIcon/index" {
    export default ClipboardIcon;
    function ClipboardIcon(props: any): any;
    namespace ClipboardIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CloseIcon/index" {
    export default CloseIcon;
    function CloseIcon(props: any): any;
    namespace CloseIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CodeIcon/index" {
    export default CodeIcon;
    function CodeIcon(props: any): any;
    namespace CodeIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CollaboratorsIcon/index" {
    export default CollaboratorsIcon;
    function CollaboratorsIcon(props: any): any;
    namespace CollaboratorsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CollapseIcon/index" {
    export default CollapseIcon;
    function CollapseIcon(props: any): any;
    namespace CollapseIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/DesktopIcon/index" {
    export default DesktopIcon;
    function DesktopIcon(props: any): any;
    namespace DesktopIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/DimensionsIcon/index" {
    export default DimensionsIcon;
    function DimensionsIcon(props: any): any;
    namespace DimensionsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/DuplicateIcon/index" {
    export default DuplicateIcon;
    function DuplicateIcon(props: any): any;
    namespace DuplicateIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/EditorSwitchIcon/index" {
    export default EditorSwitchIcon;
    function EditorSwitchIcon(props: any): any;
    namespace EditorSwitchIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/EllipsisIcon/index" {
    export default EllipsisIcon;
    function EllipsisIcon(props: any): any;
    namespace EllipsisIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/EventsIcon/index" {
    export default EventsIcon;
    function EventsIcon(props: any): any;
    namespace EventsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ExclamationIcon/index" {
    export default ExclamationIcon;
    function ExclamationIcon(props: any): any;
    namespace ExclamationIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ExitIcon/index" {
    export default ExitIcon;
    function ExitIcon(props: any): any;
    namespace ExitIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ExperimentIcon/index" {
    export default ExperimentIcon;
    function ExperimentIcon(props: any): any;
    namespace ExperimentIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ExternalIcon/index" {
    export default ExternalIcon;
    function ExternalIcon(props: any): any;
    namespace ExternalIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/EyeIcon/index" {
    export default EyeIcon;
    function EyeIcon(props: any): any;
    namespace EyeIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/EyeClosedIcon/index" {
    export default EyeClosedIcon;
    function EyeClosedIcon(props: any): any;
    namespace EyeClosedIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/FeedbackIcon/index" {
    export default FeedbackIcon;
    function FeedbackIcon(props: any): any;
    namespace FeedbackIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/GoalIcon/index" {
    export default GoalIcon;
    function GoalIcon(props: any): any;
    namespace GoalIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/HamburgerIcon/index" {
    export default HamburgerIcon;
    function HamburgerIcon(props: any): any;
    namespace HamburgerIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/HelpIcon/index" {
    export default HelpIcon;
    function HelpIcon(props: any): any;
    namespace HelpIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/HistoryIcon/index" {
    export default HistoryIcon;
    function HistoryIcon(props: any): any;
    namespace HistoryIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ImageIcon/index" {
    export default ImageIcon;
    function ImageIcon(props: any): any;
    namespace ImageIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/InconclusiveIcon/index" {
    export default InconclusiveIcon;
    function InconclusiveIcon(props: any): any;
    namespace InconclusiveIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/IntegrationsIcon/index" {
    export default IntegrationsIcon;
    function IntegrationsIcon(props: any): any;
    namespace IntegrationsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/LinkIcon/index" {
    export default LinkIcon;
    function LinkIcon(props: any): any;
    namespace LinkIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/LiveVariablesIcon/index" {
    export default LiveVariablesIcon;
    function LiveVariablesIcon(props: any): any;
    namespace LiveVariablesIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/LockIcon/index" {
    export default LockIcon;
    function LockIcon(props: any): any;
    namespace LockIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/LoserIcon/index" {
    export default LoserIcon;
    function LoserIcon(props: any): any;
    namespace LoserIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/MinusIcon/index" {
    export default MinusIcon;
    function MinusIcon(props: any): any;
    namespace MinusIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/MobileIcon/index" {
    export default MobileIcon;
    function MobileIcon(props: any): any;
    namespace MobileIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/PagesIcon/index" {
    export default PagesIcon;
    function PagesIcon(props: any): any;
    namespace PagesIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/PaperclipIcon/index" {
    export default PaperclipIcon;
    function PaperclipIcon(props: any): any;
    namespace PaperclipIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ParentSelectorIcon/index" {
    export default ParentSelectorIcon;
    function ParentSelectorIcon(props: any): any;
    namespace ParentSelectorIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/PauseIcon/index" {
    export default PauseIcon;
    function PauseIcon(props: any): any;
    namespace PauseIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/PlayIcon/index" {
    export default PlayIcon;
    function PlayIcon(props: any): any;
    namespace PlayIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ProjectsIcon/index" {
    export default ProjectsIcon;
    function ProjectsIcon(props: any): any;
    namespace ProjectsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/RedirectIcon/index" {
    export default RedirectIcon;
    function RedirectIcon(props: any): any;
    namespace RedirectIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/RedoIcon/index" {
    export default RedoIcon;
    function RedoIcon(props: any): any;
    namespace RedoIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/RefreshIcon/index" {
    export default RefreshIcon;
    function RefreshIcon(props: any): any;
    namespace RefreshIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/SaveIcon/index" {
    export default SaveIcon;
    function SaveIcon(props: any): any;
    namespace SaveIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/SearchIcon/index" {
    export default SearchIcon;
    function SearchIcon(props: any): any;
    namespace SearchIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/SettingsIcon/index" {
    export default SettingsIcon;
    function SettingsIcon(props: any): any;
    namespace SettingsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/StarIcon/index" {
    export default StarIcon;
    function StarIcon(props: any): any;
    namespace StarIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/SyncIcon/index" {
    export default SyncIcon;
    function SyncIcon(props: any): any;
    namespace SyncIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/TabletIcon/index" {
    export default TabletIcon;
    function TabletIcon(props: any): any;
    namespace TabletIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/TagsIcon/index" {
    export default TagsIcon;
    function TagsIcon(props: any): any;
    namespace TagsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/TrashIcon/index" {
    export default TrashIcon;
    function TrashIcon(props: any): any;
    namespace TrashIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/UndoIcon/index" {
    export default UndoIcon;
    function UndoIcon(props: any): any;
    namespace UndoIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/UploadIcon/index" {
    export default UploadIcon;
    function UploadIcon(props: any): any;
    namespace UploadIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/UserlistIcon/index" {
    export default UserlistIcon;
    function UserlistIcon(props: any): any;
    namespace UserlistIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/VariationSettingsIcon/index" {
    export default VariationSettingsIcon;
    function VariationSettingsIcon(props: any): any;
    namespace VariationSettingsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/WinnerIcon/index" {
    export default WinnerIcon;
    function WinnerIcon(props: any): any;
    namespace WinnerIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/AlignRightIcon/index" {
    export default AlignRightIcon;
    function AlignRightIcon(props: any): any;
    namespace AlignRightIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CreateAbIcon/index" {
    export default CreateAbIcon;
    function CreateAbIcon(props: any): any;
    namespace CreateAbIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CreateCampaignIcon/index" {
    export default CreateCampaignIcon;
    function CreateCampaignIcon(props: any): any;
    namespace CreateCampaignIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/CreateMvtIcon/index" {
    export default CreateMvtIcon;
    function CreateMvtIcon(props: any): any;
    namespace CreateMvtIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarCodeEditorIcon/index" {
    export default ToolbarCodeEditorIcon;
    function ToolbarCodeEditorIcon(props: any): any;
    namespace ToolbarCodeEditorIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarDevToolsIcon/index" {
    export default ToolbarDevToolsIcon;
    function ToolbarDevToolsIcon(props: any): any;
    namespace ToolbarDevToolsIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarInteractiveModeIcon/index" {
    export default ToolbarInteractiveModeIcon;
    function ToolbarInteractiveModeIcon(props: any): any;
    namespace ToolbarInteractiveModeIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarNewWindowIcon/index" {
    export default ToolbarNewWindowIcon;
    function ToolbarNewWindowIcon(props: any): any;
    namespace ToolbarNewWindowIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarNewWindowCloseIcon/index" {
    export default ToolbarNewWindowCloseIcon;
    function ToolbarNewWindowCloseIcon(props: any): any;
    namespace ToolbarNewWindowCloseIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarReloadIcon/index" {
    export default ToolbarReloadIcon;
    function ToolbarReloadIcon(props: any): any;
    namespace ToolbarReloadIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarSizeDesktopIcon/index" {
    export default ToolbarSizeDesktopIcon;
    function ToolbarSizeDesktopIcon(props: any): any;
    namespace ToolbarSizeDesktopIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarSizeFullWidthIcon/index" {
    export default ToolbarSizeFullWidthIcon;
    function ToolbarSizeFullWidthIcon(props: any): any;
    namespace ToolbarSizeFullWidthIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarSizeMobileIcon/index" {
    export default ToolbarSizeMobileIcon;
    function ToolbarSizeMobileIcon(props: any): any;
    namespace ToolbarSizeMobileIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarSizeTabletIcon/index" {
    export default ToolbarSizeTabletIcon;
    function ToolbarSizeTabletIcon(props: any): any;
    namespace ToolbarSizeTabletIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/ToolbarSizeWidescreenIcon/index" {
    export default ToolbarSizeWidescreenIcon;
    function ToolbarSizeWidescreenIcon(props: any): any;
    namespace ToolbarSizeWidescreenIcon {
        export namespace propTypes {
            export const size: PropTypes.Validator<number>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Icon/index" {
    namespace _default {
        export { AbIcon };
        export { AddIcon };
        export { AlignCenterIcon };
        export { AlignJustifyIcon };
        export { AlignLeftIcon };
        export { AlignRightLeftIcon };
        export { ArchiveIcon };
        export { ArrowLeftIcon };
        export { ArrowNsIcon };
        export { ArrowRightIcon };
        export { ArrowRightStemIcon };
        export { AudiencesIcon };
        export { BadgeIcon };
        export { BanIcon };
        export { BellIcon };
        export { CalendarIcon };
        export { CampaignsIcon };
        export { CheckIcon };
        export { ClipboardIcon };
        export { CloseIcon };
        export { CodeIcon };
        export { CollaboratorsIcon };
        export { CollapseIcon };
        export { DesktopIcon };
        export { DimensionsIcon };
        export { DuplicateIcon };
        export { EditorSwitchIcon };
        export { EllipsisIcon };
        export { EventsIcon };
        export { ExclamationIcon };
        export { ExitIcon };
        export { ExperimentIcon };
        export { ExternalIcon };
        export { EyeIcon };
        export { EyeClosedIcon };
        export { FeedbackIcon };
        export { GoalIcon };
        export { HamburgerIcon };
        export { HelpIcon };
        export { HistoryIcon };
        export { ImageIcon };
        export { InconclusiveIcon };
        export { IntegrationsIcon };
        export { LinkIcon };
        export { LiveVariablesIcon };
        export { LockIcon };
        export { LoserIcon };
        export { MinusIcon };
        export { MobileIcon };
        export { PagesIcon };
        export { PaperclipIcon };
        export { ParentSelectorIcon };
        export { PauseIcon };
        export { PlayIcon };
        export { ProjectsIcon };
        export { RedirectIcon };
        export { RedoIcon };
        export { RefreshIcon };
        export { SaveIcon };
        export { SearchIcon };
        export { SettingsIcon };
        export { StarIcon };
        export { SyncIcon };
        export { TabletIcon };
        export { TagsIcon };
        export { TrashIcon };
        export { UndoIcon };
        export { UploadIcon };
        export { UserlistIcon };
        export { VariationSettingsIcon };
        export { WinnerIcon };
        export { AlignRightIcon };
        export { CreateAbIcon };
        export { CreateCampaignIcon };
        export { CreateMvtIcon };
        export { ToolbarCodeEditorIcon };
        export { ToolbarDevToolsIcon };
        export { ToolbarInteractiveModeIcon };
        export { ToolbarNewWindowIcon };
        export { ToolbarNewWindowCloseIcon };
        export { ToolbarReloadIcon };
        export { ToolbarSizeDesktopIcon };
        export { ToolbarSizeFullWidthIcon };
        export { ToolbarSizeMobileIcon };
        export { ToolbarSizeTabletIcon };
        export { ToolbarSizeWidescreenIcon };
    }
    export default _default;
    import AbIcon from "components/Icon/AbIcon";
    import AddIcon from "components/Icon/AddIcon";
    import AlignCenterIcon from "components/Icon/AlignCenterIcon";
    import AlignJustifyIcon from "components/Icon/AlignJustifyIcon";
    import AlignLeftIcon from "components/Icon/AlignLeftIcon";
    import AlignRightLeftIcon from "components/Icon/AlignRightLeftIcon";
    import ArchiveIcon from "components/Icon/ArchiveIcon";
    import ArrowLeftIcon from "components/Icon/ArrowLeftIcon";
    import ArrowNsIcon from "components/Icon/ArrowNsIcon";
    import ArrowRightIcon from "components/Icon/ArrowRightIcon";
    import ArrowRightStemIcon from "components/Icon/ArrowRightStemIcon";
    import AudiencesIcon from "components/Icon/AudiencesIcon";
    import BadgeIcon from "components/Icon/BadgeIcon";
    import BanIcon from "components/Icon/BanIcon";
    import BellIcon from "components/Icon/BellIcon";
    import CalendarIcon from "components/Icon/CalendarIcon";
    import CampaignsIcon from "components/Icon/CampaignsIcon";
    import CheckIcon from "components/Icon/CheckIcon";
    import ClipboardIcon from "components/Icon/ClipboardIcon";
    import CloseIcon from "components/Icon/CloseIcon";
    import CodeIcon from "components/Icon/CodeIcon";
    import CollaboratorsIcon from "components/Icon/CollaboratorsIcon";
    import CollapseIcon from "components/Icon/CollapseIcon";
    import DesktopIcon from "components/Icon/DesktopIcon";
    import DimensionsIcon from "components/Icon/DimensionsIcon";
    import DuplicateIcon from "components/Icon/DuplicateIcon";
    import EditorSwitchIcon from "components/Icon/EditorSwitchIcon";
    import EllipsisIcon from "components/Icon/EllipsisIcon";
    import EventsIcon from "components/Icon/EventsIcon";
    import ExclamationIcon from "components/Icon/ExclamationIcon";
    import ExitIcon from "components/Icon/ExitIcon";
    import ExperimentIcon from "components/Icon/ExperimentIcon";
    import ExternalIcon from "components/Icon/ExternalIcon";
    import EyeIcon from "components/Icon/EyeIcon";
    import EyeClosedIcon from "components/Icon/EyeClosedIcon";
    import FeedbackIcon from "components/Icon/FeedbackIcon";
    import GoalIcon from "components/Icon/GoalIcon";
    import HamburgerIcon from "components/Icon/HamburgerIcon";
    import HelpIcon from "components/Icon/HelpIcon";
    import HistoryIcon from "components/Icon/HistoryIcon";
    import ImageIcon from "components/Icon/ImageIcon";
    import InconclusiveIcon from "components/Icon/InconclusiveIcon";
    import IntegrationsIcon from "components/Icon/IntegrationsIcon";
    import LinkIcon from "components/Icon/LinkIcon";
    import LiveVariablesIcon from "components/Icon/LiveVariablesIcon";
    import LockIcon from "components/Icon/LockIcon";
    import LoserIcon from "components/Icon/LoserIcon";
    import MinusIcon from "components/Icon/MinusIcon";
    import MobileIcon from "components/Icon/MobileIcon";
    import PagesIcon from "components/Icon/PagesIcon";
    import PaperclipIcon from "components/Icon/PaperclipIcon";
    import ParentSelectorIcon from "components/Icon/ParentSelectorIcon";
    import PauseIcon from "components/Icon/PauseIcon";
    import PlayIcon from "components/Icon/PlayIcon";
    import ProjectsIcon from "components/Icon/ProjectsIcon";
    import RedirectIcon from "components/Icon/RedirectIcon";
    import RedoIcon from "components/Icon/RedoIcon";
    import RefreshIcon from "components/Icon/RefreshIcon";
    import SaveIcon from "components/Icon/SaveIcon";
    import SearchIcon from "components/Icon/SearchIcon";
    import SettingsIcon from "components/Icon/SettingsIcon";
    import StarIcon from "components/Icon/StarIcon";
    import SyncIcon from "components/Icon/SyncIcon";
    import TabletIcon from "components/Icon/TabletIcon";
    import TagsIcon from "components/Icon/TagsIcon";
    import TrashIcon from "components/Icon/TrashIcon";
    import UndoIcon from "components/Icon/UndoIcon";
    import UploadIcon from "components/Icon/UploadIcon";
    import UserlistIcon from "components/Icon/UserlistIcon";
    import VariationSettingsIcon from "components/Icon/VariationSettingsIcon";
    import WinnerIcon from "components/Icon/WinnerIcon";
    import AlignRightIcon from "components/Icon/AlignRightIcon";
    import CreateAbIcon from "components/Icon/CreateAbIcon";
    import CreateCampaignIcon from "components/Icon/CreateCampaignIcon";
    import CreateMvtIcon from "components/Icon/CreateMvtIcon";
    import ToolbarCodeEditorIcon from "components/Icon/ToolbarCodeEditorIcon";
    import ToolbarDevToolsIcon from "components/Icon/ToolbarDevToolsIcon";
    import ToolbarInteractiveModeIcon from "components/Icon/ToolbarInteractiveModeIcon";
    import ToolbarNewWindowIcon from "components/Icon/ToolbarNewWindowIcon";
    import ToolbarNewWindowCloseIcon from "components/Icon/ToolbarNewWindowCloseIcon";
    import ToolbarReloadIcon from "components/Icon/ToolbarReloadIcon";
    import ToolbarSizeDesktopIcon from "components/Icon/ToolbarSizeDesktopIcon";
    import ToolbarSizeFullWidthIcon from "components/Icon/ToolbarSizeFullWidthIcon";
    import ToolbarSizeMobileIcon from "components/Icon/ToolbarSizeMobileIcon";
    import ToolbarSizeTabletIcon from "components/Icon/ToolbarSizeTabletIcon";
    import ToolbarSizeWidescreenIcon from "components/Icon/ToolbarSizeWidescreenIcon";
}
declare module "components/Input/Input.story" {
    export {};
}
declare module "components/Input/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Label/Label.story" {
    export {};
}
declare module "components/Label/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/SelectDropdown/index" {
    export default SelectDropdown;
    class SelectDropdown extends React.Component<any, any, any> {
        static propTypes: {
            /**
             * Style value that is passed to the OUI button that controls the dropdown.
             */
            buttonStyle: PropTypes.Requireable<string>;
            /**
             * Show error by default.
             */
            displayError: PropTypes.Requireable<boolean>;
            /**
             * Dropdown direction.
             */
            dropdownDirection: PropTypes.Requireable<string>;
            /**
             * Should activator be full width of container
             */
            fullWidth: PropTypes.Requireable<boolean>;
            /**
             * An initial value for the dropdown before anything is selected
             */
            initialPlaceholder: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            /**
             * The select is greyed out if it is disabled.
             */
            isDisabled: PropTypes.Requireable<boolean>;
            /**
             * Dropdown items that can be selected from the select dropdown.
             */
            items: PropTypes.Validator<(PropTypes.InferProps<{
                activatorLabel: PropTypes.Requireable<PropTypes.ReactNodeLike>;
                description: PropTypes.Requireable<string>;
                label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
                value: PropTypes.Validator<string | number | boolean>;
            }> | null | undefined)[]>;
            /**
             * Max width of the activator container.
             */
            maxWidth: PropTypes.Requireable<string | number>;
            /**
             * The minimum width of the dropdown list; any valid CSS width value.
             */
            minDropdownWidth: PropTypes.Requireable<string | number>;
            /**
             * Function that is called when user selects
             * an item from dropdown list.
             */
            onChange: PropTypes.Validator<(...args: any[]) => any>;
            /**
             * Identifier used to create data-test-section attributes for testing.
             */
            testSection: PropTypes.Requireable<string>;
            /**
             * Identifier used to create data-track-id attributes for Heap testing.
             */
            trackId: PropTypes.Requireable<string>;
            /**
             * Value of currently selected item.
             */
            value: PropTypes.Requireable<string | number | boolean>;
            /**
             * Width of the activator container.
             */
            width: PropTypes.Requireable<string | number>;
            /**
             * zIndex of dropdown group
             */
            zIndex: PropTypes.Requireable<number>;
        };
        static defaultProps: {
            buttonStyle: string;
            initialPlaceholder: string;
            displayError: boolean;
            dropdownDirection: string;
            fullWidth: boolean;
            width: string;
            trackId: string;
            testSection: string;
            value: string;
        };
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        renderActivator: ({ buttonRef, onClick, onBlur }: {
            buttonRef: any;
            onClick: any;
            onBlur: any;
        }) => JSX.Element;
        renderContents: () => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/Layout/Layout.story" {
    export {};
}
declare module "components/Layout/ThemeProvider" {
    export function useBootstrapPrefix(prefix: any, defaultPrefix: any): any;
    export default ThemeProvider;
    export function createBootstrapComponent(Component: any, opts: any): React.ForwardRefExoticComponent<any>;
    const Consumer: React.Consumer<Map<any, any>>;
    class ThemeProvider extends React.Component<any, any, any> {
        static propTypes: {
            children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            prefixes: PropTypes.Validator<object>;
        };
        constructor(...args: any[]);
        prefixes: Map<any, any>;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
    export { Consumer as ThemeConsumer };
}
declare module "components/Link/Link.story" {
    export {};
}
declare module "components/ListGroup/index" {
    export function ListGroup({ children, subtitle, testSection, title, }: {
        children: any;
        subtitle: any;
        testSection: any;
        title: any;
    }): JSX.Element;
    export namespace ListGroup {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const subtitle: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const subtitle_1: string;
            export { subtitle_1 as subtitle };
            const testSection_1: string;
            export { testSection_1 as testSection };
            const title_1: string;
            export { title_1 as title };
        }
        export { ListGroupItem as Item };
    }
    export function ListGroupItem({ children, testSection, density, }: {
        children: any;
        testSection: any;
        density: any;
    }): JSX.Element;
    export namespace ListGroupItem {
        export namespace propTypes_1 {
            const children_1: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export { children_1 as children };
            export const density: PropTypes.Requireable<string>;
            const testSection_2: PropTypes.Requireable<string>;
            export { testSection_2 as testSection };
        }
        export { propTypes_1 as propTypes };
        export namespace defaultProps_1 {
            const density_1: string;
            export { density_1 as density };
        }
        export { defaultProps_1 as defaultProps };
    }
    export default ListGroup;
    import PropTypes from "prop-types";
}
declare module "components/ListGroup/ListGroup.story" {
    export {};
}
declare module "utils/poll" {
    /**
     * Method to detect when a given selector appears in the DOM
     * using a recursive setTimeout.
     *
     * NOTE: For performance reasons, this should only be used
     * when an element is certain to appear.
     *
     * @param {String} selector - CSS selector for an element that will appear
     * @returns {Promise}
     */
    export function waitForSelector(selector: string): Promise<any>;
}
declare module "components/Poptip/index" {
    export default Poptip;
    /**
     * Displays help text when hovering on an element.
     * @param {Object} props - Properties passed to component
     * @returns {ReactElement}
     */
    class Poptip extends React.Component<any, any, any> {
        static displayName: string;
        static propTypes: {
            /** Content that, when hovered on, makes the Poptip appear */
            children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            /** content could be a node of a string */
            content: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            /** how long it takes after a trigger event is fired for a tooltip to show |
             * default => 0 */
            delay: PropTypes.Requireable<number>;
            /** disable value | default => false */
            disable: PropTypes.Requireable<boolean>;
            /** how long it takes after a trigger event is fired for a tooltip to hide |
             * default => 0 */
            hideDelay: PropTypes.Requireable<number>;
            /** should the poptip content be animated | default => true */
            isAnimated: PropTypes.Requireable<boolean>;
            /** should the poptip be displayed inline */
            isInline: PropTypes.Requireable<boolean>;
            /** position value options | default => top */
            position: PropTypes.Requireable<string>;
            /** background color | default => dark */
            theme: PropTypes.Requireable<string>;
            /** trigger value options | default => mouseenter focus */
            trigger: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            delay: number;
            disable: boolean;
            hideDelay: number;
            isAnimated: boolean;
            isInline: boolean;
            position: string;
            theme: string;
        };
        constructor(props: any);
        renderPoptip: () => JSX.Element;
        render(): JSX.Element | null;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/NavBar/IconLink/index" {
    export default IconLink;
    class IconLink extends React.PureComponent<any, any, any> {
        static propTypes: {
            hasSeparator: PropTypes.Requireable<boolean>;
            href: PropTypes.Requireable<string>;
            iconName: PropTypes.Validator<string>;
            isActive: PropTypes.Requireable<boolean>;
            isOpen: PropTypes.Requireable<boolean>;
            isSecondaryLink: PropTypes.Requireable<boolean>;
            linkLabel: PropTypes.Validator<string>;
            onClick: PropTypes.Requireable<(...args: any[]) => any>;
            testSection: PropTypes.Validator<string>;
            type: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            hasSeparator: boolean;
            href: string;
            isActive: boolean;
            isOpen: boolean;
            isSecondaryLink: boolean;
            onClick: () => void;
            type: string;
        };
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        renderNavLink: () => JSX.Element;
        onAppRouteLinkClick: (event: any) => any;
        renderAppRouteLink: () => JSX.Element;
        renderExternalLink: () => JSX.Element;
        renderButton: () => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/NavBar/CurrentUserMenu/AccountSwitcher/index" {
    export default AccountSwitcher;
    function AccountSwitcher(props: any): any;
    namespace AccountSwitcher {
        export namespace propTypes {
            export const accountSwitcherHandler: PropTypes.Validator<(...args: any[]) => any>;
            export const accountSwitcherItems: PropTypes.Validator<(PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                description: PropTypes.Validator<string>;
                url: PropTypes.Validator<string>;
                isCurrent: PropTypes.Validator<boolean>;
            }> | null | undefined)[]>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/NavBar/CurrentUserMenu/index" {
    export default CurrentUserMenu;
    class CurrentUserMenu extends React.Component<any, any, any> {
        static propTypes: {
            /** Account Settings Url */
            accountSettingsUrl: PropTypes.Validator<string>;
            /** Function Called to Switch Account */
            accountSwitcherHandler: PropTypes.Validator<(...args: any[]) => any>;
            /** An array of elements containing the following account data
             * text: String
             * url: String
             * description: String
             * isCurrent: Bool */
            accountSwitcherItems: PropTypes.Validator<(PropTypes.InferProps<{
                text: PropTypes.Validator<string>;
                description: PropTypes.Validator<string>;
                url: PropTypes.Validator<string>;
                isCurrent: PropTypes.Validator<boolean>;
            }> | null | undefined)[]>;
            /** True if Navbar is Open, False if collapsed */
            isOpen: PropTypes.Requireable<boolean>;
            /** Account Log Out Url */
            logoutUrl: PropTypes.Validator<string>;
            /** Function called when Emulate is clicked */
            onEmulateClick: PropTypes.Validator<(...args: any[]) => any>;
            /** Account Profile Avatar Url */
            profileAvatarUrl: PropTypes.Requireable<string>;
            /** Account Profile Url */
            profileUrl: PropTypes.Validator<string>;
            /** Show Emulate Link */
            showEmulate: PropTypes.Requireable<boolean>;
            /** Account User name to display */
            userName: PropTypes.Validator<string>;
        };
        static defaultProps: {
            isOpen: boolean;
            showEmulate: boolean;
        };
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        renderActivator: ({ buttonRef, onClick, onBlur }: {
            buttonRef: any;
            onClick: any;
            onBlur: any;
        }) => JSX.Element;
        renderEmulate: () => JSX.Element;
        renderLinks: () => JSX.Element;
        renderCurrentUserMenu: () => JSX.Element[];
        renderPrivacy: () => JSX.Element;
        renderCollapsedCurrentUserMenu: () => JSX.Element;
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/NavBar/index" {
    export default NavBar;
    function NavBar(props: any): JSX.Element;
    namespace NavBar {
        export namespace propTypes {
            export const badgeText: PropTypes.Requireable<string>;
            export function children(props: any, propName: any): Error | null;
            export const homeUrl: PropTypes.Requireable<string>;
            export const isOpen: PropTypes.Requireable<boolean>;
            export const logoUrl: PropTypes.Requireable<string>;
            export const title: PropTypes.Requireable<string>;
            export const trialContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        }
        export namespace defaultProps {
            const badgeText_1: string;
            export { badgeText_1 as badgeText };
            const homeUrl_1: string;
            export { homeUrl_1 as homeUrl };
            const isOpen_1: boolean;
            export { isOpen_1 as isOpen };
            const logoUrl_1: null;
            export { logoUrl_1 as logoUrl };
            const title_1: string;
            export { title_1 as title };
            const trialContent_1: null;
            export { trialContent_1 as trialContent };
        }
        export { PrimaryLink };
        export { SecondaryLink };
        export { CurrentUserMenu };
    }
    import PropTypes from "prop-types";
    function PrimaryLink(props: any): JSX.Element;
    namespace PrimaryLink {
        export { linkPropTypes as propTypes };
        export { linkDefaultProps as defaultProps };
    }
    function SecondaryLink(props: any): JSX.Element;
    namespace SecondaryLink {
        export { linkPropTypes as propTypes };
        export { linkDefaultProps as defaultProps };
    }
    import CurrentUserMenu from "components/NavBar/CurrentUserMenu";
    const linkPropTypes: {
        /** Should show a separator line before this link. */
        hasSeparator: PropTypes.Requireable<boolean>;
        /** Url to Navigate to when type is link. */
        href: PropTypes.Requireable<string>;
        /** Name of Icon. */
        iconName: PropTypes.Validator<string>;
        /** Whether the link is highlighted blue as the current active nav link. */
        isActive: PropTypes.Requireable<boolean>;
        /** Condition in which this link is visible. */
        isVisible: PropTypes.Requireable<boolean>;
        /** Description of url. */
        linkLabel: PropTypes.Requireable<string>;
        /** Handler called when link is clicked. */
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        /** Name of test data section. */
        testSection: PropTypes.Requireable<string>;
        /** Type of Link. */
        type: PropTypes.Requireable<string>;
    };
    const linkDefaultProps: {
        href: string;
        isActive: boolean;
        isVisible: boolean;
        linkLabel: string;
        testSection: null;
        hasSeparator: boolean;
        onClick: () => void;
        type: string;
    };
}
declare module "components/NavBar/NavBar.story" {
    export {};
}
declare module "components/OverlayWrapper/OverlayWrapper.story" {
    export {};
}
declare module "components/OverlayWrapper/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Pagination/Pagination" {
    export default Pagination;
    /**
     * Pagination
     *
     * Example:
     *  <Pagination
     *    currentPage={ 1 }
     *    onChange={ this.handlPageChange }
     *    totalPage={ 123 }
     *  />
     */
    class Pagination extends React.PureComponent<any, any, any> {
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        createPageChangeHandler: (nextPage: any) => () => void;
        render(): JSX.Element;
    }
    namespace Pagination {
        export namespace defaultProps {
            export function onChange(): void;
            export const testSection: string;
        }
        export namespace propTypes {
            export const currentPage: PropTypes.Validator<number>;
            const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { onChange_1 as onChange };
            const testSection_1: PropTypes.Requireable<string>;
            export { testSection_1 as testSection };
            export const totalPages: PropTypes.Validator<number>;
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/Pagination/index" {
    export default Pagination;
    import Pagination from "components/Pagination/Pagination";
}
declare module "components/Pagination/Pagination.story" {
    export {};
}
declare module "components/Pagination/examples/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "utils/custom-prop-types" {
    export function checkPropIsGreaterThanOrEqualTo(numberToCheck: any, isRequired: any): (props: any, propName: any, componentName: any, ...rest: any[]) => any;
}
declare module "components/PaginationControls/index" {
    export default PaginationControls;
    class PaginationControls extends React.Component<any, any, any> {
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        handlePageChange: (newPage: any) => () => void;
        getCoercedInputs(): {
            totalPages: number;
            totalSlots: number;
            buffer: number;
            remainingSlotsToFill: number;
            currentPage: number;
        };
        fillPageSlots(): any;
        renderPageNumbers(): any;
        render(): JSX.Element;
    }
    namespace PaginationControls {
        export namespace propTypes {
            export const currentPage: PropTypes.Validator<number>;
            export const goToPage: PropTypes.Validator<(...args: any[]) => any>;
            export const isLoading: PropTypes.Requireable<boolean>;
            export const testSection: PropTypes.Requireable<string>;
            export const totalPages: (props: any, propName: any, componentName: any, ...rest: any[]) => any;
            export const totalSlots: (props: any, propName: any, componentName: any, ...rest: any[]) => any;
        }
        export namespace defaultProps {
            export function goToPage_1(): void;
            export { goToPage_1 as goToPage };
            const testSection_1: string;
            export { testSection_1 as testSection };
            const totalSlots_1: number;
            export { totalSlots_1 as totalSlots };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/PaginationControls/PaginationControls.story" {
    export {};
}
declare module "components/Popover/Popover.story" {
    export {};
}
declare module "components/Popover/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Poptip/Poptip.story" {
    export {};
}
declare module "components/Poptip/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/ProgressBar/index" {
    export default ProgressBar;
    function ProgressBar({ displayError, leftLabel, max, min, progress, rightLabel, topLabel, }: any): any;
    namespace ProgressBar {
        export namespace propTypes {
            export const displayError: PropTypes.Requireable<boolean>;
            export const leftLabel: PropTypes.Requireable<string>;
            export const max: PropTypes.Requireable<string | number>;
            export const min: PropTypes.Requireable<string | number>;
            export const progress: PropTypes.Requireable<string | number>;
            export const rightLabel: PropTypes.Requireable<string>;
            export const topLabel: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/ProgressBar/ProgressBar.story" {
    export {};
}
declare module "components/ProgressBar/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/ProgressDots/index" {
    export default ProgressDots;
    function ProgressDots({ testSection }: any): any;
    namespace ProgressDots {
        export namespace propTypes {
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/ProgressDots/ProgressDots.story" {
    export {};
}
declare module "components/ProgressDots/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Radio/index" {
    export default Radio;
    function Radio({ isDisabled, testSection, name, defaultChecked, checked, onChange, label, labelWeight, }: any): any;
    namespace Radio {
        export namespace propTypes {
            export const checked: PropTypes.Requireable<boolean>;
            export const defaultChecked: PropTypes.Requireable<boolean>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const labelWeight: PropTypes.Requireable<string>;
            export const name: PropTypes.Validator<string>;
            export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const labelWeight_1: string;
            export { labelWeight_1 as labelWeight };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Radio/Radio.story" {
    export {};
}
declare module "components/Radio/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/RangeSlider/constants" {
    export const FILL_COLOR_MAP: {
        aqua: string;
        amber: string;
        default: string;
        green: string;
        orange: string;
        pink: string;
        red: string;
        magenta: string;
        grey: string;
    };
    namespace _default {
        export { FILL_COLOR_MAP };
    }
    export default _default;
}
declare module "components/RangeSlider/index" {
    export default RangeSlider;
    function RangeSlider(props: any): JSX.Element;
    namespace RangeSlider {
        export namespace propTypes {
            export const fillColorName: PropTypes.Requireable<string>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
            export const useOffForLabel: PropTypes.Requireable<boolean>;
            export const value: PropTypes.Requireable<number>;
        }
        export namespace defaultProps {
            export { DEFAULT_FILL_COLOR_NAME as fillColorName };
            const isDisabled_1: boolean;
            export { isDisabled_1 as isDisabled };
            const onChange_1: undefined;
            export { onChange_1 as onChange };
            const testSection_1: undefined;
            export { testSection_1 as testSection };
            const useOffForLabel_1: boolean;
            export { useOffForLabel_1 as useOffForLabel };
            const value_1: undefined;
            export { value_1 as value };
        }
    }
    import PropTypes from "prop-types";
    const DEFAULT_FILL_COLOR_NAME: "default";
}
declare module "components/RangeSlider/Rangeslider.story" {
    export {};
}
declare module "components/Select/index" {
    export default Select;
    function Select({ children, id, isDisabled, name, }: any): any;
    namespace Select {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const id: PropTypes.Requireable<string>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const name: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/Select/Select.story" {
    export {};
}
declare module "components/Select/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/SelectDropdown/SelectDropdown.story" {
    export {};
}
declare module "components/Sheet/index" {
    export default Sheet;
    function Sheet(props: any): JSX.Element;
    namespace Sheet {
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const footerButtonList: PropTypes.Validator<any[]>;
            export const hasCloseButton: PropTypes.Requireable<boolean>;
            export const onClose: PropTypes.Requireable<(...args: any[]) => any>;
            export const subtitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const testSection: PropTypes.Requireable<string>;
            export const title: PropTypes.Validator<string>;
            export const warningContent: PropTypes.Requireable<string>;
            export const warningTestSection: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const hasCloseButton_1: boolean;
            export { hasCloseButton_1 as hasCloseButton };
            export function onClose_1(): void;
            export { onClose_1 as onClose };
            const subtitle_1: string;
            export { subtitle_1 as subtitle };
            const testSection_1: string;
            export { testSection_1 as testSection };
            const warningTestSection_1: string;
            export { warningTestSection_1 as warningTestSection };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Sheet/Sheet.story" {
    export {};
}
declare module "components/Sidebar/Sidebar" {
    export default Sidebar;
    function Sidebar(props: any): JSX.Element;
    namespace Sidebar {
        export namespace defaultProps {
            export const anchor: string;
            export const border: boolean;
            export const docked: boolean;
            export const isOpen: boolean;
            export const width: number;
        }
        export namespace propTypes {
            const anchor_1: PropTypes.Requireable<string>;
            export { anchor_1 as anchor };
            const border_1: PropTypes.Requireable<boolean>;
            export { border_1 as border };
            export const boxShadow: PropTypes.Requireable<boolean>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            const docked_1: PropTypes.Requireable<boolean>;
            export { docked_1 as docked };
            const isOpen_1: PropTypes.Requireable<boolean>;
            export { isOpen_1 as isOpen };
            export const testSection: PropTypes.Requireable<string>;
            const width_1: PropTypes.Validator<number>;
            export { width_1 as width };
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Sidebar/Sidebar.story" {
    export {};
}
declare module "components/Sidebar/index" {
    export default Sidebar;
    import Sidebar from "components/Sidebar/Sidebar";
}
declare module "components/Sidebar/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Sortable/draggableTypes" {
    export const item: unique symbol;
    namespace _default {
        export { item };
    }
    export default _default;
}
declare module "components/Sortable/SortTarget/index" {
    var _default: import("react-dnd").DndComponentClass<any>;
    export default _default;
}
declare module "components/Sortable/SortableItem/index" {
    var _default: import("react-dnd").DndComponentClass<any>;
    export default _default;
}
declare module "components/Sortable/SortableGroup/index" {
    export default WrappedGroup;
    const WrappedGroup: import("react-dnd").DndComponentClass<any>;
}
declare module "components/Sortable/SortDragLayer/index" {
    var _default: import("react-dnd").DndComponentClass<any>;
    export default _default;
}
declare module "components/Sortable/index" {
    /**
     * Please note: in order to test this component with Enzyme, this component must
     * by wrapped in a test version of HTML5Backend. Therefore, an unwrapped version
     * of this component must be accessible to unit test files.
     */
    export const UnwrappedSortable: typeof Sortable;
    var _default: typeof Sortable & import("react-dnd").ContextComponent<any>;
    export default _default;
    class Sortable extends React.Component<any, any, any> {
        static propTypes: {
            /** Whether or not to force items into groups */
            allowGrouping: PropTypes.Requireable<boolean>;
            /**
             * Initial value of the <Sortable /> component. List of items and groups.
             * Can either be an Immutable.List or a JS array containing Immutable.Maps
             * or JS objects for items/groups, respectively.
             *
             * Default value format: [ <groups or items> ]
             * Item format: { type: 'item', id: 1, text: 'Hello' }
             * Group format: [ <items only> ]
             */
            defaultValue: PropTypes.Validator<any>;
            /**
             * Handler that is called when a drag interaction ends. This function
             * receives the Immutable.List value of the drag and drop component as
             * an argument.
             */
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            /**
             * Function for rendering custom components in the drag-and-drop context.
             * This function will receive one object argument with the following
             * properties:
             *
             * - baseTestSection (String): Test section name passed to <Sortable />
             * - connectDragSource (Function): Wrap your item component with
             *                                 this function to make it draggable
             * - item (Immutable.Map): Contains item data (id, text)
             * - isDragPreview (Boolean): Whether the current item is a preview
             * - isDragging (Boolean): Whether the current item is being dragged
             * - position (Array<Number>): Indeces representing the nested item position
             */
            renderItem: PropTypes.Validator<(...args: any[]) => any>;
            /** Test section name */
            testSection: PropTypes.Requireable<string>;
        };
        static defaultProps: {
            allowGrouping: boolean;
            onChange: () => void;
            testSection: string;
        };
        constructor(props: any);
        groupKeyCounter: number;
        state: {
            items: Immutable.List<any>;
        };
        componentDidUpdate(prevProps: any, prevState: any): void;
        shouldComponentUpdate(nextProps: any, nextState: any): boolean;
        generateGroupId: () => number;
        moveItem: (currentPosition: any, nextPosition: any) => Promise<{
            position: number[];
        }>;
        endDrag: () => void;
        render(): JSX.Element;
    }
    import React from "react";
    import Immutable from "immutable";
    import PropTypes from "prop-types";
}
declare module "components/Sortable/DragAndDrop.story" {
    export {};
}
declare module "components/Spinner/Spinner.story" {
    export {};
}
declare module "components/Spinner/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Steps/index" {
    export default Steps;
    class Steps extends React.Component<any, any, any> {
        static propTypes: {
            /**
             * The currently selected step, maps to a value in items.
             */
            currentStep: PropTypes.Validator<string | number>;
            /**
             * Dropdown items that can be selected from the select dropdown.
             */
            items: PropTypes.Validator<(PropTypes.InferProps<{
                value: PropTypes.Validator<string | number>;
                label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            }> | null | undefined)[]>;
            /**
             * Function that is called when user clicks on a step.
             */
            onClick: PropTypes.Validator<(...args: any[]) => any>;
            /**
             * Identifier used to create data-test-section attributes for testing.
             */
            testSection: PropTypes.Requireable<string>;
            /**
             * Determines whether to show editable styling,
             * and whether to call passed click handler.
             */
            userCanEdit: PropTypes.Requireable<boolean>;
        };
        static defaultProps: {
            userCanEdit: boolean;
        };
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        render(): JSX.Element;
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/Steps/Steps.story" {
    export {};
}
declare module "components/Switch/index" {
    export default Switch;
    function Switch(props: any): JSX.Element;
    namespace Switch {
        export namespace propTypes {
            export const checked: PropTypes.Requireable<boolean>;
            export const elementId: PropTypes.Requireable<string>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            export const testSection: PropTypes.Requireable<string>;
        }
    }
    import PropTypes from "prop-types";
}
declare module "components/Switch/Switch.story" {
    export {};
}
declare module "components/TabNav/Tab/index" {
    export default Tab;
    function Tab(props: any): any;
    namespace Tab {
        export namespace propTypes {
            export const children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            export const isActive: PropTypes.Requireable<boolean>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const onClick: PropTypes.Validator<(...args: any[]) => any>;
            export const tabId: PropTypes.Validator<string>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export const displayName: string;
    }
    import PropTypes from "prop-types";
}
declare module "components/TabNav/index" {
    export default TabNav;
    function TabNav({ activeTab, children, style, testSection, }: any): any;
    namespace TabNav {
        export namespace propTypes {
            export const activeTab: PropTypes.Validator<string>;
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const style: PropTypes.Requireable<(string | null | undefined)[]>;
            export const testSection: PropTypes.Requireable<string>;
        }
        export { Tab };
    }
    import PropTypes from "prop-types";
    import Tab from "components/TabNav/Tab";
}
declare module "components/TabNav/TabNav.story" {
    export {};
}
declare module "components/TabNav/example/index" {
    var _default: {
        isPadded: boolean;
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Table/Table.story" {
    export {};
}
declare module "components/Table/example/index" {
    var _default: {
        isPadded: boolean;
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/TextField/index" {
    export default TextField;
    function TextField({ note, defaultValue, displayError, isDisabled, isFilter, isOptional, isReadOnly, onBlur, isRequired, label, min, max, onChange, onInput, onKeyDown, onFocus, placeholder, testSection, type, value, }: any): any;
    namespace TextField {
        export const propTypes: {
            /** The default value of the input used on initial render */
            defaultValue: PropTypes.Requireable<string>;
            /** Toggle error state styles  */
            displayError: PropTypes.Requireable<boolean>;
            /** Prevents input from being modified and appears disabled */
            isDisabled: PropTypes.Requireable<boolean>;
            /** Includes error if true */
            isFilter: PropTypes.Requireable<boolean>;
            /** Adds an optional label if there is a label provided
             *  @param {Object} props Object of props
             *  @returns {Error} Error or null
             */
            isOptional: PropTypes.Requireable<boolean>;
            /** Prevents input from being modified but doesn't appear disabled */
            isReadOnly: PropTypes.Requireable<boolean>;
            /** Prevents input from being submitted without value */
            isRequired: PropTypes.Requireable<boolean>;
            /** Text that describes the input */
            label: PropTypes.Requireable<string>;
            /**
             * Max value for the `input`. Should be used only when `type` is `number`.
             */
            max: PropTypes.Requireable<number>;
            /**
             * Min value for the `input`. Should be used only when `type` is `number`.
             */
            min: PropTypes.Requireable<number>;
            /** Append note near form input. */
            note: PropTypes.Requireable<string>;
            /**
             * Function that fires when the input loses focus. It fires regardless of
             * whether the value has changed.
            */
            onBlur: PropTypes.Requireable<(...args: any[]) => any>;
            /** Function that fires when the input loses focus after the value changes */
            onChange: PropTypes.Requireable<(...args: any[]) => any>;
            /** Function that fires when the input gains focus */
            onFocus: PropTypes.Requireable<(...args: any[]) => any>;
            /** Function that fires on keypress */
            onInput: PropTypes.Requireable<(...args: any[]) => any>;
            /** Function that fires when a key is pressed down */
            onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
            /** Input placeholder text */
            placeholder: PropTypes.Requireable<string>;
            /** Hook for automated JavaScript tests */
            testSection: PropTypes.Requireable<string>;
            /** Supported input types */
            type: PropTypes.Validator<string>;
            /** Text within the input */
            value: PropTypes.Requireable<string | number>;
        };
    }
    import PropTypes from "prop-types";
}
declare module "components/TextField/TextField.story" {
    export {};
}
declare module "components/TextField/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Textarea/index" {
    export default Textarea;
    /**
     * Generates a `textarea` element.
     * @param {Object} props - Properties passed to component
     * @returns {ReactElement}
     */
    class Textarea extends React.Component<any, any, any> {
        constructor(props: Readonly<any>);
        constructor(props: any, context?: any);
        blur(): void;
        renderTextarea({ defaultValue, displayError, focus, isReadOnly, isRequired, isDisabled, maxLength, numRows, onBlur, onChange, onFocus, onInput, onKeyDown, placeholder, testSection, value, }: {
            defaultValue: any;
            displayError: any;
            focus: any;
            isReadOnly: any;
            isRequired: any;
            isDisabled: any;
            maxLength: any;
            numRows: any;
            onBlur: any;
            onChange: any;
            onFocus: any;
            onInput: any;
            onKeyDown: any;
            placeholder: any;
            testSection: any;
            value: any;
        }): JSX.Element;
        _textarea: HTMLTextAreaElement | null | undefined;
        renderNote({ note, testSection }: {
            note: any;
            testSection: any;
        }): JSX.Element;
        render(): any;
    }
    namespace Textarea {
        export namespace propTypes {
            export const defaultValue: PropTypes.Requireable<string>;
            export const displayError: PropTypes.Requireable<boolean>;
            export const focus: PropTypes.Requireable<boolean>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export function isOptional(props: any): Error;
            export const isReadOnly: PropTypes.Requireable<boolean>;
            export const isRequired: PropTypes.Requireable<boolean>;
            export const label: PropTypes.Requireable<string>;
            export const maxLength: PropTypes.Requireable<number>;
            export const note: PropTypes.Requireable<string>;
            export const numRows: PropTypes.Requireable<number>;
            export const onBlur: PropTypes.Requireable<(...args: any[]) => any>;
            export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
            export const onFocus: PropTypes.Requireable<(...args: any[]) => any>;
            export const onInput: PropTypes.Requireable<(...args: any[]) => any>;
            export const onKeyDown: PropTypes.Requireable<(...args: any[]) => any>;
            export const placeholder: PropTypes.Requireable<string>;
            export const testSection: PropTypes.Requireable<string>;
            export const value: PropTypes.Requireable<string>;
        }
        export namespace defaultProps {
            const displayError_1: boolean;
            export { displayError_1 as displayError };
            const focus_1: boolean;
            export { focus_1 as focus };
            const label_1: null;
            export { label_1 as label };
            const note_1: null;
            export { note_1 as note };
            const numRows_1: number;
            export { numRows_1 as numRows };
            const isOptional_1: boolean;
            export { isOptional_1 as isOptional };
        }
    }
    import React from "react";
    import PropTypes from "prop-types";
}
declare module "components/Textarea/Textarea.story" {
    export {};
}
declare module "components/Textarea/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/Token/Token.story" {
    export {};
}
declare module "components/Token/example/index" {
    var _default: {
        examples: JSX.Element[];
    }[];
    export default _default;
}
declare module "components/TokensInput/index" {
    export function TokensInput({ addOnBlur, addOnPaste, extraAddKeys, maxTags, onChange, onInputBlur, onInputChange, onInputFocus, placeholder, tokens, }: any): any;
    export namespace TokensInput {
        export namespace propTypes {
            export const addOnBlur: PropTypes.Requireable<boolean>;
            export const addOnPaste: PropTypes.Requireable<boolean>;
            export const extraAddKeys: PropTypes.Requireable<(string | number | null | undefined)[]>;
            export const maxTags: PropTypes.Requireable<number>;
            export const onChange: PropTypes.Validator<(...args: any[]) => any>;
            export const onInputBlur: PropTypes.Requireable<(...args: any[]) => any>;
            export const onInputChange: PropTypes.Requireable<(...args: any[]) => any>;
            export const onInputFocus: PropTypes.Requireable<(...args: any[]) => any>;
            export const placeholder: PropTypes.Requireable<string>;
            export const tokens: Array<TokenWrapper>;
        }
        export namespace defaultProps {
            const addOnBlur_1: boolean;
            export { addOnBlur_1 as addOnBlur };
            const addOnPaste_1: boolean;
            export { addOnPaste_1 as addOnPaste };
            const extraAddKeys_1: never[];
            export { extraAddKeys_1 as extraAddKeys };
            const maxTags_1: number;
            export { maxTags_1 as maxTags };
            export function onInputBlur_1(): void;
            export { onInputBlur_1 as onInputBlur };
            export function onInputChange_1(): void;
            export { onInputChange_1 as onInputChange };
            export function onInputFocus_1(): void;
            export { onInputFocus_1 as onInputFocus };
            const placeholder_1: string;
            export { placeholder_1 as placeholder };
        }
    }
    export default TokensInput;
    export type TokenWrapper = {
        /**
         * - The text display for the token.
         */
        name: string;
        /**
         * - The style to use for displaying via <Token>
         * Indicates how to style the token.
         */
        style?: string | undefined;
    };
    import PropTypes from "prop-types";
}
declare module "components/TokensInput/TokensInput.story" {
    export {};
}
declare module "components/Toolbar/index" {
    export default Toolbar;
    function Toolbar(props: any): JSX.Element;
    namespace Toolbar {
        export namespace defaultProps {
            export const isBottomToolbar: boolean;
        }
        export namespace propTypes {
            export const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            const isBottomToolbar_1: PropTypes.Requireable<boolean>;
            export { isBottomToolbar_1 as isBottomToolbar };
            export const testSection: PropTypes.Requireable<string>;
        }
        export { ToolbarButton as Button };
        export { ToolbarLink as Link };
        export { Right };
        export { Left };
    }
    import PropTypes from "prop-types";
    function ToolbarButton(props: any, context: any): JSX.Element;
    namespace ToolbarButton {
        export namespace propTypes_1 {
            export const icon: PropTypes.Requireable<string>;
            export const isActive: PropTypes.Requireable<boolean>;
            export const isDisabled: PropTypes.Requireable<boolean>;
            export const isDropdown: PropTypes.Requireable<boolean>;
            export const label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export const onClick: PropTypes.Requireable<(...args: any[]) => any>;
            const testSection_1: PropTypes.Requireable<string>;
            export { testSection_1 as testSection };
            export const title: PropTypes.Requireable<string>;
        }
        export { propTypes_1 as propTypes };
        export namespace defaultProps_1 {
            const isDropdown_1: boolean;
            export { isDropdown_1 as isDropdown };
            const isActive_1: boolean;
            export { isActive_1 as isActive };
            const isDisabled_1: boolean;
            export { isDisabled_1 as isDisabled };
        }
        export { defaultProps_1 as defaultProps };
    }
    function ToolbarLink(props: any, context: any): JSX.Element;
    namespace ToolbarLink {
        export namespace propTypes_2 {
            export const href: PropTypes.Requireable<string>;
            const icon_1: PropTypes.Requireable<string>;
            export { icon_1 as icon };
            const isActive_2: PropTypes.Requireable<boolean>;
            export { isActive_2 as isActive };
            const isDisabled_2: PropTypes.Requireable<boolean>;
            export { isDisabled_2 as isDisabled };
            const isDropdown_2: PropTypes.Requireable<boolean>;
            export { isDropdown_2 as isDropdown };
            const label_1: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export { label_1 as label };
            const onClick_1: PropTypes.Requireable<(...args: any[]) => any>;
            export { onClick_1 as onClick };
            const testSection_2: PropTypes.Requireable<string>;
            export { testSection_2 as testSection };
            const title_1: PropTypes.Requireable<string>;
            export { title_1 as title };
        }
        export { propTypes_2 as propTypes };
    }
    function Right(props: any): JSX.Element;
    namespace Right {
        export namespace propTypes_3 {
            const children_1: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export { children_1 as children };
        }
        export { propTypes_3 as propTypes };
    }
    function Left(props: any): JSX.Element;
    namespace Left {
        export namespace propTypes_4 {
            const children_2: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            export { children_2 as children };
        }
        export { propTypes_4 as propTypes };
    }
}
declare module "components/Toolbar/Toolbar.story" {
    export {};
}
