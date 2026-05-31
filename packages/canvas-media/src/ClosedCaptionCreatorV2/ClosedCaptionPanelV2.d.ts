import type { CaptionUploadConfig, Subtitle } from './types';
/**
 * Props for ClosedCaptionPanel component
 */
export interface ClosedCaptionPanelProps {
    liveRegion: () => HTMLElement | null;
    mountNode?: HTMLElement | (() => HTMLElement | null);
    subtitles?: Subtitle[];
    onUpdateSubtitles: (subtitles: Subtitle[]) => void;
    userLocale?: string;
    uploadConfig?: CaptionUploadConfig;
    onCaptionUploaded?: (subtitle: Subtitle) => void;
    onCaptionDeleted?: (locale: string) => void;
    onDirtyStateChanged?: (isDirty: boolean) => void;
}
export declare function ClosedCaptionPanelV2({ liveRegion, mountNode, subtitles: initialSubtitles, onUpdateSubtitles, userLocale, uploadConfig, onCaptionUploaded, onCaptionDeleted, onDirtyStateChanged, }: ClosedCaptionPanelProps): import("react").JSX.Element;
