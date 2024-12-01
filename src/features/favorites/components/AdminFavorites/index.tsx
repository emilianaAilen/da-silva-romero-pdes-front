import useSWR from 'swr';
import { AdminFavorites as AdminFavoritesUI } from './adminFavorites';
import { API } from '../../../../api';
import { fetcher } from '../../../common/utils';

export const AdminFavorites = () => {
  const { data, error, isLoading } = useSWR(API.admin.getFavorites, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <AdminFavoritesUI usersFavorites={data || []} hasError={error!!} loading={isLoading} />;
}