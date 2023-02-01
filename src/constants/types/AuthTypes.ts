export interface LoginInputsType {
  id: string;
  pw: string;
}

export interface RegisterInputsType extends LoginInputsType {
  pwCheck: string;
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
