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

export interface ProductComment {
  id: string;
  username: string;
  createdAt: string;
  description: string;
  likes: number;
}