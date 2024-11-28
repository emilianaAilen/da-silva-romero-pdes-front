export type AlertType = 'error' | 'info' | 'success' | 'warning';

export interface ProductSummary {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  external_item_id: string;
  url_image: string;
}