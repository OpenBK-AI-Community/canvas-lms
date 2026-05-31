interface AutoCaptioningProps {
    onCancel: () => void;
    onPrimary: (selectedLanguageId: string) => void;
    liveRegion: () => HTMLElement | null;
    languages: {
        id: string;
        label: string;
    }[];
    mountNode?: HTMLElement | (() => HTMLElement | null);
    onDirtyStateChanged?: (isDirty: boolean) => void;
    elementRef?: (el: Element | null) => void;
}
export declare const AutoCaptioning: ({ onCancel, onPrimary, liveRegion, languages, mountNode, onDirtyStateChanged, elementRef, }: AutoCaptioningProps) => import("react").JSX.Element;
export {};
