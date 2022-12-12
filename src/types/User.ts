import { Address } from './Address';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  companyName: string;
}
