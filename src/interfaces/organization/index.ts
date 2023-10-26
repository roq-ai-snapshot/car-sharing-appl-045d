import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  car?: CarInterface[];

  _count?: {
    car?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  country?: string;
  name?: string;
  tenant_id?: string;
}
