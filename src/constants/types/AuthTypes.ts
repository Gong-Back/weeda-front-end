export interface LoginInputsType {
  id: string;
  pw: string;
}

export interface RegisterInputsType extends LoginInputsType {
  pwCheck: string;
}

export type InputNameType = 'id' | 'pw' | 'pwCheck';
