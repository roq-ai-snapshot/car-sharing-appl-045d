import { RatingInterface } from 'interfaces/rating';
import { ReportInterface } from 'interfaces/report';
import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_time: any;
  end_time: any;
  user_id: string;
  car_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  rating?: RatingInterface[];
  report?: ReportInterface[];
  user?: UserInterface;
  car?: CarInterface;
  _count?: {
    rating?: number;
    report?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  status?: string;
}
