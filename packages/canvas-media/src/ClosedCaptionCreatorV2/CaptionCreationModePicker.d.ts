import type { CaptionCreationMode } from './types';
export interface CaptionCreationModePickerProps {
    onSelect: (mode: CaptionCreationMode) => void;
    showAutoOption?: boolean;
    addNewButtonRef?: (el: Element | null) => void;
}
/**
 * Component for choosing between manual upload or auto-captioning
 */
export declare function CaptionCreationModePicker({ onSelect, showAutoOption, addNewButtonRef, }: CaptionCreationModePickerProps): import("react").JSX.Element;
