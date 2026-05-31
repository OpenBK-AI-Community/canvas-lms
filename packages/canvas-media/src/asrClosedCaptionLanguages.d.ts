declare function sortedAsrLanguageList(userLocale: string): {
    id: string;
    readonly label: string;
}[];
declare function asrLanguageForLocale(locale: string): string;
export { sortedAsrLanguageList, asrLanguageForLocale };
