export interface LoginInputsType {
  email: string;
  password: string;
}

export interface RegisterInputsType extends LoginInputsType {
  passwordCheck: string;
  name: string;
  gender: 'male' | 'female';
  age: number;
  profileImg: string;
  nickname: string;
}

export interface LoginAsyncInput {
  email: string;
  password: string;
}

export interface LoginAsyncOutput {
  token: string;
}

export type InputNameType = 'id' | 'pw' | 'pwCheck';

export type RegisterGenderType = 'm' | 'w';

export type DuplicateOptionType = 'email' | 'nickname';
