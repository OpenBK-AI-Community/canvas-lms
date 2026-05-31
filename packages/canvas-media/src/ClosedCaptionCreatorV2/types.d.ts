/**
 * Caption track workflow states — mirrors backend workflow_state values
 */
export type WorkflowState = 'processing' | 'failed' | 'ready';
/**
 * Creation mode for new captions
 */
export type CaptionCreationMode = 'manual' | 'auto';
/**
 * Subtitle file information
 */
export interface SubtitleFile {
    name: string;
    url?: string;
}
/**
 * Subtitle/Caption track
 */
export interface Subtitle {
    url?: string;
    locale: string;
    inherited?: boolean;
    asr?: boolean;
    file?: SubtitleFile;
    filename?: string;
    isNew?: boolean;
    workflow_state?: WorkflowState;
    failedOperation?: 'upload' | 'delete' | 'asr';
    rawFile?: File;
}
/**
 * Language option for selection dropdown
 */
export interface LanguageOption {
    id: string;
    label: string;
}
/**
 * File validation result
 */
export interface ValidationResult {
    valid: boolean;
    error?: string;
}
/**
 * Request headers for API calls
 * Typically includes Authorization header for authenticated requests
 */
export interface RequestHeaders {
    /** Authorization header (e.g., 'Bearer <token>') */
    Authorization?: string;
    /** Allow additional string headers */
    [key: string]: string | undefined;
}
/**
 * Configuration for caption upload/delete operations
 * Provide either mediaObjectId or attachmentId (validated at runtime)
 */
export interface CaptionUploadConfig {
    /** Media object ID - provide either this or attachmentId */
    mediaObjectId?: string;
    /** Attachment ID - provide either this or mediaObjectId */
    attachmentId?: string;
    /** RCS origin URL */
    origin?: string;
    /** Request headers (typically includes Authorization: 'Bearer <token>') */
    headers?: RequestHeaders;
    /** Maximum file size in bytes */
    maxBytes?: number;
}
