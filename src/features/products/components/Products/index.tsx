import useSWR from 'swr';
import { Products as ProductsUI } from './products';
import { API } from '../../../../api';
import { useSearch } from '../../../common/hooks/useSearch';

// To do: Move to utils
const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const error = await res.json();
      throw new Error(JSON.stringify(error));
    }
    return await res.json();
  } catch (error: any) {
    throw new Error(error.message || 'Fetch failed');
  }
};

export const Products = () => {
  const { query } = useSearch();
  const { data, error, isLoading } = useSWR(query ? API.getProducts(query) : null, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <ProductsUI products={data || []} loading={isLoading} hasError={!!error} hasQuery={!!query} />
}