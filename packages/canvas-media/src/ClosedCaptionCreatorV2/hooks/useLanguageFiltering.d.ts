import type { LanguageOption, Subtitle } from '../types';
interface UseLanguageFilteringParams {
    allLanguages: LanguageOption[];
    subtitles: Subtitle[];
}
interface UseLanguageFilteringReturn {
    availableLanguages: LanguageOption[];
}
/**
 * Filters available languages based on already-selected subtitles
 * Excludes non-inherited languages that are already selected
 * (includes both manual uploads and auto-generated captions)
 */
export declare function useLanguageFiltering({ allLanguages, subtitles, }: UseLanguageFilteringParams): UseLanguageFilteringReturn;
export {};
