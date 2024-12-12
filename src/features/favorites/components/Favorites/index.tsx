import useSWR from 'swr';
import { Favorites as FavoritesUI } from './favorites';
import { API } from '../../../../api';
import { fetcher } from '../../../common/utils';
import { UserRole } from '../../../auth/services/types';

export const Favorites = () => {
  const role = localStorage.getItem('role');
  const isAdmin = role === UserRole.admin;

  const { data, error, isLoading } = useSWR(isAdmin ? API.admin.getFavorites : API.getFavorites, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <FavoritesUI favorites={data || []} hasError={error!!} loading={isLoading} isAdmin={isAdmin} />;
}