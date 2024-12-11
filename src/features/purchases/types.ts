import { ProductSummary } from "../common/types";

export interface Purchase {
  id: string;
  user_id: string;
  puntage: number;
  price_buyed: number;
  total_buyed: number;
  product: ProductSummary;
}

export interface UserPurchases {
  username: string;
  productPurchase: Purchase[];
}