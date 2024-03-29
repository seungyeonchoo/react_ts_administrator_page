export interface TAccount {
  id: number;
  userId: number;
  uuid: string;
  broker_id: string;
  status: number;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  user?: {
    id: number;
    uuid: string;
    photo: string;
    name: string;
    email: string;
    age: number;
    gender_origin: number;
    birth_date: string;
    phone_number: string;
    address: string;
    detail_address: string;
    last_login: string;
    created_at: string;
    updated_at: string;
    allow_marketing_push: boolean;
    allow_invest_push: boolean;
    is_active: boolean;
    is_staff: boolean;
  };
}
export interface TUser {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: string;
  updated_at: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  accounts?: TAccount[];
}
