import { ProductData } from "../products/types";
import { ProductSummary } from "./types";

export const fetcher = async (url: string) => {
  try {
    const res = await fetch(url, { credentials: 'include' });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Fetch failed');
  }
};

export const poster = async (url: string, payload?: { arg: any }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: payload ? JSON.stringify(payload.arg) : undefined,
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }

    return res.body;
  } catch (error: any) {
    throw new Error(error.message || 'Post failed');
  }
};

export const deleter = async (url: string, payload?: { arg: any }) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: payload ? JSON.stringify(payload.arg) : undefined,
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }

    return res.body;
  } catch (error: any) {
    throw new Error(error.message || 'Delete failed');
  }
};

export const parseToProductData = ({ id, name, price, url_image }: ProductSummary): ProductData => (
  {
    id,
    tittle: name,
    price: Number(price),
    imageLink: url_image
  }
);

export const getLocalDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString();
}