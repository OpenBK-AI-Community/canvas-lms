/**
 * Base props shared across all caption row states
 */
interface BaseCaptionRowProps {
    captionName: string;
    deleteButtonRef?: (el: Element | null) => void;
}
/**
 * Props for a caption in processing state
 */
interface ProcessingCaptionRowProps extends BaseCaptionRowProps {
    workflow_state: 'processing';
}
/**
 * Props for a caption in failed state
 */
interface FailedCaptionRowProps extends BaseCaptionRowProps {
    workflow_state: 'failed';
    failedOperation?: 'upload' | 'delete' | 'asr';
    asr?: boolean;
    onRetry?: () => void;
    onDelete?: () => void;
}
/**
 * Props for a caption in ready state
 */
interface UploadedCaptionRowProps extends BaseCaptionRowProps {
    workflow_state: 'ready';
    filename?: string;
    url?: string;
    onDelete?: () => void;
    isInherited?: boolean;
}
/**
 * Discriminated union of all caption row prop types
 */
export type CaptionRowProps = ProcessingCaptionRowProps | FailedCaptionRowProps | UploadedCaptionRowProps;
export declare function getStatusText(workflow_state: CaptionRowProps['workflow_state'], failedOperation?: 'upload' | 'delete' | 'asr', asr?: boolean): string | undefined;
/**
 * Displays a single caption row with status-specific UI
 */
export declare function CaptionRow(props: CaptionRowProps): import("react").JSX.Element;
export {};
