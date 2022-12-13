import { Address } from './Address';

export interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  companyName: string;

  username: string;
}
