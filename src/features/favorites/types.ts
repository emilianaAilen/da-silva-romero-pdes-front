import { ProductSummary } from "../common/types";

export interface UserFavorites {
  username: string;
  productResponse: ProductSummary[];
}