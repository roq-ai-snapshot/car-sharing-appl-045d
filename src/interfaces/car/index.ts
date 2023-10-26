import { BookingInterface } from 'interfaces/booking';
import { RatingInterface } from 'interfaces/rating';
import { ReportInterface } from 'interfaces/report';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  registration_number?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  rating?: RatingInterface[];
  report?: ReportInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
    rating?: number;
    report?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  registration_number?: string;
  organization_id?: string;
}
