import type { CaptionUploadConfig, Subtitle } from '../types';
interface UseClosedCaptionUploadProps {
    uploadConfig?: CaptionUploadConfig;
    subtitles: Subtitle[];
    onUploadSuccess?: (subtitle: Subtitle) => void;
    onUploadError?: (error: Error, locale: string) => void;
    onDeleteSuccess?: (locale: string) => void;
    onDeleteError?: (error: Error, locale: string) => void;
}
/**
 * Hook for uploading and deleting caption files using batch APIs
 * Sends the full list of subtitles on each operation
 */
export declare function useClosedCaptionUpload(props: UseClosedCaptionUploadProps): {
    uploadCaption: (locale: string, file: File) => Promise<void>;
    deleteCaption: (locale: string) => Promise<void>;
};
export {};
