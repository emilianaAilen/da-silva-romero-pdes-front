import useSWR from 'swr';
import { Purchases as PurchasesUI } from './purchases';
import { API } from '../../../../api';
import { fetcher } from '../../../common/utils';

export const Purchases = () => {
  const userID = localStorage.getItem('id');
  const { data, error, isLoading } = useSWR(API.getPurchases(userID!), fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });

  return <PurchasesUI purchases={data || []} hasError={error!!} loading={isLoading} />;
}