import useSWR from 'swr';
import { Purchases as PurchasesUI } from './purchases';
import { API } from '../../../../api';
import { fetcher } from '../../../common/utils';
import { UserRole } from '../../../auth/services/types';

export const Purchases = () => {
  const userID = localStorage.getItem('id');
  const role = localStorage.getItem('role');
  const isUser = role === UserRole.user;

  const { data, error, isLoading } = useSWR(isUser ? API.getPurchases(userID!) : API.admin.getPurchases, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <PurchasesUI purchases={data || []} hasError={error!!} loading={isLoading} isUser={isUser} />;
}