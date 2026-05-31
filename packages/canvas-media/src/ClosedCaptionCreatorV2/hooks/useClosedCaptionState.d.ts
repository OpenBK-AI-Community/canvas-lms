import type { CaptionCreationMode, LanguageOption, Subtitle } from '../types';
interface UseClosedCaptionStateParams {
    initialSubtitles?: Subtitle[];
    /** Will be used later to propagate subtitle changes to parents */
    onUpdateSubtitles: (subtitles: Subtitle[]) => void;
    closedCaptionLanguages: LanguageOption[];
}
interface UseClosedCaptionStateReturn {
    subtitles: Subtitle[];
    creationMode: CaptionCreationMode | null;
    announcement: string | null;
    setAnnouncement: React.Dispatch<React.SetStateAction<string | null>>;
    handleNewButtonClick: () => void;
    handleCreationModeSelect: (mode: CaptionCreationMode) => void;
    handleCancelCreation: () => void;
    handleDeleteRow: (locale: string) => void;
    handleCaptionProcessing: (params: {
        locale: string;
        file?: File;
        isAsr?: boolean;
    }) => void;
    handleCaptionUploaded: (subtitle: Subtitle) => void;
    handleCaptionUploadFailed: (locale: string, failedOperation: 'upload' | 'delete' | 'asr') => void;
    handleCaptionRetrying: (locale: string) => void;
}
/**
 * Manages state for closed captions panel
 * Handles add/delete logic and screen reader announcements
 */
export declare function useClosedCaptionState({ initialSubtitles, onUpdateSubtitles, closedCaptionLanguages, }: UseClosedCaptionStateParams): UseClosedCaptionStateReturn;
export {};
