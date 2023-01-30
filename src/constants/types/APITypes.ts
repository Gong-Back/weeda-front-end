/**
 * API 호출 결과 (성공, 실패) 를 나타내는 type
 * @param T 요청 성공 시 인계 받은 데이터 타입
 */
export type APIResponse<T> = Promise<
  { isSuccess: true; result: T } | { isSuccess: false; result: APIError }
>;

/**
 * API 호출 과정에서 발생한 에러와 관련된 interface
 * @param code 백엔드 측에서 전송한 HTTP Status Code
 * @param msg 백엔드 측에서 전송한 에러 관련 메세지
 * @param data 백엔드 측에서 전송한 에러 관련 데이터
 */
export interface APIError {
  code: number;
  msg: string;
  data?: any;
}
