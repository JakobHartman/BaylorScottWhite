import { Address } from './Address';
import { Company } from './Company';

export interface User {
  id: string;
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;

  username: string;
}
