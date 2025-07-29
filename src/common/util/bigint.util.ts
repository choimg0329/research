/**
 * BigInt를 문자열로 변환하는 유틸리티 함수
 * @param obj - 변환할 객체
 * @returns BigInt가 문자열로 변환된 객체
 */
export function bigIntToString(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    )
  );
}
