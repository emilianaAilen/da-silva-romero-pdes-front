import { User } from "../users/types";

export interface TopUser extends User {
  cantPurchasesProducts: number;
}