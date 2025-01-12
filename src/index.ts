/**
 * Checks if a string is empty (""), null, undefined, or whitespace only.
 *
 *   - isBlank()          = true
 *   - isBlank(null)      = true
 *   - isBlank("")        = true
 *   - isBlank(" ")       = true
 *   - isBlank("bob")     = false
 *   - isBlank("  bob  ") = false
 *
 * @param str - the string to check
 * @returns true if the string is null, undefined, empty, or whitespace only
 */
export const isBlank = (str?: string | null): boolean => !str || str.trim().length === 0;
