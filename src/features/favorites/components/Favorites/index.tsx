import useSWR from 'swr';
import { Favorites as FavoritesUI } from './favorites';
import { API } from '../../../../api';
import { fetcher } from '../../../common/utils';

export const Favorites = () => {
  const { data, error, isLoading } = useSWR(API.getFavorites, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <FavoritesUI favoritesProducts={data || []} hasError={error!!} loading={isLoading} />;
}