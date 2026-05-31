interface ManualCaptionCreatorProps {
    languages: {
        id: string;
        label: string;
    }[];
    onPrimary: (languageId: string, file: File) => void;
    onCancel: () => void;
    liveRegion: () => HTMLElement | null;
    mountNode?: HTMLElement | (() => HTMLElement | null);
    onDirtyStateChanged?: (isDirty: boolean) => void;
    elementRef?: (el: Element | null) => void;
}
export declare function ManualCaptionCreator({ languages, onPrimary, onCancel, liveRegion, mountNode, onDirtyStateChanged, elementRef, }: ManualCaptionCreatorProps): import("react").JSX.Element;
export {};
