import useSWR from 'swr';
import { Purchases as PurchasesUI } from './purchases';
import { API } from '../../../../api';
import { fetcher } from '../../../common/utils';
import { UserRole } from '../../../auth/services/types';

export const Purchases = () => {
  const userID = localStorage.getItem('id');
  const role = localStorage.getItem('role');
  const { data, error, isLoading } = useSWR(API.getPurchases(userID!), fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <PurchasesUI purchases={data || []} hasError={error!!} loading={isLoading} isUser={role === UserRole.user}/>;
}