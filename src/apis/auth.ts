import { postAsync } from '@/apis/API';
import { ApiResponse } from '@/constants/types';

/**
 * 신규 유저의 회원가입을 처리하는 함수 registerAsync
 * @param email 유저의 이메일
 * @param password 유저의 비밀번호
 * @param name 유저의 실명
 * @param nickname 유저의 닉네임
 * @param age 유저의 나이
 * @param gender 유저의 성별
 * @returns 가입 성공 시 201, 실패 시 에러 반환 (1001, 500 등)
 */
export async function registerAsync(
  email: string,
  password: string,
  name: string,
  nickname: string,
  age: number,
  gender: 'm' | 'f',
): ApiResponse<undefined> {
  const response = await postAsync<undefined, any>('/auth/sign-up', undefined, {
    params: { email, password, name, nickname, age, gender },
  });
  return response;
}
