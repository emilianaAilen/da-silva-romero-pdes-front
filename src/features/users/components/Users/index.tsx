import useSWR from "swr";
import { API } from "../../../../api";
import { fetcher } from "../../../common/utils";
import { Users as UsersUI } from './users';

export const Users = () => {
  const { data, isLoading, error } = useSWR(API.admin.getAllUsers, fetcher);

  return (
    <UsersUI users={data || []} loading={isLoading} hasError={error!!}/>
  );
};
