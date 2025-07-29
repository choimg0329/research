/**
 * 공통 유틸리티 함수들
 */

/**
 * 객체가 null이거나 undefined인지 확인
 * @param value - 확인할 값
 * @returns null 또는 undefined인 경우 true
 */
export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}

/**
 * 빈 문자열인지 확인
 * @param value - 확인할 문자열
 * @returns 빈 문자열인 경우 true
 */
export function isEmptyString(value: string): boolean {
  return value === null || value === undefined || value.trim() === '';
}

/**
 * 객체가 비어있는지 확인
 * @param obj - 확인할 객체
 * @returns 빈 객체인 경우 true
 */
export function isEmptyObject(obj: any): boolean {
  return obj && Object.keys(obj).length === 0;
}

/**
 * 배열이 비어있는지 확인
 * @param arr - 확인할 배열
 * @returns 빈 배열인 경우 true
 */
export function isEmptyArray(arr: any[]): boolean {
  return !arr || arr.length === 0;
}

/**
 * 날짜를 YYYY-MM-DD 형식으로 포맷
 * @param date - 포맷할 날짜
 * @returns 포맷된 날짜 문자열
 */
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * 현재 시간을 YYYY-MM-DD HH:mm:ss 형식으로 포맷
 * @returns 포맷된 현재 시간 문자열
 */
export function formatDateTime(): string {
  return new Date().toISOString().replace('T', ' ').substring(0, 19);
}

/**
 * 문자열을 카멜케이스로 변환
 * @param str - 변환할 문자열
 * @returns 카멜케이스로 변환된 문자열
 */
export function toCamelCase(str: string): string {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.replace('-', '').replace('_', '').toUpperCase()
  );
}

/**
 * 문자열을 스네이크케이스로 변환
 * @param str - 변환할 문자열
 * @returns 스네이크케이스로 변환된 문자열
 */
export function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
} 