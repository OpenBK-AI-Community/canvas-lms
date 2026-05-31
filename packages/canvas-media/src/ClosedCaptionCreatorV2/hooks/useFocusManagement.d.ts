type FocusAction = {
    type: 'addNew';
} | {
    type: 'afterDelete';
    targetLocale: string;
} | {
    type: 'creationForm';
};
/**
 * Manages focus for the closed caption panel after add/cancel/upload/delete actions.
 *
 * Uses a pending-focus pattern: callers queue a focus action via `queueFocus`,
 * and the action is executed after React commits the render via a no-deps `useEffect`.
 */
export declare function useFocusManagement(): {
    setAddNewButtonRef: (el: Element | null) => void;
    setCreationFormRef: (el: Element | null) => void;
    setDeleteButtonRef: (locale: string) => (el: Element | null) => void;
    queueFocus: (action: FocusAction) => void;
};
export {};
