import useSWR from 'swr';
import { Products as ProductsUI } from './products';
import { API } from '../../../../api';
import { useSearch } from '../../../common/hooks/useSearch';
import { fetcher } from '../../../common/utils';

export const Products = () => {
  const { query } = useSearch();

  const { data, error, isLoading } = useSWR(query ? API.getProducts(query) : null, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <ProductsUI products={data || []} loading={isLoading} hasError={!!error} hasQuery={!!query} />
}