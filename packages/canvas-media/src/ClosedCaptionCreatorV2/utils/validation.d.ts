import type { ValidationResult } from '../types';
/**
 * Validates a caption file for size and type
 * @param file - The file to validate
 * @returns ValidationResult with valid flag and optional error message
 */
export declare function validateCaptionFile(file: File): ValidationResult;
