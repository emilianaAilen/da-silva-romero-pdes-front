import { UserRole } from "../../../auth/services/types";
import { Products } from "../../../products/components/Products";
import { Users } from "../../../users/components/Users";
import useSWR from "swr";
import { API } from "../../../../api";
import { fetcher } from "../../../common/utils";

export const Home = () => {
  const { data } = useSWR(API.session, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateIfStale: false,
  });

  const isAdmin = data?.roleType === UserRole.admin;

  if (!data) {
    return null;
  }

  if (isAdmin) {
    return <Users />;
  }

  return <Products />;
};