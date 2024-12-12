import useSWR from "swr";
import { API } from "../../../../api";
import { fetcher } from "../../../common/utils";
import { TopUsers as TopUsersUI } from './topUsers';

export const TopUsers = () => {
  const { data, isLoading, error } = useSWR(API.admin.getTopUsers, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateIfStale: false,
  });

  return <TopUsersUI users={data || []} loading={isLoading} hasError={error!!} />
}